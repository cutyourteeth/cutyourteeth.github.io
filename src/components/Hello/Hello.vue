<template>
  <div class="box">
    <v-portfolio></v-portfolio>
    <div class="tab">
      <div class="tab-item education icon">
        <router-link to="/education">学历</router-link>
      </div>
      <div class="tab-item skills icon">
        <router-link to="/skills">技能</router-link>
      </div>
      <div class="tab-item projects icon">
        <router-link to="/projects">作品</router-link>
      </div>
    </div>
    <router-view class="port"></router-view>
    <v-contact class="contact"></v-contact>
  </div>
</template>

<script>
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
export default {
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  // mounted: {
  //   animationStart () {
  //     Portfolio.name.value = '1111'
  //   }
  // },
  components: {
    'v-portfolio': Portfolio,
    'v-contact': Contact
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
    height: 70px;
    min-width: 250px;
    max-width: 400px;
    line-height: 75px;
    margin: 20px auto 0 auto;

    .tab-item {
      position: relative;
      width: 33.3%;
      height: 70px;
      flex: 1;

      & > a {
        position: relative;
        display: block;
        height: 100%;
        color: black;
        text-align: center;
        smooth-top-angle(10px);
        padding-top: 20px;
        box-sizing: border-box;
        color: white;
        background-color: $subOrange;
        // background-color: $lightGreen;
        // background-color #000
        background-repeat: no-repeat;
        background-size: 30px;
        background-position: center;
      }

      &:nth-child(1) > a {
        bg-image('education_w');
        background-color: $subOrange;

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
      }

      &:nth-child(3) > a {
        bg-image('projects_w');
        background-color: $lightPink;

        &.router-link-active {
          bg-shift('projects', 1s);
        }
      }
    }
  }

  .port {
    display: block;
    position: relative;
    box-sizing: border-box;
    flex: 1;
    width: 90%;
    min-width: 270px;
    min-height: 200px;
    border: none;
    padding: 20px 20px 50px 20px;
    margin: 0 auto;
    border-radius: 10px;
    font-size: 20px;
    background-color: rgba(255, 255, 255, 1);

    & > * {
      position: relative;
      top: 50px;
      run-over(0.5s);
    }
  }

  .contact {
    flex: 0;
  }
}
</style>
