<template>
  <div>
    <controlPanel v-if="isActive" v-bind:element="element"></controlPanel>

    <div class="workZoneElement" @click="active"
         v-bind:class="{active:isActive}" ref="workElement">

      <div v-bind:class="element.title" class="icon"></div>
      <div class="title">{{element.title}}</div>

      <div class="inputPart" v-if="isActive">
        <input type="text" class="input"
               v-bind:value="element.src"
               ref="src"
               @input="input"
               placeholder="Src">
        <input type="text" class="input"
               v-bind:value="element.alt"
               ref="alt"
               @input="input"
               placeholder="Alt">
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import controlPanel from "@/components/controlPanel";
export default {
  props: ['element'],
  name: "appImage",
  components:{
    controlPanel
  },
  data(){
    return{
      isActive: false
    }
  },
  methods:{
    ...mapMutations(['EDIT_WORK_ZONE_ELS']),
    active(e){
      if(e.target == this.$refs.workElement){
        if(this.isActive){
          this.isActive = false;
        }else{
          this.isActive = true;
        }
      }
    },
    input(){
      let obj = Object.assign({}, this.element);
      obj.src = this.$refs.src.value;
      obj.alt = this.$refs.alt.value;
      obj.html = obj.openingTag + " src='" + obj.src +"' " + "alt='"+ obj.alt +"'"+  obj.endingTag;
      this.EDIT_WORK_ZONE_ELS({id: obj.id, data: obj});
    }
  }
}
</script>

<style scoped>
.workZoneElement{
  padding: 15px 10px;
  background: #F6F9FE;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}
.icon{
  width: 25px;
  height: 25px;
  background-size: 100% 100%;
  margin: 20px 39px 15px 39px;
}
.Headline{
  background-image: url("../../assets/Headline.png");
}
.title{
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #252A32;
  text-align: center;
}
.active{
  background-color: #D9E7FF;
}
.inputPart{
  padding: 6px;
  background: #FFFFFF;
  box-shadow: 0px 64px 64px rgba(211, 214, 215, 0.2), 0px 32px 32px rgba(211, 214, 215, 0.2), 0px 16px 16px rgba(211, 214, 215, 0.2), 0px 4px 4px rgba(211, 214, 215, 0.2), 0px 2px 2px rgba(211, 214, 215, 0.2);
  border-radius: 2px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
}
.inputPart input{
  width: 440px;
  padding: 5px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 2px;
}
.inputPart input:first-child{
  margin-bottom: 10px;
}

.icon{
  width: 25px;
  height: 25px;
  background-size: 100% 100%;
  margin: 20px 39px 15px 39px;
}
.Headline{
  background-image: url("../../assets/Headline.png");
}
.Paragraph{
  background-image: url("../../assets/text-align-left.png");
}
.Button, .Image{
  background-image: url("../../assets/Vector.png");
}
.title{
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #252A32;
}
</style>