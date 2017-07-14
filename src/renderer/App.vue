<template>
  <div id="app">
    <sidebar></sidebar>
    <date-list></date-list>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@components/Sidebar'
import DateList from '@components/DateList'
export default {
  name: 'todolist',
  components: {
    Sidebar,
    DateList
  }
}
</script>
<style src="./assets/iconfont/iconfont.css"></style>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
input {
  border: 0;
  outline: 0;
}
a {
  text-decoration: none;
}
.btn {
  border: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  .main {
    flex: 1;
  }
}
</style>
