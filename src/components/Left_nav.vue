<template>
  <div class="left_nav">
    <ul>
      <li>
        <router-link to="/contents">栏目一</router-link>
      </li>
      <li>
        <router-link to="/todo">栏目二</router-link>
      </li>
      <li>
        <router-link to="/tree">栏目三</router-link>
      </li>
      <li>
        <router-link to="/markdown">栏目四</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "left_nav",
    data() {
      return {
        msg: "左边导航",
      }
    }
  }
</script>

<style type="scss" scoped>
  .left_nav {
    width: 16%;
    height: 90vh;
    min-height: 680px;
    float: left;
    background-color: rgb(57, 63, 71);
  }

  ul {
    height: 100%;
  }
  /*aitem-items:居中对齐弹性盒的各项元素：*/
  li {
    display: flex;
    align-items: center;
    height: 10%;
    padding-left: 20%;
    font-size: 1.5rem;
    color: white;
  }

  li:hover {
    background-color: rgb(78, 84, 101);
  }
</style>
