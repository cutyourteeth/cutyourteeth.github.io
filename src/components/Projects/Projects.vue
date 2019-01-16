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
        简介：由原生Javascript编写开发，未使用任何js库，stylus预编译css，结合IndexedDB数据库实现本地存储，界面布局较完善。
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
      <h2>3.宣传web(DJ&amp;Sets)</h2>
      <p class="toView">
        预览：
        <a href="https://cutyourteeth.github.io/first-git-sample/">
          <span class="icon_2-github"></span>
        </a>
      </p>
      <p class="toCode">
        源码：
        <a href="https://github.com/cutyourteeth/first-git-sample">
          <span class="icon_2-github"></span>
        </a>
      </p>
      <p class="description">
        简介：使用jquery&amp;bootstrap库制作的简单dj介绍和现场set宣传web。(占位)
      </p>
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
