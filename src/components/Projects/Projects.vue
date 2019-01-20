<template>
  <div class="projects">
    <h1 class="title">举几个栗子</h1>
    <p class="info">(this web built with Vue-cli &amp; Webpack &amp; Stylus)</p>
    <hr>
    <div class="content-wrapper">
      <h2>1.日记册(diarywebapp)</h2>
      <p class="toView">
        预览：
        <a href="https://cutyourteeth.github.io/diary/" class="icon_2-github"></a>
      </p>
      <p class="toCode">
        源码：
        <a href="https://github.com/cutyourteeth/diary/" class="icon_2-github"></a>
      </p>
      <p class="description">
        简介：原生Javascript开发，未用任何js库，stylus预编译css，IndexedDB数据库实现本地存储，界面布局较完善。
        1.indexedDB数据库的写入、输出、筛选；
        2.响应式布局，试用pc和移动端；
        2.自制modal框体、动画、input样式等；
        3.自制toast提示窗体；
        4.首页背景轮播；
        5.添加本地图片，可多图添加，存入数据库，展示框体内的图片依据数量不同布局图片；
        6.日记分类，筛选。
        7.模仿了canvas气泡背景，以及自制了一个算数小游戏；
      </p>
      <p class="danger">注意：由于本项目还在开发新特性，所有依赖资源储存在github，浏览时加载可能较慢；可使用移动端高版本浏览器。</p>
    </div>

    <div class="content-wrapper">
      <h2>2.饿了么webapp</h2>
      <p class="toView">
        预览：
        <a href="https://cutyourteeth.github.io/ele-webapp/dist/">
          <span class="icon_2-github"></span>
        </a>
      </p>
      <p class="toCode">
        源码：
        <a href="https://cutyourteeth.github.io/ele-webapp/">
          <span class="icon_2-github"></span>
        </a>
      </p>
      <p class="description">
        简介：开发工具Vue-cli &amp; Webpack &amp; Stylus 以及其他插件;
        完成了各个部件，由vue-resource完成ajax数据请求，vue-router来引导每个版块。
        基本实现了饿了么app基本的购买界面的基本功能，(查看商品列表，列表动态加载、分类，商家信息，评分)
      </p>
      <p class="danger">注意：商品详情和商家信息还在重构中,存在一些问题敬请谅解。</p>
    </div>

    <div class="content-wrapper">
      <h2>3.京东金融webapp</h2>
      <p class="toView">
        预览：
        <a href="https://cutyourteeth.github.io/JDFinance/dist">
          <span class="icon_2-github"></span>
        </a>
      </p>
      <p class="toCode">
        源码：
        <a href="https://github.com/cutyourteeth/JDFinance">
          <span class="icon_2-github"></span>
        </a>
      </p>
      <p class="description">
        简介：开发工具Vue-cli &amp; Webpack &amp; SCSS 以及插件: vue-awesome-slider &amp; HotCSS;
        利用vue框架，仿照京东金融的app所做的webapp界面。
        在本项目内，开始研究完全的自适应，根据rem以及viewport来控制页面元素大小；之后模仿了vue-awesome-slider做了一个滑动banner；
        着重研究学习了vue模块化、css模块化的核心思路，简述一下就是将模块抽象，一步步提取最骨干的架构，降低最基本模块的耦合程度，提高适用的范围。
      </p>
    </div>

    <div class="content-wrapper">
      <h2>4.计划表(tiny-todo-list)</h2>
      <p class="toView">
        预览：
        <a href="https://cutyourteeth.github.io/tinyApps/todolist/dist/">
          <span class="icon_2-github"></span>
        </a>
      </p>
      <p class="toCode">
        源码：
        <a href="https://github.com/cutyourteeth/tinyApps/todolist">
          <span class="icon_2-github"></span>
        </a>
      </p>
      <p class="description">
        简介：一个计划清单webapp。
        使用了vue-cli、webpack、stylus，采用gird布局，储存方式为localStorage；
      </p>
    </div>

    <div class="content-wrapper">
      <h2>5.自制小模块/工具/web插件</h2>
      <p class="toCode">
        各个小项目源码合集：
        <a href="https://github.com/cutyourteeth/tinyApps">
          <span class="icon_2-github"></span>
        </a>
      </p>

      <div class="grid">
        <div class="item">
          <h4 class="tinyTitle">(1).pc端滑动banner</h4>
          <p class="toView tinyApps">
            预览：
            <a href="https://cutyourteeth.github.io/tinyApps/Swiper/swiper.html">
              <span class="icon_2-github"></span>
            </a>
          </p>
          <p class="description">简介：jQ编写,banner无限循环</p>
        </div>

        <div class="item">
          <h4 class="tinyTitle">(2).移动端滑动banner</h4>
          <p class="toView tinyApps">
            预览：
            <a href="https://cutyourteeth.github.io/tinyApps/Swiper/swpier-mobile-oneway.html">
              <span class="icon_2-github"></span>
            </a>
          </p>
          <p class="description">简介：数量有限,回弹动画</p>
        </div>

        <div class="item">
          <h4 class="tinyTitle">(3).keyCodeMap</h4>
          <p class="toView tinyApps">
            预览：
            <a href="https://cutyourteeth.github.io/tinyApps/keyCodeMap/keyCode.html">
              <span class="icon_2-github"></span>
            </a>
          </p>
          <p class="description">简介：查询键盘映射</p>
        </div>
        <div class="item">
          <h4 class="tinyTitle">(4).射门(占位)</h4>
          <p class="toView tinyApps">
            预览：
            <a href="https://cutyourteeth.github.io/tinyApps/keyCodeMap/keyCode.html">
              <span class="icon_2-github"></span>
            </a>
          </p>
          <p class="description">简介：射门小游戏(占位)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin';

.projects {
  .info {
    text-align: center;
    color: $lightPink;
  }

  .icon_2-github {
    color: $lightPink;
    font-size: 20px;

    &:hover, &:active {
      color: $subOrange;
    }
  }

  .content-wrapper {
    font-size: 16px;
    margin-bottom: 30px;

    &>h2 {
      font-weight: 500;
      line-height: 2;
      padding-bottom: 10px;
      text-align: center;
    }

    .toView, .toCode {
      line-height: 2;
      font-weight: 500;
      color: $lightPink;
    }

    .danger {
      color: $lightPink;
      font-weight: 500;
      margin-top: 10px;
      font-size: 14px;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: start;
      margin-top: 20px;

      .item {
        margin-bottom: 5px;
        padding: 5px;
        border-radius: 2px;
      }
    }

    .description {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
      font-weight: 500;
      line-height: 1.7;
      white-space: pre-line;

      .points {
        display: inline-block;
        text-indent: 2em;

        @media screen and (max-width: 768px) {
          text-indent: 0;
        }
      }
    }
  }
}
</style>
