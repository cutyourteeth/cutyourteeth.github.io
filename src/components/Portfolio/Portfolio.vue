<template>
  <div class="portfolio">
    <span class="avatar"></span>
    <h2 class="name" :name="name">徐尧</h2>
    <h3 class="subtitle">Web前端开发</h3>
    <div class="depoly">
      <a class="fold" @click="fold()">展开</a>
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
        一直以来那恍如向着地狱行进的心情
        恍如游走在刀尖之上
        但无论怎样我也不会让你离开 让自己对自己失望
        你还没决心放手吧
        反正我是一定不会放手的
        就让我爱你
        就让我好好爱你
        你还没决心放手吧
        反正我是一定不会放手的
        就让我爱你
        就让我好好爱你
        噢 亲爱的
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
      isShown: true
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
    letter-spacing: 8px;
  }

  .subtitle {
    flex: 1;
    font-weight: 400;
    font-size: 22px;
    line-height: 44px;
    letter-spacing: -1px;
  }

  .intro {
    flex: 1;
    text-align: left;
    font-size: 16px;
    line-height: 26px;
    run-over(0.5s);
  }
}
</style>
