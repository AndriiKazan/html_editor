<template>
  <div class="editor">
    <appHead></appHead>

    <div class="wrapper">
      <div class="content">
        <domEls></domEls>
        <div>
          <div>
            <htmlCode></htmlCode>
          </div>
          <div class="actionZone">
            <workZone></workZone>
            <finalHtml></finalHtml>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appHead from "@/components/appHead";
import domEls from "@/components/domEls";
import workZone from "@/components/workZone";
import finalHtml from "@/components/finalHtml";
import htmlCode from "@/components/htmlCode";

export default {
  name: 'editor',
  components:{appHead,
    domEls,
    workZone,
    finalHtml,
    htmlCode
  }
}
</script>

<style scoped>
  .editor{
  }
  .wrapper{
    display: flex;
    justify-content: center;
  }
  .content{
    display: flex;
    height: 100%;
  }
  .actionZone{
    display: flex;
  }
</style>
