import Vue from 'vue'
import {
  ipcRenderer
} from 'electron'
const state = {
  list: {},
  user: {}
}

const mutations = {
  INIT_DAY_LIST (state, list) {
    list.map(day => {
      let item = {
        date: 'xxxx-xx-xx'
      }
      Vue.set(state.list, day, item)
    })
  },
  INIT_TODOLIST (state, { list, user }) {
    state.list = list
    state.user = user
  },
  ADD_ITEM (state, newItem) {
    console.log(newItem)
    state.list.push(newItem)
  }
}

const actions = {
  getDayList ({commit}) {
    ipcRenderer.once('GET_DAY_LIST_BACK', (event, res) => {
      commit('INIT_DAY_LIST', res)
    })
    ipcRenderer.send('GET_DAY_LIST')
  },
  getTodolist ({commit}, ts = Math.floor((new Date()).getTime() / 1000)) {
    ipcRenderer.once('GET_TODOLIST_BACK', (event, res) => {
      console.log(res)
      commit('INIT_TODOLIST', res)
    })
    ipcRenderer.send('GET_TODOLIST', {ts})
  },
  addItem ({commit, state}, newItem) {
    // ipcRenderer.once('ADD_ITEM_BACK', (event, res) => {
    //   commit('ADD_ITEM', newItem)
    // })
    let ts = Math.floor((new Date()).getTime() / 1000)
    let id = state.list.length > 0 ? state.list[state.list.length - 1].id : 0
    newItem.id = ++id
    newItem.createTime = ts
    newItem.targetTime = ts
    ipcRenderer.send('ADD_ITEM', newItem)
    commit('ADD_ITEM', newItem)
  }
}

export default {
  state,
  mutations,
  actions
}
