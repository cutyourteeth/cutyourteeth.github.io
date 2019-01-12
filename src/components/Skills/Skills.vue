<template>
  <div class="skills">
    <h1 class="title">自我打分</h1>
    <hr>
    <div class="diagrams">
      <div class="diagram">
        <canvas class="circle" width="320" height="320" ref="html"></canvas>
        <span class="text">
          <strong>HTML</strong>
          {{handle.html}}%
        </span>
      </div>
      <div class="diagram">
        <canvas class="circle" width="320" height="320" ref="css"></canvas>
        <span class="text">
          <strong>CSS</strong>
          {{handle.css}}%
        </span>
      </div>
      <div class="diagram">
        <canvas class="circle" width="320" height="320" ref="js"></canvas>
        <span class="text">
          <strong>JavaScript</strong>
          {{handle.javascript}}%
        </span>
      </div>
      <div class="diagram">
        <canvas class="circle" width="320" height="320" ref="jquery"></canvas>
        <span class="text">
          <strong>jQuery</strong>
          {{handle.jquery}}%
        </span>
      </div>
      <div class="diagram">
        <canvas class="circle" width="320" height="320" ref="bootstrap"></canvas>
        <span class="text">
          <strong>Bootstrap</strong>
          {{handle.bootstrap}}%
        </span>
      </div>
      <div class="diagram">
        <canvas class="circle" width="320" height="320" ref="vue"></canvas>
        <span class="text">
          <strong>Vue</strong>
          {{handle.vue}}%
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      handle: {
        html: 85,
        css: 82,
        javascript: 80,
        jquery: 75,
        bootstrap: 70,
        vue: 65
      },
      lightGreen: 'rgba(52, 214, 164, 1)'
    }
  },
  mounted () {
    this.progress(this.$refs.html, this.handle.html)
    this.progress(this.$refs.css, this.handle.css)
    this.progress(this.$refs.js, this.handle.javascript)
    this.progress(this.$refs.jquery, this.handle.jquery)
    this.progress(this.$refs.bootstrap, this.handle.bootstrap)
    this.progress(this.$refs.vue, this.handle.vue)
    this.circle()
  },
  methods: {
    circle () {
      let eles = document.getElementsByClassName('circle')
      for (let i = 0; i < eles.length; i++) {
        let ctx = eles[i].getContext('2d')
        ctx.beginPath()
        ctx.fillStyle = 'white'
        ctx.arc(160, 160, 140, 0, 2 * Math.PI)
        ctx.fill()
      }
    },
    progress (ele, percent) {
      let ctx = ele.getContext('2d')
      ctx.beginPath()
      ctx.arc(160, 160, 160, 3 / 2 * Math.PI, (3 / 2 * Math.PI) + (percent / 100 * 2 * Math.PI))
      ctx.lineTo(160, 160)
      ctx.closePath()
      ctx.fillStyle = this.lightGreen
      ctx.fill()
    }
  }
}
</script>

<style lang="stylus" scoped>
.skills {
  font-size: 18px;

  .diagrams {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .diagram {
      position: relative;
      margin: 40px 40px 20px 40px;

      .circle {
        zoom: 0.5;
      }

      .text {
        position: absolute;
        text-align: center;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        font-size: 18px;
        line-height: 1.5;

        &>strong {
          display: block;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
