<template>
  <div class="skills">
    <h1>技能</h1>
    <hr>
    <canvas class="circle" ref="html"></canvas>
    <canvas class="circle" ref="circle css"></canvas>
    <canvas class="circle" ref="circle js"></canvas>
    <canvas class="circle" ref="circle jQuery"></canvas>
    <canvas class="circle" ref="circle bootstrap"></canvas>
    <canvas class="circle" ref="circle vue"></canvas>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  mounted () {
    this.circle()
  },
  methods: {
    circle () {
      let eles = document.getElementsByClassName('circle')
      // let eles = this.$refs.html
      console.log(eles)
      for (let i = 0; i < eles.length; i++) {
        let ele = eles[i]
        let ctx = ele.getContent('2d')
        // ctx.beginPath()
        // ctx.fillStyle = 'black'
        // ctx.arc(100, 75, 50, 0, 2 * Math.PI)
        // ctx.stroke()
        ctx.beginPath()
        ctx.arc(200, 200, 80, 1.5 * Math.PI, Math.PI / 2, false)
        ctx.fillStyle = 'white'
        ctx.closePath()
        ctx.fill()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.skills {
  .circle {
    width: 100px;
    height: 75px;
  }
}
</style>
