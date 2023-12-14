<template>
  <el-main style="width: 1200px;padding-left: 10%;margin: 0 auto;" >
    <iframe id="show-iframe" height="2600px"  onload="resizeIframe('show-iframe')"  align="middle"  width="768px" frameborder="false" allowtransparency="true" scrolling="auto" name="showHere" src="http://hlwxh.huidu.cc"></iframe>
  </el-main>
</template>

<!--http://hlwxh.huidu.cc/-->
<script>
  export default {
    name: 'newParkPar',
    data(){
      return {
        clientHeight:document.documentElement.clientHeight*3 || '2000px',
        // clientHeight:2000,
      }
    },
    mounted() {
      this.resizeIframe();
      this.setIframe(document.getElementById("show-iframe"))
    },
    methods:{
      setIframe(iframe){
        var farme = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (farme.document.body){
          iframe.height = farme.document.documentElement.scrollHeight || farme.document.body.scrollHeight;
          console.log(iframe.height)
        }
      },
      resizeIframe(){
        var Iframe = document.getElementById(obj);
        if (Iframe){
          if (Iframe.contentDocument){//ff
            Iframe.style.height = Iframe.contentDocument.body.scrollHeight +40+'px';
          }
          else if(Iframe.document && Iframe.document.body.scrollHeight){//ie
            Iframe.style.height = iframe.document.body.scrollHeight + 40 + 'px';
          }
        }
      },
    }
  }
</script>

<style lang="less" scoped>

</style>
