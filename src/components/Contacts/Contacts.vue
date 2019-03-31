<template>
  <div class="contacts">
    <div class="address" v-if="triggler===1">杭州市西湖区
      <br>上海市嘉定区
    </div>
    <div class="mail" v-if="triggler===3">273964183@qq.com</div>
    <div class="git" v-if="triggler===4">
      <a href="https://cutyourteeth.github.io/dist">Click here</a>
    </div>
    <div class="social" v-if="triggler===5">
      <p>Wechat:
        <br>StrawberryAvalanche
      </p>
      <p>QQ:
        <br>273964183
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    triggler: {
      type: Number
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin';
@import '../../common/stylus/animations';

.contacts {
  display: block;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  color: white;
  width-content(90%, 0, 10px);
  word-wrap: pre-wrap;
  white-space: nowrap;
  letter-spacing: 2px;

  &>* {
    come-in(1s);
  }
}
</style>
