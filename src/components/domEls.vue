<template>
  <div class="wrapper">
    <div class="domEls">
      <div class="domElement"
           v-bind:class="k%2==0?'first':'second'"
           v-for="(element, k) in DOM_ELEMENTS"
           :key="element"
           draggable="true"
           @dragstart="onDragStart($event,element)"
           @click="elementClick(element)">
        <div v-bind:class="element.title" class="icon"></div>
        <div class="title">{{element.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
  name: "domEls",
  computed: mapGetters(['DOM_ELEMENTS']),
  methods:{
    ...mapMutations(['ADD_WORK_ZONE_ELS']),
    elementClick(el){
      this.ADD_WORK_ZONE_ELS(Object.assign({},el));
    },
    onDragStart(e, el){
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData('htmlEl', JSON.stringify(el));
    }
  }
}
</script>

<style scoped>
  .wrapper{
    height: calc(100vh - 74px);
    border-right: 1px solid #E4E6F1;
  }
  .domEls{
    width: 269px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding-top: 29px;
  }
  .domElement{
    width: 100px;
    height: 83px;
    background-color: #F6F9FE;
    border-radius: 6px;
    text-align: center;
    cursor: pointer;
  }
  .first{
    margin: 10px 10px 10px 30px;
  }
  .second{
    margin: 10px 29px 10px 0px;
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