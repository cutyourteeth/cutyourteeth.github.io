<template>
  <div class="box">
    <a href="https://cutyourteeth.github.io/handnote/web" class="note">Notes→</a>
    <v-portfolio></v-portfolio>
    <div class="tab">
      <router-link class="tab-item" to="/education">
        <div class="iconfont icon-hat"></div>
        <h1>Past</h1>
      </router-link>
      <router-link class="tab-item" to="/skills">
        <div class="iconfont icon-skill"></div>
        <h1>Techs</h1>
      </router-link>
      <router-link class="tab-item" to="/projects">
        <div class="iconfont icon-code"></div>
        <h1>Works</h1>
      </router-link>
    </div>
    <!-- main-content -->
    <router-view class="port"></router-view>

    <div class="contact">
      <a class="iconfont icon-home" @click="triggler=1"></a>
      <a class="iconfont icon-mail" @click="triggler=3"></a>
      <a class="iconfont icon-globe" @click="triggler=4"></a>
      <a class="iconfont icon-chat" @click="triggler=5"></a>
    </div>
    <v-contacts :triggler="triggler"></v-contacts>
  </div>
</template>

<script>
import Portfolio from '../Portfolio/Portfolio'
import Contacts from '../Contacts/Contacts'

export default {
  props: {},
  data () {
    return {
      triggler: 0,
      color: {
        subOrange: 'rgba(255, 152, 0, 1)',
        lightGreen: 'rgba(52, 214, 164, 1)',
        lightPink: 'rgba(245, 95, 171, 1)'
      }
    }
  },
  methods: {},
  components: {
    'v-portfolio': Portfolio,
    'v-contacts': Contacts
  }
}
</script>

<style lang='stylus'>
@import '../../common/stylus/mixin';
@import '../../common/stylus/animations';

.box {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 92%;
  min-width: 300px;
  max-width: 810px;
  box-sizing: border-box;
  background-color: #fff;
  margin: 50px auto;
  padding: 50px 0;
  background-color: rgba(15, 15, 15, 0.3);
  border-radius: 12px;
  font-family: 'Source Sans Pro', Arial, sans-serif;

  .note {
    position: absolute;
    right: 15px;
    top: 15px;
  }

  .tab {
    display: flex;
    position: relative;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    width: 50%;
    min-width: 200px;
    max-width: 400px;
    margin: 0 auto;

    .tab-item {
      position: relative;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      top: 20px;
      height: 70px;
      padding-bottom: 20px;
      width: 70px;
      text-align: center;
      background-color: #eee;
      font-size: 14px;
      flex: 1;
      smooth-top-angle(10px);
      transition: 0.7s;

      @media screen and (max-width: 500px) {
        width: 50px;
        height: 50px;
      }

      &>h1 {
        @media screen and (max-width: 500px) {
          display: none;
        }
      }

      &>.iconfont {
        font-size: 30px;
        margin: 4px;
      }

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 120%;
      }

      &:nth-child(1) {
        background-color: $subOrange;
      }

      &:nth-child(2) {
        background-color: $lightGreen;
      }

      &:nth-child(3) {
        background-color: $lightPink;
      }

      &.router-link-active {
        roll-over(0.7s);
        color: #000;
        background-color: #fff;
      }
    }
  }

  .port {
    display: block;
    position: relative;
    flex: 1;
    width-content(90%, 0, 50px);
    border: none;
    border-radius: 10px;
    padding: 10px 20px 50px;
    font-size: 14px;
    line-height: 22px;
    background-color: rgba(255, 255, 255, 1);

    & > * {
      position: relative;
      run-over(0.5s);
    }

    & >.title {
      font-size: 18px;
      font-weight: 500;
      text-align: center;
    }
  }

  .contact {
    display: block;
    flex: 0;
    margin-top: 48px;
    text-align: center;

    &>a {
      display: inline-block;
      color: white;
      font-size: 24px;
      letter-spacing: 20px;

      &:hover, &:active {
        color: $lightGreen;
      }

      &:last-child {
        letter-spacing: 0;
      }
    }
  }
}
</style>
