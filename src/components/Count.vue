<template>
  <div class="g-container">
    <span ref='countup'></span>
  </div>
</template>

<script>
  import CountUp from 'countup.js'

  export default {
    name: 'countup-demo',
    data() {
      return {
        numAnim: null,
      }
    },
    props: {
      startVal:{
        type:String,
        default:'$'
      },
      start: {
        type: Number,
        default: 0
      },
      end: {
        type: Number,
        default: 2017
      },
      decimal: {
        type: Number,
        default: 0
      },
      duration: {
        type: Number,
        default: 2.5
      },
      options: {
        type: Object
      }
    },
    methods: {
      initCountUp() {
        this.numAnim = new CountUp(this.$refs.countup,
          // this.startVal,
          this.start,
          this.end,
          this.decimal,
          this.duration,
          this.options);
        this.numAnim.start();
      }
    }, mounted() {
      this.initCountUp()
    }
  }
</script>

<style type="scss" scoped>
.g-container{
  padding: 20px;
}

</style>
