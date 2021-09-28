<template>
  <editor/>
</template>

<script>
import editor from './components/editor.vue'

export default {
  name: 'App',
  components: {
    editor
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  overflow-x: hidden;
}
</style>
