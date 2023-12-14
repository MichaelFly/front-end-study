<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item>主任信箱</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="mailContent">
      <div class="flyDiyTitle">
        <span>主任信箱</span>
      </div>
    </div>
    <div class="secondWrap">
      <div class="secondContent clearfix">
        <div class="firstContent">
          <p>
            <i class="iconfont icon-navicon-dxjs"></i>
            <span>{{statistics.acceptedNumber}}</span> <span>件</span>
          </p>
          <p>接收数量（本月）</p>
        </div>
        <div class="firstContent">
          <p>
            <i class="iconfont icon-qingdan"></i>
            <span>{{statistics.handlerNumber}}</span> <span>件</span>
          </p>
          <p>受理总数</p>
        </div>
        <div class="firstContent">
          <p>
            <i class="iconfont icon-kuaisukaidian"></i>
            <span>{{statistics.responseTime}}</span> <span>个工作日</span>
          </p>
          <p>平均响应时长</p>
        </div>
        <div class="firstContent">
          <p>
            <i class="iconfont icon-shujubiao"></i>
            <span>{{statistics.resolutionRate}}</span> <span>%</span>
          </p>
          <p>一次解决率</p>
        </div>
      </div>
    </div>
    <div class="formWrap" v-show="isWrite">
      <el-form class="formContent" :model="formData" :rules="rules" ref="ruleForm" label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名:" prop="name">
              <el-input v-model="formData.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别">
              <el-radio-group v-model="formData.sex">
                <el-radio label="MALE">男</el-radio>
                <el-radio label="FEMALE">女</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="所属企业:" prop="ent">
              <el-input v-model="formData.ent"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="详细地址:" prop="addr">
              <el-input v-model="formData.addr" placeholder="请输入详细地址"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="联系电话:" prop="phone">
              <el-input v-model="formData.phone" placeholder="请输入联系电话"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电子信箱:" prop="email">
              <el-input v-model="formData.email" placeholder="请输入电子信箱"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="标题:" prop="title">
              <el-input v-model="formData.title" placeholder="请输入标题"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="正文:" prop="content">
              <el-input type="textarea" v-model="formData.content" placeholder="请输入正文"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="上传图片:">
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
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="验证码:" prop="sendCode">
              <input class="codeInput" type="text" v-model="formData.sendCode">
              <img @click="refreshCode" :src="`${$store.state.uploadServer}`+verifyCode" alt="">
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="btns">
              <el-button @click="submitForm('ruleForm')">提交</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="formWrap" v-show="!isWrite">
      <div class="successContent">
        <h1><i class="iconfont icon-sure"></i></h1>
        <h3>恭喜您，信息已经提交成功！</h3>
        <p>请随时保持手机畅通</p>
        <p>工作人员将及时与您沟通！</p>
        <div class="btn">
          <span @click="goIndex">返回首页</span>
        </div>
      </div>
    </div>
  </el-main>
</template>
<script>
  import letterBox from '@/api/letterBox/letterBox'
  import searchDetail from '@/api/searchDetail/searchDetailApi'
  export default {
    name: 'directorMail',
    components: {},
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
          sendCode:''
        },
        rules: {
          name: [
            {required: true, message: '请填写姓名', trigger: 'blur'}
          ],
          addr: [
            {required: true, message: '请填写地址', trigger: 'blur'}
          ],
          phone: [
            {required: true,  trigger: 'blur',validator:checkPhone}
          ],
          email: [
            {required: true,  trigger: 'blur',validator:checkMail}
          ],
          title: [
            {required: true, message: '请填写标题', trigger: 'blur'}
          ],
          content: [
            {required: true, message: '请填写正文', trigger: 'blur'}
          ],
          sendCode: [
            {required: true, message: '请填写验证码', trigger: 'blur'}
          ],
        },
        isWrite: true,
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
          console.log(res)
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
      submitForm(formName){
        let vm = this;
        /*验证验证码*/
        vm.$refs[formName].validate((valid) => {
          if (valid) {
            let fileListStr = '';
            for(let i=0;i<vm.fileList.length;i++){
              fileListStr = fileListStr + vm.fileList[i] + ','
            }
            // console.log(vm.formData)
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
                  vm.isWrite = false;
                }else {
                  console.log(res.data);
                  vm.$message({
                    type: 'error',
                    message: res.data.message
                  });
                  vm.refreshCode();
                }
            }).catch(err=>{
              console.log(err)
            })

          }else{
            console.log('error submit!!');
            return false;
          }
        })
      },
      refreshCode(){
        let vm = this;
        vm.verifyCode = '/letterBox/getVerifyCode?d='+Math.random();
      },
      goIndex(){
        let vm = this;
        vm.$router.push({path:'/index'});
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "directorMail";
</style>
