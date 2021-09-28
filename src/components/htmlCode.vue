<template>
  <div>{{FINAL_HTML}}</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "htmlCode",
  computed: mapGetters(['FINAL_HTML'])
}
</script>

<style scoped>
  div{
    height: 70px;
    padding: 5px 30px 5px 30px;
  }
</style>