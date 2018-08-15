<template>
  <div id="contents">
    <div class="content_top">
      <ul>
        <li><h1>Todolist</h1></li>
        <li><input type="text" placeholder="添加Todo"/></li>
      </ul>
    </div>
    <div class="content_body">
      <h2>正在进行
        <span v-html=""></span>
      </h2>
      <ul>
        <li v-for="(item,key) in list">
          <input type="checkbox" />
          <em>{{item}}</em>
          <span></span>
        </li>
      </ul>
    </div>
    <div class="content_bottom">
      <h2>已完成
        <span>0</span>
      </h2>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contents",
    data() {
      return {
        list: ["从下到啊"],
      }
    }
  }
</script>

<style type="scss" scoped>
  #contents {
    width: 100%;
    height: 100%;
  }

  .content_top ul {
    width: 100%;
    color: white;
    background-color: rgb(35, 38, 46);
    display: flex;
    justify-content: space-around;
  }

  .content_top input {
    width: 100%;
    height: 24px;
    margin-top: 10px;
    text-indent: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24), 0 1px 6px rgba(0, 0, 0, 0.45) inset;
    border: none;
  }

  .content_body ul{
    padding: 10px 19% 10px 20%;
  }
  .content_body ul li {
    position: relative;
    height: 30px;
    line-height: 30px;
    border-radius: 6px;
    background-color: white;
  }

  .content_body input {
    width: 20px;
    height: 20px;
    margin: 6px;
  }

  .content_body ul li span {
    width: 20px;
    height: 20px;
    position: absolute;
    margin-top: 6px;
    right: 10px;
    font-size: 1rem;
    text-align: center;
    line-height: 20px;
    background-color: rgb(230, 230, 250);
    border-radius: 50%;
  }

  h2 {
    padding: 10px 20px 10px 20%;
    position: relative;
  }

 h2 span {
    width: 20px;
    height: 20px;
    position: absolute;
    margin-top: 6px;
    right: 20%;
    font-size: 1rem;
    text-align: center;
    line-height: 20px;
    background-color: rgb(230, 230, 250);
    border-radius: 50%;
  }
</style>
