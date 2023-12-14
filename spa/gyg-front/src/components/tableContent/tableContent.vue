<template>
  <div>
    <div class="conent">
      <div class="img">
        <!--<img :src="{{options.imgUrl}}">-->
      </div>
      <div class="title">
        <h3>
          <p>{{option.title}}</p>
          <p>{{option.content}}</p>
        </h3>
      </div>
    </div>
    <el-pagination v-if="options.pageInfo" @size-change="options.pageInfo.handleSizeChange" @current-change="options.pageInfo.handleCurrentChange" :current-page="options.pageInfo.currentPage" :page-sizes="options.pageInfo.pageSizes" :page-size="options.pageInfo.pageSize" :layout="options.pageInfo.layout" :total="options.pageInfo.total" :class="options.pageInfo.className" :prev-text="options.pageInfo.prevText" :next-text="options.pageInfo.nextText" class="pagination">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    props:['option']
  }
</script>
