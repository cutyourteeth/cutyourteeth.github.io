<template>
  <div class="box">
    <v-portfolio></v-portfolio>
    <div class="tab">
      <div class="tab-item education icon">
        <router-link to="/education"></router-link>
      </div>
      <div class="tab-item skills icon">
        <router-link to="/skills"></router-link>
      </div>
      <div class="tab-item projects icon">
        <router-link to="/projects"></router-link>
      </div>
    </div>
    <router-view class="port"></router-view>
    <div class="contact">
      <a class="icon-home" @click="triggler=1"></a>
      <a class="icon-phone" @click="triggler=2"></a>
      <a class="icon-envelop" @click="triggler=3"></a>
      <a class="icon-earth" @click="triggler=4"></a>
      <a class="icon-bubbles3" @click="triggler=5"></a>
    </div>
    <v-contacts :triggler="triggler"></v-contacts>
  </div>
</template>

<script>
import Portfolio from '../Portfolio/Portfolio'
import Contacts from '../Contacts/Contacts'

export default {
  props: {
  },
  data () {
    return {
      'triggler': 0,
      'color': {
        'subOrange': 'rgba(255, 152, 0, 1)',
        'lightGreen': 'rgba(52, 214, 164, 1)',
        'lightPink': 'rgba(245, 95, 171, 1)'
      }
    }
  },
  methods: {

    changeColor (e) {
      let ele = e.currentTarget
      console.log(ele.style)
      if (ele) {
        let setter = Math.floor(Math.random * 3 * 2) / 2
        switch (setter) {
          case 0: ele.style.backgroundColor = this.color.subOrange; break
          case 1: ele.style.backgroundColor = this.color.lightGreen; break
          case 2: ele.style.backgroundColor = this.color.lightPink; break
        }
      }
    }
  },
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
  width: 80%;
  min-width: 300px;
  max-width: 810px;
  box-sizing: border-box;
  background-color: #fff;
  margin: 50px auto;
  padding: 50px 0;
  background-color: rgba(15, 15, 15, 0.9);
  border-radius: 12px;
  font-family: 'Source Sans Pro', Arial, sans-serif;

  .tab {
    display: flex;
    width: 50%;
    min-width: 200px;
    max-width: 400px;
    margin: 20px auto 0 auto;

    .tab-item {
      position: relative;
      height: 70px;
      width: 33.3%;
      flex: 1;

      @media screen and (max-width: 500px) {
        width: 50px;
        height: 50px;
      }

      &>a {
        position: relative;
        display: block;
        height: 100%;
        color: black;
        text-align: center;
        smooth-top-angle(10px);
        box-sizing: border-box;
        color: white;
        background-color: $subOrange;
        background-repeat: no-repeat;
        background-size: 30px;
        background-position: center;

        @media screen and (max-width: 500px) {
          height: 50px;
        }
      }

      &:nth-child(1) > a {
        bg-image('education_w');
        background-color: $subOrange;

        &:after {
          content-after('经历');

          @media screen and (max-width: 500px) {
            content: '';
          }
        }

        &.router-link-active {
          bg-shift('education', 1s);
        }
      }

      &:nth-child(2) > a {
        bg-image('skills_w');
        background-color: $lightGreen;

        &.router-link-active {
          bg-shift('skills', 1s);
        }

        &:after {
          content-after('技能');

          @media screen and (max-width: 500px) {
            content: '';
          }
        }
      }

      &:nth-child(3) > a {
        bg-image('projects_w');
        background-color: $lightPink;

        &.router-link-active {
          bg-shift('projects', 1s);
        }

        &:after {
          content-after('作品');

          @media screen and (max-width: 500px) {
            content: '';
          }
        }
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
