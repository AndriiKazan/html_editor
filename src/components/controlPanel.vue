<template>
  <div class="controlPanel">
    <div class="controls">
      <div class="arrows">
        <button class="down" @click="down"></button>
        <button class="up" @click="up"></button>
      </div>

      <div class="action">
        <button class="paste" @click="paste"></button>
        <button class="copy" @click="copy"></button>
        <button class="delete" @click="remove"></button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';
export default {
  props: ['element'],
  name: "controlPanel",
  computed: mapGetters(['WORK_ZONE_ELS']),
  methods:{
    ...mapMutations(['EDIT_WORK_ZONE_ELS','TO_UP', 'TO_DOWN','DELETE_WORK_ZONE_ITEM','ADD_WORK_ZONE_ELS']),
    paste(e){
      if(this.element.title == "Image") return
      navigator.clipboard.readText()
          .then(text => {
            let obj = Object.assign({}, this.element);
            obj.innerText = text;
            obj.html = obj.openingTag + obj.innerText +  obj.endingTag;
            this.EDIT_WORK_ZONE_ELS({id: obj.id, data: obj});
          })
          .catch(err => {
            console.log('Something went wrong', err);
          });
    },
    down(){
      let check = this.check("down");
      if(check){
        let obj = Object.assign({}, this.element);
        this.TO_DOWN(obj);
      }else{
        return
      }
    },
    up(){
      let check = this.check("up");
      if(check){
        let obj = Object.assign({}, this.element);
        this.TO_UP(obj);
      }else{
        return
      }
    },
    check(param){
      let result = true;
      let index = this.WORK_ZONE_ELS.findIndex(item => item.id==this.element.id);
      if(this.WORK_ZONE_ELS.length <= 1 ||
          param == "down" && index == (this.WORK_ZONE_ELS.length-1) ||
          param == "up" && index == 0){
        result = false;
      }
      return result;
    },
    remove(){
      this.DELETE_WORK_ZONE_ITEM(Object.assign({}, this.element));
    },
    copy(){
      this.ADD_WORK_ZONE_ELS(Object.assign({},this.element));
    }
  }
}
</script>

<style scoped>
  .controlPanel{
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
  }
  .controls{
    width: 140px;
    display: flex;
  }
  button{
    width: 21px;
    height: 21px;
    border: none;
    background: none;
    cursor: pointer;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 2px;
  }
  button:hover{
    background-color: #4B97B8;
  }

  .arrows,.action{
    background-color: #449CF4;
    padding: 3px;
    border-radius: 3px 3px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }

  .down{
    background-image: url("../assets/down.png");
    margin-right: 5px;
  }
  .up{
    background-image: url("../assets/up.png");
  }

  .action{
    background-color: #68C2E9;
  }

  .paste{
    background-image: url("../assets/paste.png");
  }
  .copy{
    background-image: url("../assets/copy.png");
  }
  .delete{
    background-image: url("../assets/delete.png");
  }

</style>