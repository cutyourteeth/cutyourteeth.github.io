<template>
  <div :class="$style.modal" @click="$emit('modalOff')">
    <!-- background always on -->
    <div :class="$style.background" ref="bgItem"></div>
    <!-- image-content -->
    <div :class="$style.imgContent" @change="imageRatio()" v-if="isImage.check">
      <img :src="isImage.src" class="image" :class="$style.image" ref="imageItem">
    </div>
    <!-- custom-content -->
    <div :class="$style.textContent" v-if="!isImage.check">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// const imageItem = $refs.imageItem
// const bgItem = $refs.bgItem

export default {
  props: {
    darkRate: {
      type: Number,
      default () {
        return 6
      }
    },
    isImage: {
      type: Object,
      default () {
        return {
          check: false,
          src: '',
          ratio: 2
        }
      }
    }
  },
  data () {
    return {
      screenRatio: 2
    }
  },
  methods: {
    imageRatio () {
      if (this.isImage.check) {
        this.isImage.ratio = this.$refs.imageItem.innerWidth / this.$refs.imageItem.innerHeight
        this.$refs.imageItem.className = (this.isImage.ratio > this.screenRatio) ? 'imageHorizontal' : 'imageVertical'
      }
    }
  },
  computed: {
    screenRaito: () => { return window.innerWidth / window.innerHeight }
  }
}
</script>

<style module lang="stylus">
.imageHorizontal {
  width: 90%;
  height: auto;
}

.imageVertical {
  width: 90%;
  height: auto;
}

.modal {
  position: fixed !important;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 200;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 201;
    animation: none;
  }

  .imgContent, .txtContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 202;
  }

  .imgContent {
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;

    &>img {
      max-width: 337px;
      max-height: 668px;
      width: 80vw;
      height: 80vh;
    }
  }
}
</style>
