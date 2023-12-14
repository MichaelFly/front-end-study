<template>
  <el-main class="mailWrap">
    <div class="contentWrap">
      <div>
        <div class="phoneTitle">
          <h3>主任信箱</h3>
        </div>
      </div>
    </div>
    <div class="statics clearfix">
      <div class="one clearfix">
        <div class="logo">
          <i class="iconfont icon-navicon-dxjs"></i>
        </div>
        <div class="des">
          <p>
            <span class="number">{{statistics.acceptedNumber}}</span>
            <span>件</span>
          </p>
          <p>接收数量（本月）</p>
        </div>
      </div>
      <div class="one clearfix">
        <div class="logo">
          <i class="iconfont icon-qingdan"></i>
        </div>
        <div class="des">
          <p>
            <span class="number">{{statistics.handlerNumber}}</span>
            <span>件</span>
          </p>
          <p>受理数量</p>
        </div>
      </div>
      <div class="one clearfix">
        <div class="logo">
          <i class="iconfont icon-kuaisukaidian"></i>
        </div>
        <div class="des">
          <p>
            <span class="number">{{statistics.responseTime}}</span>
            <span>个工作日</span>
          </p>
          <p>平均响应时长</p>
        </div>
      </div>
      <div class="one clearfix">
        <div class="logo">
          <i class="iconfont icon-shujubiao"></i>
        </div>
        <div class="des">
          <p>
            <span class="number">{{statistics.resolutionRate}}</span>
            <span>%</span>
          </p>
          <p>一次解决率</p>
        </div>
      </div>
    </div>
    <div class="formCote">
      <div class="formOne">
        <div class="list clearfix">
          <i>*</i>
          <p>姓名</p>
          <el-input class="listInput" v-model="formData.name" clearable></el-input>
        </div>
        <div class="list clearfix">
          <i>*</i>
          <p>性别</p>
          <div class="wra" @click="toggle(changed)">
            <p :class="{'change-color':!changed}">男</p>
            <span class="change" :class="{'change-on' : changed}"></span>
            <p :class="{'change-color':changed}">女</p>
          </div>
        </div>
        <div class="list noBorder clearfix">
          <i>*</i>
          <p>联系电话</p>
          <el-input class="listInput contant"  v-model="formData.phone" clearable></el-input>
        </div>
      </div>
      <div class="formOne">
        <div class="list clearfix">
          <p>所属企业</p>
          <el-input class="listInput contant"  v-model="formData.ent" clearable></el-input>
        </div>
        <div class="list clearfix">
          <i>*</i>
          <p>详细地址</p>
          <el-input class="listInput contant"  v-model="formData.addr" clearable></el-input>
        </div>
        <div class="list noBorder clearfix">
          <i>*</i>
          <p>电子邮箱</p>
          <el-input class="listInput contant" v-model="formData.email" clearable></el-input>
        </div>
      </div>
      <div class="formOne mb">
        <div class="list textArea clearfix">
          <i>*</i>
          <p>标题</p>
          <el-input class="listInput" v-model="formData.title"  clearable></el-input>
        </div>
        <div class="list noBorder clearfix">
          <i>*</i>
          <p>正文</p>
          <span>(内容不超过五百字)</span>
          <el-input type="textarea" class="inputArea" v-model="formData.content" clearable placeholder="请输入您的内容"></el-input>
        </div>
        <div class="uploadPic">
         <div class="upTitle  clearfix">
           <i>*</i>
           <p>上传图片</p>
         </div>
          <div>
            <el-upload
              :action="`${$store.state.uploadServer}/common/upload`"
              list-type="picture-card"
              :on-remove="handleRemove"
              :on-success="submitFun"
              :before-upload="beforeAvatarUpload"
              accept="image/jpeg,image/jpg,image/png"
              :limit="5"
              :on-exceed="onExceed"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </div>
        <div class="list clearfix">
          <i>*</i>
          <p>验证码</p>
          <el-input class="listInput sendCode" v-model="formData.sendCode" clearable></el-input>
          <img @click="refreshCode" :src="`${$store.state.uploadServer}`+verifyCode" alt="">
        </div>
      </div>
    </div>
    <div class="subBtn">
      <p @click="submitForm()">确认提交</p>
    </div>
    <phoneFooter></phoneFooter>
  </el-main>
</template>

