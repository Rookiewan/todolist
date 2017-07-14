<template>
  <div id="app">
    <sidebar></sidebar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@components/Sidebar'
export default {
  name: 'todolist',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  .main {
    flex: 1;
  }
}
</style>
