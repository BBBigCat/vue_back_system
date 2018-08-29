<template>
  <div id="app">
    <v-Head></v-Head>
    <v-Left></v-Left>
    <!--<div class="nav">-->
    <!--</div>-->
    <div class="mybox">
      <div class="box_content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

  import Head from './components/Head.vue'
  import Left_nav from './components/Left_nav.vue'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'v-Head': Head,
      'v-Left': Left_nav
    }
  }
</script>

<style lang="scss">
  #app {
    height: 100%;
    width: 100%;
    background-color: rgb(242, 242, 242);
  }

  .nav {
    float: left;
    width: 84%;
    min-height: 50px;
    background-color: white;
  }

  .mybox {
    height: 90vh;
    width: 84%;
    background-color: rgb(205,205,205);
    /*background-color: rgb(245,245,245);*/
    float: left;
    overflow-y: scroll;
  }

  .box_content {
    height: 90vh;
    padding: 15px;
  }
</style>
