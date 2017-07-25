'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'
import lowdb from 'lowdb'
import path from 'path'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
} else {
  global.__static = path.join(__dirname, '../../static')
}

const db = lowdb(path.join(global.__static, '/db.json'))

db.defaults({
  list: [],
  user: {
    name: 'Rookie_wan'
  }
})
  .write()

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:8800`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * ipcMain
 */
ipcMain.on('GET_DAY_LIST', (event) => {
  let list = db.get('list').value()
  let dayList = []
  list.map(item => {
    let date = new Date(item.targetTime * 1000)
    let dayStart = Math.floor((new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)).getTime() / 1000)
    if (dayList.indexOf(dayStart) === -1) {
      dayList.push(dayStart)
    }
  })
  event.sender.send('GET_DAY_LIST_BACK', dayList)
  // let date = new Date(ts * 1000)
  // let dayStart = Math.floor((new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)).getTime() / 1000)
  // let dayEnd = Math.floor((new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59)).getTime() / 1000)
  // let value = db.get('list')
  //               .filter(item => (dayStart <= item.targetTime && dayEnd >= item.targetTime))
  //               .value()
  // event.sender.send('GET_DAY_LIST_BACK', value)
})
ipcMain.on('GET_TODOLIST', (event, { ts }) => {
  let date = new Date(ts * 1000)
  let dayStart = Math.floor((new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)).getTime() / 1000)
  let dayEnd = Math.floor((new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59)).getTime() / 1000)
  let value = db.get('list')
                .filter(item => (dayStart <= item.targetTime && dayEnd >= item.targetTime))
                .value()
  event.sender.send('GET_TODOLIST_BACK', value)
})
ipcMain.on('ADD_ITEM', (event, newItem) => {
  db.get('list')
    .push(newItem)
    .write()
})
