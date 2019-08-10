<template>
  <div class="projects">
    <h1 class="title">Works</h1>
    <p class="info">(this page built with Vue-cli &amp; Webpack &amp; Stylus )</p>
    <hr />
    <!-- 主要项目框体 -->
    <p class="info">下列项目仅当示例, 部分已经 重新开发 / 脱离维护</p>
    <p>&nbsp;</p>
    <div class="content-wrapper" v-for="(item,key) in items" :key="key">
      <h2>{{key+1}}. {{item.title}}</h2>
      <p class="toView">
        预览：
        <a
          :href="item.view"
          class="iconfont icon-github"
        >{{item.view.replace('https://dimshades.github','')}}</a>
      </p>
      <p class="toCode">
        源码：
        <a
          :href="item.code"
          class="iconfont icon-github"
        >{{item.code.replace('https://github','')}}</a>
      </p>
      <div class="gallery">
        <img
          v-for="(photo,pkey) in item.photos"
          :key="pkey"
          class="image"
          @click="imageDeliever(photo.src)"
          :src="photo.src"
        />
      </div>
      <p class="clicktoView">点击查看图片</p>
      <p class="description">
        <span class="pink">项目简介：</span>
        {{item.description}}
        <span class="pink">开发工具：</span>
        {{item.devtool}}
        <span class="pink">项目特色：</span>
        {{item.character}}
        <span class="pink">项目优势：</span>
        {{item.advance}}
        <span class="pink">项目展望：</span>
        {{item.future}}
      </p>
      <p class="danger">{{item.caution}}</p>
    </div>
    <!-- 小工具组 -->
    <div class="content-wrapper">
      <h2>自制小模块/工具/插件</h2>
      <p class="toCode">
        各个小项目源码合集：
        <a href="https://github.com/dimshades/tinyApps">
          <span class="iconfont icon-github"></span>
        </a>
      </p>

      <div class="grid">
        <div class="item">
          <h4 class="tinyTitle">(1).时钟</h4>
          <p class="toView tinyApps">
            预览：
            <a href="https://dimshades.github.io/jobinterview-test/clock/">
              <span class="iconfont icon-github"></span>
            </a>
          </p>
          <p class="description">简介：用canvas画的动态时钟。每秒更新</p>
        </div>

        <div class="item">
          <h4 class="tinyTitle">(2).pc端滑动banner</h4>
          <p class="toView tinyApps">
            预览：
            <a href="https://dimshades.github.io/tinyApps/Swiper/swiper.html">
              <span class="iconfont icon-github"></span>
            </a>
          </p>
          <p class="description">简介：jQ编写,banner无限循环</p>
        </div>

        <div class="item">
          <h4 class="tinyTitle">(3).keyCodeMap</h4>
          <p class="toView tinyApps">
            预览：
            <a href="https://dimshades.github.io/tinyApps/keyCodeMap/keyCode.html">
              <span class="iconfont icon-github"></span>
            </a>
          </p>
          <p class="description">简介：查询键盘映射</p>
        </div>

        <div class="item">
          <h4 class="tinyTitle">(4).移动端滑动banner</h4>
          <p class="toView tinyApps">
            预览：
            <a href="https://dimshades.github.io/tinyApps/Swiper/swpier-mobile-oneway.html">
              <span class="iconfont icon-github"></span>
            </a>
          </p>
          <p class="description">简介：数量有限,回弹动画</p>
        </div>
      </div>
    </div>
    <!-- modal -->
    <Modal v-if="!!modalShow" :isImage="isImage" :darkRate="10" @modalOff="modalOff()"></Modal>
  </div>
</template>

