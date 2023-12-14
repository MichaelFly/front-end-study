<template>
  <el-main class="angleWrap">
    <div v-for="(item,index) in options.joinPolicyList" :key="index" @click="options.itemClick(item[3])" >
      <div class="angleFirst">
        <div class="angleOuter">
          <div class="one">
            <div class="two">
              <div class="three"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="angleSecond" @mouseenter="options.getOver(index)" @mouseleave="options.getOver(!index)">
        <div class="angleOuter">
          <div class="one">
            <div class="two">
              <div class="three">
                <div class="forth">
                  <div class="five">
                    <div class="image" >
                      <img :src="$store.state.imgServer+item[0]" alt="" v-if="options.show === index" >
                      <img :src="$store.state.imgServer+item[1]" alt="" v-else>
                    </div>
                    <p>{{item[2]}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-main>
</template>

<script>
  export default {
    props:['options'],
    data(){
      return{
        show:-1
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "angleSlide.less";
</style>
