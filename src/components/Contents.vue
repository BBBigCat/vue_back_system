<template>
  <div id="contents">
    <div class="content_top">
      <ul>
        <li><h1>Todolist</h1></li>
        <li><input type="text" v-model="todo" placeholder="todo" @keyup.enter="toadd()"></li>
      </ul>
    </div>
    <div class="content_body">
      <h2>正在进行
        <span></span>
      </h2>
      <ul>
        <li v-for="todo in todos"  v-if="!todo.checked">
          <input type="checkbox" v-model="todo.checked" @change="saveList()"/>
          <em>{{todo.content}}</em>
          <span @click="removeList(todo)"><a href="#">X</a></span>
        </li>
      </ul>
      <!--</div>-->
      <!--<div class="content_bottom">-->
      <h2>已完成
        <span></span>
      </h2>
      <ul>
        <li v-for="todo in todos"  v-if="todo.checked">
          <input type="checkbox" v-model="todo.checked" @change="saveList()"/>
          <em>{{todo.content}}</em>
          <span @click="removeList(todo)"><a href="#">X</a></span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import storage from "../model/storage.js"

  export default {
    name: "contents",
    data() {
      return {
        todo: "",
        todos: storage.get(),
        // list: [{
        //   checked: false,
        //   content: "测试数据一"
        // }, {
        //   checked: false,
        //   content: "测试数据二"
        // }, {
        //   checked: false,
        //   content: "测试数据三"
        // }, {
        //   checked: false,
        //   content: "测试数据四"
        // }],
      }
    },
    watch: {
      todos: {
        handler: function (todos) {
         storage.save(todos)
        },
        deep: true
      }
    },
    methods: {
      saveList() {
        storage.save(this.todos);
      },
      removeList(todo) {
        // this.list.splice(key, 1);
        // storage.remove("list", this.list);
        this.todos.splice(this.todos.indexOf(todo), 1)
      },
      toadd() {
        let value = this.todo && this.todo.trim();
        if (!value) {
          return
        }
          this.todos.push(
            {
              content: this.todo,
              checked: false,
            }
          );
        this.todo = "";
        // storage.set("list", this.list);
      }
    }, mounted() {
      // let list = storage.get("list");
      // if (list) {
      //   this.list = list;
      // }
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

  .content_body ul {
    position: static;
    padding: 10px 20% 10px 20%;
  }

  /*
  使用弹性布局，因为ul li中子元素span绝对定位，脱离文档流，所以不受影响，解决屏幕缩小文字过多把span顶换行
  span中使用的是绝对定位absolute，相对除static定位之外的第一个父元素进行定位，所以此处使用相对定位
  */
  .content_body ul li {
    height: 30px;
    margin: 20px;
    /*min-width: 630px;*/
    display: flex;
    justify-content: flex-start;
    position: relative;
    line-height: 30px;
    border-radius: 6px;
    background-color: white;
  }

  .content_body input {
    width: 20px;
    height: 20px;
    margin: 6px;
    flex: none;
  }

  /*
  文字过多显示省略号
  text-overflow规定当文本溢出包含元素时发生的事情
  */
  .content_body em {
    width: 100%;
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
    line-height: 200%;
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
