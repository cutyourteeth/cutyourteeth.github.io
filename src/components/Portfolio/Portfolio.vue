<template>
  <div class="portfolio">
    <div class="avatar"></div>
    <h2 class="name" :name="name">徐尧-Caper</h2>
    <h3 class="sub-name" :name="name">Web开发(前端/node)</h3>
    <h3 class="subtitle">主要技术栈: React(TS) / Vue / Nest(Express)</h3>
    <div class="detail">
      <div class="fold icon-keyboard_arrow_down" @click="fold()"></div>
      <div class="intro" v-if="isShown">
        <p>自我介绍:</p>
        <div>
          <p class="description">1. 之前：我是一个前端开发者,使用 JavaScript和 VueJS, 自我开发了几个小应用。</p>
          <p class="description">
            2. 现在：我爱上了 Typescript（尤其是类型约束）和
            ReactJS（尤其是hooks），并且使用NestJS开发后端，成为了一个小全栈，时常琢磨数据库和前端性能问题。
          </p>
          <p class="description">
            3. 技术面：短短一年半内我掌握并在工作中使用
            Typescript、React、Vue、Antd、Element、小程序开发、Nestjs（express框架）、typeORM（SQL映射)等框架或是语言，而且对处理技术上的难题也是比较稳健的，这也得益于善用社区的支持和我的捕获信息的能力
          </p>
          <p class="description">
            4. 编程习惯: 我练出了非常好的代码习惯以及代码洁癖，对代码的命名、结构、易读性；组件的拆分、结构、管理要求较高；
            此外我热爱重构，无论是我的还是他人的，我认为重构就是我的进化之路。
          </p>
          <p class="description">
            5. 未来：我一直都保持好奇和探索的热情，目前我正在钻研近期热门的 GraphQL来优化的 API, 同样的, 我也在尝试
            Mongoose,学习无关系的数据库模型。
          </p>
        </div>
        <hr />
        <p>个性:</p>
        <div>
          <p style="white-space: pre-line">1. 编程狂热（我很热爱这工作）
            2. 保持广阔视野， 探索大千世界
            3. 和善沟通，不怼人，不轻易做出评价
            4. 独立思考，不卑不亢，沉着处理问题
            5. 乐于分享，和爱分享的人交流互补，喜欢社区
            6. 喜欢研究 web，app，智能化硬件，做个酷酷的极客
          </p>
        </div>
      </div>
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
  data() {
    return {
      isShown: true
    }
  },
  methods: {
    fold() {
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
    background-image: url('/aboutme/static/images/image/avatar.png');
    background-size: 130px;
    background-position: center;
    border-radius: 50%;
    display: inline-table;
  }

  .name {
    flex: 1;
    font-size: 24px;
    line-height: 48px;
    font-weight: 700;
  }

  .sub-name {
    flex: 1;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .subtitle {
    flex: 1;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
  }

  .detail {
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
    font-weight: 400;
    line-height: 1.7;
    run-over(0.5s);

    &>p {
      padding-top: 3px;
      font-size: 18px;
    }
  }
}
</style>
