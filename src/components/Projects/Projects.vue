<template>
  <div class="projects">
    <h1 class="title">举几个栗子</h1>
    <hr>
    <div class="content-wrapper">
      <h2>日记webapp</h2>
      <p>
        预览:
        <a href="https://cutyourteeth.github.io/tinyApps/404page/404.html" class="icon_2-github"></a>
      </p>
      <p>
        源码:
        <a href="https://cutyourteeth.github.io/tinyApps/404page/404.html" class="icon_2-github"></a>
      </p>
      <p class="description">
        简介:由原生Javascript编写开发，结合IndexedDB数据库实现本地存储。
        自写并实现了数据库的写入、输出，modal框体，背景轮播，动画，图片添加，日记分类，筛选
        完善界面布局，如根据图片数量展示不同的展示框体；
        学习并模仿了canvas气泡背景，
        以及最后自制了一个算数小游戏；
      </p>
      <p class="danger">注意:各移动端浏览器对indexedDB支持不一,可能无法在手机上正常运作,请使用PC端</p>
    </div>

    <div class="content-wrapper">
      <h2>饿了么webapp</h2>
      <p>
        预览:
        <a href="https://cutyourteeth.github.io/tinyApps/404page/404.html">
          <span class="icon_2-github"></span>
        </a>
      </p>
      <p>
        源码:
        <a href="https://cutyourteeth.github.io/tinyApps/404page/404.html">
          <span class="icon_2-github"></span>
        </a>
      </p>
      <p class="description">
        简介: 这是我学习vue2.5以来跟做的一个vue项目，完成了各个部件，由vueresource完成ajax数据请求，vue-router来引导每个版块，
        基本实现了饿了么app基本的购买界面的基本功能，(查看商品列表，列表动态加载、分类，商家信息，评分)
      </p>
    </div>

    <div class="content-wrapper">
      <h2>DJ&Sets 宣传web</h2>
      <p>
        预览:
        <a href="https://cutyourteeth.github.io/tinyApps/404page/404.html">
          <span class="icon_2-github"></span>
        </a>
      </p>
      <p>
        源码:
        <a href="https://cutyourteeth.github.io/tinyApps/404page/404.html">
          <span class="icon_2-github"></span>
        </a>
      </p>
      <p class="description">简介:使用jquery&amp;bootstrap库制作的简单dj介绍和现场set宣传web,实现响应式交互界面.</p>
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
  .icon_2-github {
    color: $lightPink;
    font-size: 20px;

    &:hover, &:active {
      color: $subOrange;
    }
  }

  .content-wrapper {
    font-size 16px;
    margin-bottom: 20px;

    .description {
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>
