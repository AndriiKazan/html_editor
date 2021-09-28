<template>
  <div class="wrapper">
    <div class="workZone"
         @drop="onDrop($event)"
         @dragover.prevent
         @dragenter.prevent>
      <div v-for="element in WORK_ZONE_ELS">

        <appImage v-if="element.title=='Image'"  v-bind:element="element" :key="element.id"></appImage>
        <headline v-else v-bind:element="element" :key="element.id"></headline>

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import headline from "@/components/elements/headline";
import appImage from "@/components/elements/appImage";
export default {
  name: "workZone",
  computed: mapGetters(['WORK_ZONE_ELS']),
  components:{
    headline,
    appImage
  },
  methods:{
    ...mapMutations(['ADD_WORK_ZONE_ELS']),
    onDrop(e){
      let el = JSON.parse(e.dataTransfer.getData('htmlEl'));
      this.ADD_WORK_ZONE_ELS(Object.assign({},el));
    }
  }
}
</script>

<style scoped>
  .wrapper{
    height: calc(100vh - 74px - 70px);
  }
  .workZone{
    padding: 25px 30px 110px 30px;
    width: 708px;
    overflow-y: auto;
    background-color: #F5F5FC;

  }

  .icon{
    width: 25px;
    height: 25px;
    background-size: 100% 100%;
    margin: 20px 39px 15px 39px;
  }
  .Headline{
    background-image: url("../assets/Headline.png");
  }
  .Paragraph{
    background-image: url("../assets/text-align-left.png");
  }
  .Button, .Image{
    background-image: url("../assets/Vector.png");
  }
  .title{
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: #252A32;
  }
</style>