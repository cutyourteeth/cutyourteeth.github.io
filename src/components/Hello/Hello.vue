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
    <router-view class="port"></router-view>div.
    <v-contact class="contact"></v-contact>
  </div>
</template>

<script>
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
export default {
  name: 'welcome',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted: {
  },
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
  box-sizing:border-box;
  background-color: #fff;
  margin: 50px auto;
  padding: 50px 10px;
  background-color: rgba(15, 15, 15, 0.9);
  border-radius: 12px;
  font-family: "Source Sans Pro", Arial, sans-serif;

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
        font-size: 14px;
        text-align: center;
        smooth-top-angle(10px);
        padding-top: 20px;
        box-sizing: border-box;
        color: white;
        // background-color: $subOrange;
        background-color: $lightGreen;
        background-repeat: no-repeat;
        background-size: 30px;
        background-position: center;

        &.router-link-active {
          background-color: rgba(255, 255, 255, 1);
          color: black;
          transition: background-color 0.5s, color 0.5s;
          roll-over(1s);
        }
      }

      &:nth-child(1) > a {
        bg-image('education');
      }

      &:nth-child(2) > a {
        bg-image('skills');
      }

      &:nth-child(3) > a {
        bg-image('projects');
      }
    }
  }

  .port {
    display: block;
    position: relative;
    flex: 1;
    width: 80%;
    min-width: 200px;
    min-height: 200px;
    padding: 20px 20px  50px 20px;
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
