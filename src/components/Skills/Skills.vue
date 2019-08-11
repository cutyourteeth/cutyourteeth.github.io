<template>
  <div class="skills">
    <h1 class="title">技术</h1>
    <hr />
    <div class="diagrams">
      <div class="diagram">
        <canvas class="circle" width="320" height="320" ref="js"></canvas>
        <span class="text">
          <strong>JavaScript</strong>
          {{handle.js}}%
        </span>
      </div>
      <div class="diagram">
        <canvas class="circle" width="320" height="320" ref="ts"></canvas>
        <span class="text">
          <strong>Typescript</strong>
          {{handle.ts}}%
        </span>
      </div>
      <div class="diagram">
        <canvas class="circle" width="320" height="320" ref="ReactJS"></canvas>
        <span class="text">
          <strong>ReactJS</strong>
          {{handle.ReactJS}}%
        </span>
      </div>
      <div class="diagram">
        <canvas class="circle" width="320" height="320" ref="vue"></canvas>
        <span class="text">
          <strong>Vue</strong>
          {{handle.vue}}%
        </span>
      </div>
      <div class="diagram">
        <canvas class="circle" width="320" height="320" ref="css"></canvas>
        <span class="text">
          <strong>CSS/SCSS/STYLUS</strong>
          {{handle.css}}%
        </span>
      </div>
      <div class="diagram">
        <canvas class="circle" width="320" height="320" ref="nestJS"></canvas>
        <span class="text">
          <strong>nestJS</strong>
          {{handle.nestJS}}%
        </span>
      </div>
      <div class="diagram">
        <canvas class="circle" width="320" height="320" ref="typeORM"></canvas>
        <span class="text">
          <strong>typeORM</strong>
          {{handle.typeORM}}%
        </span>
      </div>
      <div class="diagram">
        <canvas class="circle" width="320" height="320" ref="SQL"></canvas>
        <span class="text">
          <strong>SQL</strong>
          {{handle.SQL}}%
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      handle: {
        ReactJS: 81,
        js: 83,
        ts: 80,
        css: 82,
        nestJS: 71,
        vue: 78,
        SQL: 60,
        typeORM: 70
      },
      lightGreen: 'rgba(52, 214, 164, 1)'
    }
  },
  mounted() {
    this.progress(this.$refs.ReactJS, this.handle.ReactJS)
    this.progress(this.$refs.css, this.handle.css)
    this.progress(this.$refs.js, this.handle.js)
    this.progress(this.$refs.nestJS, this.handle.nestJS)
    this.progress(this.$refs.ts, this.handle.ts)
    this.progress(this.$refs.vue, this.handle.vue)
    this.progress(this.$refs.SQL, this.handle.SQL)
    this.progress(this.$refs.typeORM, this.handle.typeORM)
    this.circle()
  },
  methods: {
    circle() {
      let eles = document.getElementsByClassName('circle')
      for (let i = 0; i < eles.length; i++) {
        let ctx = eles[i].getContext('2d')
        ctx.beginPath()
        ctx.fillStyle = 'white'
        ctx.arc(160, 160, 140, 0, 2 * Math.PI)
        ctx.fill()
      }
    },
    progress(ele, percent) {
      let ctx = ele.getContext('2d')
      ctx.beginPath()
      ctx.arc(
        160,
        160,
        160,
        (3 / 2) * Math.PI,
        (3 / 2) * Math.PI + (percent / 100) * 2 * Math.PI
      )
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
