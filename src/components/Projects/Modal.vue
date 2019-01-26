<template>
  <div :class="$this.modal">
    <div :class="$style.background"></div>
    <div :class="$style.content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
let model
export default {
  props: {
    size: {
      type: String,
      default () {
        return 'normal'
      }
    },
    type: {
      type: String,
      default () {
        return 'text'
      }
    }
  },
  mounted: {
    initial () {
      (this.type ? 'text')
    }
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
  top
}
</style>