<script>
import Modal from './Modal'
export default {
  data() {
    return {
      items: [
        {
          title: '京东金融 webapp',
          view: 'https://dimshades.github.io/JDFinance/dist',
          code: 'https://github.com/dimshades/JDFinance',
          photos: [
            {
              src: '/aboutme/static/images/screenshots/jd1.png'
              // src: '//wx3.sinaimg.cn/mw690/467fdbd3ly1g1l4rkhbhcj20ae0imwhi.jpg'
            },
            {
              src: '/aboutme/static/images/screenshots/jd2.png'
              // src: '//wx1.sinaimg.cn/mw690/467fdbd3ly1g1l4rkt063j20ad0ijabt.jpg'
            },
            {
              src: '/aboutme/static/images/screenshots/jd3.png'
              // src: '//wx3.sinaimg.cn/mw690/467fdbd3ly1g1l4rjrqj2j20ad0iiacm.jpg'
            }
          ],
          description: '利用vue框架，仿照京东金融的app所做的webapp界面；',
          devtool:
            'Vue-cli & Webpack & SCSS 以及插件: vue-awesome-slider & HotCSS & px2rem；',
          character:
            '1、完美自适应：根据rem以及viewport来控制页面元素大小；hotcss计算端口像素比，将各元素由设计稿px单位转换为rem，试验于S8、ipad、iphone6上均实现了自适应；\n2、模块化CSS（SCSS）：使用SCSS的构造基本单元（panel、banner、slider）的mixin样式，在vue-style模块化本组件css，不会污染全局样式。该方案优于scope；\n3、模块化vue组件：在项目初期我将网页各单元抽象出了一些最基本的组件结构，最大限度控制组件耦合程度，提高适用的范围，例如panel组件衍生其他界面的组件，各个子组件在各个分页目录下变种维护，组件思路清晰，利于后期维护；',
          advance:
            '移动端显示保持一致；细致的模块化利于项目做大、宽展、维护；前后端分离，可独立调试；',
          future:
            '项目完成之后模仿了vue-awesome-slider用js做了一个滑动banner，希望能扩展，学习这个插件的厉害之处。项目有很大拓展空间，可开发成一个完整spa；',
          caution: ''
        },

        {
          title: 'Calendar 任务发布日历',
          view: 'https://dimshades.github.io/jobinterview-test/calendar/dist',
          code: 'https://github.com/dimshades/jobinterview-test/calendar/',
          photos: [
            {
              src: '/aboutme/static/images/screenshots/cal1.png'
              // src: '//wx3.sinaimg.cn/mw690/467fdbd3ly1g1l4rgzst4j20af0ijjrs.jpg'
            },
            {
              src: '/aboutme/static/images/screenshots/cal2.png'
              // src: '//wx4.sinaimg.cn/mw690/467fdbd3ly1g1l4riwgvmj20ac0ig0t5.jpg'
            }
          ],
          description: '这份项目是一次求职测试题目',
          devtool: 'Vue-cli & Webpack & Stylus ',
          character:
            '公历、星期、填充邻月、日历排列等功能，我本人自己构思写的。',
          advance: '各设备自适应',
          future:
            '动画！过渡动画、hover、active等样式制作，现在还不酷炫！新的分支！tiny-todo-list可以和这个合并',
          caution: ''
        },
        {
          title: 'Ease-Timer',
          view: 'https://dimshades.github.io/ease-timer/www/',
          code: 'https://github.com/dimshades/ease-timer',
          photos: [
            {
              src: '/aboutme/static/images/screenshots/res1.png'
              // src: '//wx2.sinaimg.cn/mw690/467fdbd3ly1g1l4rn8xs4j20b40jm0t3.jpg'
            },
            {
              src: '/aboutme/static/images/screenshots/res2.png'
              // src: '//wx2.sinaimg.cn/mw690/467fdbd3ly1g1l4rfmwvuj20b00jm3yv.jpg'
            }
          ],
          description: '健身放松计时器',
          devtool: 'Ionic4 & Angular7',
          character:
            '设定倒计时, 正向无限计时, 环形进度条, 符合我个人的健身计时需求',
          advance: '可跨平台',
          future: '暂时平台为web,Ionic可实现native,以后改造',
          caution: ''
        },
        {
          title: '计划表 tiny-todo-list',
          view: 'https://dimshades.github.io/tinyApps/todolist/dist/',
          code: 'https://github.com/dimshades/tinyApps/todolist',
          photos: [{ src: '/aboutme/static/images/screenshots/todo.png' }],
          description: '计划清单 webapp；',
          devtool: 'Vue Stylus;',
          character:
            '使用了vue-cli.webpack.stylus，采用gird布局，储存方式为localStorage；',
          advance: '方便轻巧，逻辑简单，代码量少；',
          future: '可拓展处很多，例如分类，提醒，警告等模块；',
          caution: ''
        },
        {
          title: 'Ark-Tica 日记App',
          view: 'https://dimshades.github.io/diary/',
          code: 'https://github.com/dimshades/diary/',
          photos: [
            {
              src: '/aboutme/static/images/screenshots/d1.png'
              // src: '//wx2.sinaimg.cn/mw690/467fdbd3ly1g1l4rpfyetj20af0ijmyn.jpg'
            },
            {
              src: '/aboutme/static/images/screenshots/d2.png'
              // src: '//wx3.sinaimg.cn/mw690/467fdbd3ly1g1l4rnmoavj20af0ijjtp.jpg'
            },
            {
              src: '/aboutme/static/images/screenshots/d3.png'
              // src: '//wx4.sinaimg.cn/mw690/467fdbd3ly1g1l4rmwewnj20af0ijac5.jpg'
            },
            {
              src: '/aboutme/static/images/screenshots/d4.png'
              // src: '//wx2.sinaimg.cn/mw690/467fdbd3ly1g1l4rlypqij20ac0iidkk.jpg'
            }
          ],
          description:
            '原生Javascript开发，本地存储的日记本webapp。未用任何js库，stylus预编译css，IndexedDB数据库实现本地存储;',
          devtool: 'JavaScript Stylus;',
          character:
            '1、用JS实现indexedDB数据库操作，相比Cookies和localStorage，数据结构化，运用后端数据库逻辑；\n2、完整的日记的写入、输出、分类、筛选、修改、删除、添加图片、添加多图功能；\n3、响应式布局，对pc和移动端分别优化（虽然没下一个项目的解决方案完美）；\n4、自制modal框体、toast提示浮层、各个组件动画（滑动、淡入、淡出等）、改造美化了Input单选框；\n5、首页背景css轮播；6、日记展示区的图片可依据数量不同而显示不同布局、单张图片时将采用大图框的显示布局、同时根据每张图片长宽比实现最好的展示方式；\n7、canvas气泡、水母背景（模仿自codepen的一个项目），以及自制了一个算数小游戏；',
          advance:
            '移动端PC端都试用（非过低版本的浏览器）、无需服务端，本地使用；',
          future:
            '由于本项目编写时间较早，彼时对于js的认知稍浅，现在回看可改进空间比较大，将来会在简化逻辑、丰富业务、压缩代码上下功夫；',
          caution:
            '注意：本项目还在拓展维护，所有依赖资源储存在github，浏览时加载可能较慢；可使用移动端高版本浏览器；'
        },
        {
          title: '饿了么 webapp',
          view: 'https://dimshades.github.io/ele-webapp/dist/',
          code: 'https://github.com/dimshades/ele-webapp/',
          photos: [
            {
              src: '/aboutme/static/images/screenshots/ele1.png'
              // src: '//wx2.sinaimg.cn/mw690/467fdbd3ly1g1l4rlk8e1j20ah0ihdj4.jpg'
            },
            {
              src: '/aboutme/static/images/screenshots/ele2.png'
              // src: '//wx3.sinaimg.cn/mw690/467fdbd3ly1g1l4rf1z9mj20a90ign00.jpg'
            }
          ],
          description: '模仿饿了么界面开发的webapp；',
          devtool: 'Vue-cli & Webpack & Stylus 以及其他插件；',
          character:
            '完成了各个部件，由vue-resource完成ajax数据请求，vue-router来引导每个版块。基本实现了饿了么app基本的购买界面的基本功能，(查看商品列表，列表动态加载.分类，商家信息，评分)；',
          advance: '便于维护的组件化，根据计算获得设备像素比，调整图标大小；',
          future: '完善商家页面，修复vue迭代导致的一些遗留问题；',
          caution: '注意：商品详情和商家信息还在重构中,存在一些问题敬请谅解；'
        }
      ],
      isImage: {
        check: true,
        src: '',
        ratio: 1
      },
      modalShow: false
    }
  },
  components: {
    Modal
  },
  methods: {
    imageDeliever(src) {
      this.isImage.src = src
      this.modalShow = true
    },
    modalOff() {
      this.modalShow = false
    }
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixin';

.projects {
  .pink {
    color: $lightPink;
  }

  .info {
    text-align: center;
    color: $lightPink;
    font-weight: 400;
  }

  .gallery {
    display: flex;
    margin: 10px auto;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-around;

    .image {
      margin: 5px;
      width: 20%;
      height: 20%;
      flex-basis: 20%;
      flex-shrink: 1;
    }
  }

  .clicktoView {
    text-align: center;
    font-size: 10px;
    color: #999;
  }

  .iconfont icon-github {
    color: $lightPink;
    font-size: 20px;

    &:hover, &:active {
      color: $subOrange;
    }
  }

  .content-wrapper {
    font-size: 16px;
    margin-bottom: 3em;
    box-shadow: 0 0 5px 2px rgb(225, 225, 225);
    border-radius: 5px;
    padding: 0 25px 15px;

    &>h2 {
      font-weight: 500;
      line-height: 3;
      font-size: 1.2em;
      text-align: center;
    }

    .toView, .toCode {
      font-size: 16px;
      font-weight: 500;
      color: #333;

      a {
        font-size: inherit;
        line-height: 2;
        color: $lightPink;
      }
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
        font-weight: 500;
        width: 85%;
        height: 90%;
        margin-bottom: 5px;
        padding: 5px;
        border-radius: 12px;
      }
    }

    .description {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
      font-weight: 400;
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
