<template>
  <div :class="$this.modal">
    <!-- background always on -->
    <div :class="$style.background"></div>
    <!-- image-content or custom-content -->
    <div :class="$style.imgContent" v-if="isImage.check">
      <img :src="isImage.src" :class="$style.image">
    </div>
    <div :class="$style.textContent" v-if="!isImage.check">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
const imageElement = document.getElementsByClassName('$style.image')
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
          ratio: 1
        }
      }
    }
  },
  data () {
    return {
    }
  },
  mounted: function () {
    let screenRaito = window.innerWidth / window.innerHeight
      (isImage.ratio > screenRatio) ? imageElement.className = '$style.image $style.imageHorizontal' : imageElement.className = '$style.image $style.imageVertical'
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
