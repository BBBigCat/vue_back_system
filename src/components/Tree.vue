<template>
  <div class="mytree">
    <ul>
      <li>
        <div @click="toggle" :class="{bold: isFolder}" v-if="isFolder">
          {{name}}
          <span>[{{ open ? '-' : '+' }}]</span>
        </div>

        <ul v-show="open" v-if="isFolder">
          <li v-for="item in children" v-if="isFolder">
            {{item.name}}
          </li>
          <li @click="addChild()">+</li>
        </ul>
      </li>
    </ul>
    <vue-count-up :end="2500" :duration="2.5"></vue-count-up>
  </div>
</template>


<script>
import  Count from './Count.vue';
  export default {
    props: {
      model: Object
    },
    data() {
      return {
        name: 'My tree',
        open: false,
        children: [
          {name: 'hello'},
          {name: 'wat'},
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [
                  {name: 'hello'},
                  {name: 'wat'}
                ]
              },
              {name: 'hello'},
              {name: 'wat'},
              {
                name: 'child folder',
                children: [
                  {name: 'hello'},
                  {name: 'wat'}
                ]
              }
            ]
          }
        ]
      }
    },
    computed: {
      isFolder: function () {
        console.log(this.children);
        console.log(this.children.length);
        return this.children &&
          this.children.length
      }
    },

    methods: {
      toggle() {
        if (this.isFolder) {
          this.open = !this.open
        }
      },
      addChild() {
        this.children.push({
          name: 'new stuff'
        })
      },
    },
    components:{
      'vue-count-up':Count
    }
  }
</script>

<style type="scss" scoped>
  .mytree {
    padding: 20px;
    font-family: Menlo, Consolas, monospace;
    color: #444;
    cursor: pointer;
  }

  .bold {
    font-weight: bold;
  }

  ul {
    padding-left: 2em;
    line-height: 1.5em;
  }

  ul li {
    list-style-type: circle;
  }
</style>
