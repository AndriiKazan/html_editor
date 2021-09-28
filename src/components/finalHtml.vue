<template>
  <div class="finalHtml" ref="finalHtml">{{FINAL_HTML}}</div>
</template>

<script>
import {mapGetters} from'vuex';
export default {
  name: "FinalHtml",
  computed: mapGetters(['FINAL_HTML']),
  updated() {
    this.$refs.finalHtml.innerHTML = this.FINAL_HTML;
  }
}
</script>

<style>
  .finalHtml{
    width: 628px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img{
    width: 540px;
    height: 230px;
    margin-top: 30px;
    border-radius: 4px;
  }
  h1{
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 22px;
  }
  p{
    text-align: center;
    width: 560px;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: #97AACD;
    margin: 0;
  }
  .finalHtml>button{
    padding: 10px 30px 10px 30px;
    background-color: #4368E0;
    font-size: 14px;
    line-height: 145%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #F6F9FE;
    border-radius: 4px;
    border: none;
    margin: 40px;
  }

</style>