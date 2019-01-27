<template>
  <div :class="$this.modal">
    <!-- background always on -->
    <div :class="$style.background" :backgroundType="backgroundType"></div>
    <div :class="$style.textContent" v-if="!imgType">
      <img :src="item.src" :class="$style.imageItem">
    </div>
    <div :class="$style.imgContent" v-if="!!imgType">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    size: {
      type: String,
      default () {
        return 'normal'
      }
    },
    innerType: {
      type: Boolean,
      default () {
        return false
      }
    },
    img
  },

  data () {
    return {

    }
  },
}
</script>

<style module lang="stylus">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background-color: #000;
  }

  .imgContent, .txtContent {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  .imgContent {
    width: fit-content;
    height: fit-content;
    background-color: #fff;
    padding: 10px;

    &>img {
    }
  }
}
</style>
