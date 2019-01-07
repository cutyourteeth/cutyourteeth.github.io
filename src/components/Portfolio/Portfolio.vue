<template>
  <div class="portfolio">
    <span class="avatar"></span>
    <h2 class="name" :name="name">徐&nbsp;尧</h2>
    <h3 class="subtitle">Web前端开发</h3>
    <div class="depoly">
      <div class="fold icon-keyboard_arrow_down" @click="fold()"></div>
      <p class="intro" v-if="isShown">
        我曾深信
        我们会一直在爱的美妙感觉里畅游
        相信美好会长留
        梦美得让人不懂珍惜不知足够
        如雾里看花般 我们还相信着奇迹会为我们停留
        奇迹会掌握在我们手中
        你知道 挺过最黑暗的那段时光
        心中的天堂就会让所有心碎成为过往
        无论怎样我也不会让你离开 让自己对自己失望
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: Object
    }
  },
  data () {
    return {
      isShown: false
    }
  },
  methods: {
    fold () {
      this.isShown = !this.isShown
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/mixin';
@import '../../common/stylus/animations';

.portfolio {
  display: flex;
  flex-direction: column;
  // background-color: #fff;
  text-align: center;
  color: #fff;
  padding: 10px 20px;

  .avatar {
    flex: 1;
    margin: 0 auto 20px auto;
    width: 100px;
    height: 100px;
    bg-image('avatar');
    background-size: 130px;
    background-position: center;
    border-radius: 50%;
  }

  .name {
    flex: 1;
    font-size: 24px;
    line-height: 48px;
    font-weight: 700;
  }

  .subtitle {
    flex: 1;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }

  .depoly {
    text-align: center;
    display: block;

    .fold {
      margin: 20px auto 0 auto;
      width: 24px;
      height: 24px;
      breathLight(4s);
      border-radius: 12px;
    }

    .icon-keyboard_arrow_down {
      font-size: 24px;
      line-height: 26px;
    }
  }

  .intro {
    flex: 1;
    width-content(90%, 0, 0);
    text-align: left;
    font-size: 16px;
    line-height: 22px;
    run-over(0.5s);
  }
}
</style>
