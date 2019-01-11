<template>
  <div class="portfolio">
    <span class="avatar"></span>
    <h2 class="name" :name="name">徐&nbsp;尧</h2>
    <h3 class="subtitle">Web前端开发</h3>
    <div class="depoly">
      <div class="fold icon-keyboard_arrow_down" @click="fold()"></div>
      <p class="intro" v-if="isShown">
        先前从事工程预结算审计工作长达2年余，转行入web前端开发，在9个月自学并掌握了了HTML、CSS、JS、VUE等编程语言和技能，
        目前在探索更多更深的前端框架知识，并计划学习后端开发，数据库和数据结构等内容，向全栈工程师和架构师方向发展。
        结合了我的性格以及上一份审计工作的特性，在工作上我做事细心扎实，
        对自己的工作成果的低误差程度、高严谨程度满意。
        遇困难及甲乙方的不合理要求时会与领导上层积极沟通，找到合理解决途径。
        喜好钻研、发展和分享新的工作方式，帮助自己以及同事提升效率。适应弹性工作强度。
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
    text-indent: 2em;

  }
}
</style>