<script>
  import letterBox from '@/api/letterBox/letterBox'
  import searchDetail from '@/api/searchDetail/searchDetailApi'
  import phoneFooter from '@/components/phoneFooter/phoneFooter'
  export default {
    name: 'directorMail',
    components:{
      phoneFooter
    },
    data() {
      var checkPhone = (rule, value, callback) => {
        let patter=new RegExp("^1[3|4|5|7|8][0-9]\\d{8}$");
        if (!value) {
          return callback(new Error('请填写手机号'));
        }else if(!patter.test(value)){
          return callback(new Error('请输入正确的11位手机号码'));
        }else {
          callback();
        }
      };
      var checkMail = (rule, value, callback) => {
        let patter=new RegExp("^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$");
        if (!value) {
          return callback(new Error('请填写邮箱'));
        }else if(!patter.test(value)){
          return callback(new Error('请输入正确的邮箱'));
        }else {
          callback();
        }
      };
      return {
        formData: {
          name: '',
          sex: 'MALE',
          ent: '',
          addr: '',
          phone: '',
          email: '',
          title: '',
          content: '',
          sendCode:'',
          img:''
        },
        changed:false,
        isWrite: true,
        getPhone:true,
        getMail:true,
        getContent:true,
        fileList:[],
        verifyCode:'/letterBox/getVerifyCode',
        statistics:[],
      }
    },
    mounted() {
      let vm = this;
      vm.getStatistics();
    },
    methods: {
      getStatistics(){
        let vm = this;
        searchDetail.statistics().then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.statistics = res.data;
          } else {
            console.log('error submit!!');
            return false;
          }
        }).catch(error=>{
          console.log(error())
        })
      },
      handleRemove(file, fileList) {
        let vm = this;
        for(let i=0;i<vm.fileList.length;i++){
          if(vm.fileList[i]===file.response.url){
            vm.fileList.splice(i,1);
          }
        }
      },
      submitFun(res, file) {
        let vm = this;

        vm.fileList.push(res.url);
        console.log(vm.fileList)
      },
      beforeAvatarUpload(file) {
        var testmsg=/^image\/(jpeg|png|jpg)$/.test(file.type);
        if (!testmsg) {
          this.$message.error('上传图片格式不对!');
          return
        }
        return testmsg;
      },
      onExceed(files,fileList){
        let vm = this;
        vm.$message({
          type:'error',
          message:'上传图片数量最多为5张！'
        });
      },
      submitForm(){
        let vm = this;
        let fileListStr = '';
        if (vm.formData !=''){
          var partten = /^(1[3|4|5|7|8][0-9]\d{8}$)/i;
          var parttenEmail = /^([A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$)/i;
          var i =  partten.test(vm.formData.phone);
          var pe = parttenEmail.test(vm.formData.email);
          if (i === false){
            vm.$message({
              type: 'error',
              message: '手机号码不正确，请输入正确的手机号！'
            });
            return false
          }
          if(pe === false){
            vm.$message({
              type: 'error',
              message: '邮箱不正确，请输入正确的邮箱！'
            });
            return false
          }
          if (vm.formData.content.length > 500){
            vm.$message({
              type: 'error',
              message: '输入内容不超过500字！'
            });
            return false;
          }
          if (vm.formData.content === "" || vm.formData.addr === ''){
            vm.$message({
              type: 'error',
              message: '输入不能为空！'
            });
            return false;
          }

        }
        if (vm.changed === true){
          vm.formData.sex = 'FEMALE';
        }
        for(let i=0;i<vm.fileList.length;i++){
          fileListStr = fileListStr + vm.fileList[i] + ','
        }
        letterBox.addMail({
          sendUser:vm.formData.name,
          sex:vm.formData.sex,
          ent:vm.formData.ent,
          happenAddress:vm.formData.addr,
          phone:vm.formData.phone,
          email:vm.formData.email,
          theme:vm.formData.title,
          content:vm.formData.content,
          imgUri:fileListStr,
          code:vm.formData.sendCode,
        }).then(res=>{
          if(vm.$commonFun.isSucc(res.data.code)) {
            vm.$router.push({path:'/phoneMail/phoneMailSuccess'});
            vm.isWrite = false;
          }else {
            console.log(res);
            vm.$message({
              type: 'error',
              message: res.data.message
            });
            vm.refreshCode();
          }
        }).catch(err=>{
          console.log(err)
        })

      },
      refreshCode(){
        let vm = this;
        vm.verifyCode = '/letterBox/getVerifyCode?d='+Math.random();
      },
      goIndex(){
        let vm = this;
        vm.$router.push({path:'/index'});
      },
      toggle(val){
        let vm = this;
        switch (val) {
          case 'true':
            vm.formData.sex  = 'MALE';
            alert(vm.forData.sex)
            break;
          case 'false':
            vm.formData.sex = 'FEMALE';
            alert(vm.formData.sex)
            break;
        }
        vm.changed = !vm.changed
      },
    }
  }
</script>

<style lang="less" scoped>
  @import "phoneMail.less";
</style>
