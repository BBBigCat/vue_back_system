<template>
  <div class="head">
    <div>
      <ul>
        <li><span class="title">这是一个头部</span></li>
        <li>欢迎</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: "头部组件"
      }
    }
  }
</script>

<style type="scss" scoped>
  .head{
    height: 10%;
  }
  ul{
    height: 10vh;
    min-height: 64px;
    /*line-height: 64px;*/
    color: white;
    background-color: rgb(35,38,46);
    display: flex;
    justify-content:space-between;
  }
  ul li{
    padding: 0 40px 0 40px;
    display: flex;
    align-items: center;
  }
  .title{
    font-size: 3rem;
  }
</style>
