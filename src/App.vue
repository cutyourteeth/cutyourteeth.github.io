<template>
  <div id="app">
    <v-hello></v-hello>
  </div>
</template>

<script>
import Hello from './components/Hello/Hello'
export default {
  name: 'App',
  components: {
    'v-hello': Hello
  }
}
</script>

<style lang='stylus'>
@import '../static/css/reset.css';
@import './common/stylus/base.styl';

</style>
