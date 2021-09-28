import { createStore } from 'vuex'

export default createStore({
  actions: {
  },
  mutations: {
    ADD_WORK_ZONE_ELS(state, el){
      let finalHtml = {};
      let elHtml;
      let str;
      el.html? elHtml = el.html: elHtml = "";

      str = el.openingTag + elHtml +el.endingTag;

      if(!state.workZoneEls[state.workZoneEls.length-1]){
        el.id = 1;
      }else{
        let maxId = Math.max(...state.workZoneEls.map(item => item.id));
        el.id = maxId+1;
      }

      finalHtml.html = elHtml;
      finalHtml.id = el.id;

      state.workZoneEls.push(el);
      state.finalHtml.push(finalHtml);
    },
    EDIT_WORK_ZONE_ELS(state, data){
      let index = state.workZoneEls.findIndex(item => item.id==data.id);
      state.workZoneEls[index] = data.data;
      state.finalHtml[index].html = data.data.html;
    },
    TO_UP(state, element){
      let index = state.workZoneEls.findIndex(item => item.id==element.id);
      state.workZoneEls.splice(index,1);
      state.workZoneEls.splice(index-1,0,Object.assign({},element));
      state.finalHtml.splice(index,1);
      state.finalHtml.splice(index-1,0,Object.assign({},element));
    },
    TO_DOWN(state, element){
      let index = state.workZoneEls.findIndex(item => item.id==element.id);
      state.workZoneEls.splice(index,1);
      state.workZoneEls.splice(index+1,0,Object.assign({},element));
      state.finalHtml.splice(index,1);
      state.finalHtml.splice(index+1,0,Object.assign({},element));
    },
    DELETE_WORK_ZONE_ITEM(state, element){
      let index = state.workZoneEls.findIndex(item => item.id==element.id);
      state.workZoneEls.splice(index,1);
      state.finalHtml.splice(index,1);
    }
  },
  state: {
    domElements:[
      {title: "Headline",
      openingTag: "<h1>",
      endingTag:"</h1>"},
      {title: "Paragraph",
      openingTag: "<p>",
      endingTag:"</p>"},
      {title: "Button",
      openingTag: "<button>",
      endingTag:"</button>"},
      {title: "Image",
      openingTag: "<img ",
      endingTag:" >"}
    ],
    workZoneEls:[],
    finalHtml:[]
  },
  getters:{
    DOM_ELEMENTS(state){
      return state.domElements;
    },
    WORK_ZONE_ELS(state){
      return state.workZoneEls;
    },
    FINAL_HTML(state){
      let str = "";
      for(let k = 0; k < state.finalHtml.length; k++){
        str += state.finalHtml[k].html;
      }
      return str
    }
  }
})
