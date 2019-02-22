<template>
  <div class="portfolio">
    <span class="avatar"></span>
    <h2 class="name" :name="name">徐&nbsp;尧</h2>
    <h3 class="subtitle">Web前端开发</h3>
    <div class="depoly">
      <div class="fold icon-keyboard_arrow_down" @click="fold()"></div>
      <p class="intro" v-if="isShown">
        <span>&emsp;&emsp;1.&nbsp;对于前端开发，我是一个“野路子”，我并不惭愧，专业基础没有科班的扎实，但数个月后的现在我已经掌握了前端的基本能力，并继续向上攀爬。前端的学习让我明白这是一次没有终点的旅途，这很和我的口味，我时常为自己发掘到热爱的事业而喜悦。</span>
        <br>
        <span>&emsp;&emsp;2.&nbsp;18年转行，9个月自学并掌握了HTML、CSS、JS、VUE等编程语言和技能，也做了诸如仿京东金融，饿了么一类流行方向的app，也和女朋友探讨需求，开发了日记等app，经历了自学，实践了项目，对自己学习能力和热情十分欣慰，这也更加强了我转行的信心，相信未来能更广阔。</span>
        <br>
        <span>&emsp;&emsp;3.&nbsp;我非常热爱电脑和互联网，自小爱钻研电脑，喜欢各类游戏、探索网络的世界，也特爱摆弄电脑硬件、配件，我应该算随着互联网长大的一代人，也着实做了个“网瘾少年”。在校时英语水平优秀，数学和逻辑能力良好，但还是些许后悔当时本科专业选择了土木。</span>
        <br>
        <span>&emsp;&emsp;4.&nbsp;结合了我的性格以及上一份审计工作的特性，做事细心扎实，对自己的工作成果的低误差程度、高严谨程度满意。遇困难或难以把握时会与同事领导积极沟通，找到合理解决途径。喜好钻研、发展和分享新的工作方式，帮助自己以及同事提升效率。</span>
        <br>
        <span>&emsp;&emsp;5.&nbsp;目前在探索更多更深的前端知识，并计划学习后端开发，算法和数据结构等内容，向全栈工程师和架构师方向发展。</span>
      
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
    background-image: url('http://img0.ph.126.net/OjZbMJ6NCBw7tlDxCeX7MA==/6599320466960459256.png');
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
    font-size: 14px;
    font-weight: 500;
    line-height: 1.7;
    run-over(0.5s);

    &>span {
      display: block;
      margin-top: 3px;
      // text-indent: 2em;
    }
  }
}
</style>
