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
        <router-link to="/">栏目三</router-link>
      </li>
      <li>
        <router-link to="/">栏目四</router-link>
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
    height: 100%;
    min-height: 680px;
    float: left;
    background-color: rgb(57, 63, 71);
  }

  ul {
    height: 100%;
  }

  li {
    height: 10%;
    padding-left: 20%;
    line-height: 460%;
    font-size: 1.5rem;
    color: white;
  }

  li:hover {
    background-color: rgb(78, 84, 101);
  }
</style>
