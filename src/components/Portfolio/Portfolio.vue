<template>
  <div class="portfolio">
    <div class="avatar"></div>
    <h2 class="name" :name="name">徐尧-Caper</h2>
    <h3 class="sub-name" :name="name">Web Developer</h3>
    <h3 class="subtitle">Technics: TS / React / Vue / Nest(Express)</h3>
    <div class="detail">
      <div class="fold icon-keyboard_arrow_down" @click="fold()"></div>
      <div class="intro" v-if="isShown">
        <p>Introducing myself:</p>
        <p>
          &emsp;
          At early 2018, I'm a front-end developer, used to programing with vanilla Javascript and VueJS.
          <br />&emsp;And now, I'm also a full-stack developer, I'm fall in love with Typescript.
          <br />&emsp;My technics also expanded, ReactJS, NestJS(a Express framework), typeORM(a Javascript to SQL compile framework)
          <br />&emsp;Work with NodeJS I was able to build service-able site and build my own MySQL database
        </p>
        <hr />
        <p>Characters:</p>
        <p>
          1.Passion in coding
          <br />2.Always dig in code's secrets
          <br />3.Keep on studying new technics
          <br />4.Love to do research on no matter web, hard drives, or apps
          <br />5.Sharing with anyone who is willing to share
        </p>
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
    bg-image('avatar');
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
