<template>
  <div class="portfolio">
    <span class="avatar"></span>
    <h2 class="name" :name="name">徐&nbsp;尧</h2>
    <h3 class="subname" :name="name">Caper</h3>
    <h3 class="subtitle">A web front-end engineer</h3>
    <div class="depoly">
      <div class="fold icon-keyboard_arrow_down" @click="fold()"></div>
      <p class="intro" v-if="isShown">
        <span>&emsp;&emsp;1.&nbsp;A web front-end engineer, a keep studying one</span>
        <span>&emsp;&emsp;2.&nbsp;Loves the Internet, grown with domastic web era</span>
        <span>&emsp;&emsp;3.&nbsp;Loves video games too, but not quite good at it</span>
        <span>&emsp;&emsp;4.&nbsp;And now doing research on nomatter web, hard drives, or apps.</span>
        <span>&emsp;&emsp;4.&nbsp;Sharing all the technical infos with anyone who is willing too.</span>
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

  .subname {
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
