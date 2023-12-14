/**  * 描述 ：公共组件 - 表格 */
<template>
  <el-container class="tableContainer is-vertical">
    <el-table :data="options.data" highlight-current-row :size="options.size" header-cell-class-name="myheadclass" @row-click="options.rowClick" @row-dblclick="options.rowDblclick" @selection-change="options.handleSelectionChange" @sort-change="options.sortChange" :style="options.style" :height="options.height">
      <el-table-column v-if="options.selection" align="center"  type="selection" :width="options.selection.width">
      </el-table-column>
      <el-table-column  v-if="options.icon" :width="options.icon.width"  :align="options.icon.align" :label="options.icon.label" >
        <template slot-scope="scope">
          <i v-if="options.icon.iconClassName" :class="options.icon.iconClassName" :style="options.icon.iconStyle"></i>
          <img v-if="options.icon.iconSrc" :src="options.icon.iconSrc" />
        </template>
      </el-table-column>
      <template v-for="item in options.thead">
        <el-table-column v-if="item.xtype==='link'"  align="center" :prop="item.prop" :label="item.label" :width="item.width" :render-header="item.renderHeader" :sortable="item.sortable">
          <template slot-scope="scope">
            <a href="javascript:void(0);" class="aReset" @click="item.onClick(scope.$index, scope.row)" :style="item.style">
              <i v-if="item.icon" :class="item.iconClassName" :style="item.iconStyle"></i> {{ scope.row[item.prop] }}
            </a>
          </template>
        </el-table-column>
        <el-table-column v-else-if="item.xtype==='iconTxt'" align="center" :prop="item.prop" :label="item.label" :width="item.width" :render-header="item.renderHeader" :sortable="item.sortable">
          <template slot-scope="scope">
            <!--{{item}}-->
            <span :class="item.iconClassName" :style="scope.row[item.iconStyle] || item.iconStyle">
							<!--<i v-if="item.icon && item.iconType==='front'" :style="scope.row[item.iconStyle] || item.iconStyle"></i>-->
							<span style="font-family: Helvetica, tahoma, arial,'Microsoft Yahei', 'Hiragino Sans GB', 'Helvetica Neue'">{{ scope.row[item.prop] }}</span>
              <!--<i v-if="item.icon && item.iconType==='append'" :style="scope.row[item.iconStyle] || item.iconStyle"></i>-->
						</span>
          </template>
        </el-table-column>
        <el-table-column v-else-if="item.xtype==='icon'" align="center" :prop="item.prop" :label="item.label" :width="item.width" :render-header="item.renderHeader" :sortable="item.sortable">
          <template slot-scope="scope">
						<span :class="item.iconClassName" :style="scope.row[item.iconStyle] || item.iconStyle"></span>
          </template>
        </el-table-column>
        <el-table-column v-else-if="item.xtype==='label'" :fixed="item.fixed" :width="item.width" align="center" :label="item.label" :prop="item.prop" :render-header="item.renderHeader">
          <template slot-scope="scope">
            <el-tag v-for="tag in scope.row[item.prop].split(',')" :key="tag" type="" class="toolbarLabel">
              {{tag}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column v-else-if="item.xtype==='echarts'" :fixed="item.fixed" :width="item.width" align="center" :label="item.label" :prop="item.prop" :render-header="item.renderHeader">
          <template slot-scope="scope">
            <div :id="scope.$index" ref="echarts" @click="item.onClick(scope.$index, scope.row)" style="width: 300px; height: 200px;margin-left: 50%;transform: translate(-50%);cursor: pointer;"></div>
          </template>
        </el-table-column>
        <el-table-column v-else align="center" :type="item.xtype" :prop="item.prop" :label="item.label" :width="item.width" :formatter="item.formatter" :render-header="item.renderHeader" :sortable="item.sortable">
        </el-table-column>
      </template>
      <el-table-column :fixed="options.operation.fixed" :width="options.operation.width" align="center" label="操作" v-if="options.operation" :render-header="options.operation.renderHeader" class="operation">
        <template slot-scope="scope">
          <!--<el-dropdown @command="handleCommand">-->
            <template v-for="(item,index) in options.operation.items">
              <button class="flyTableBtn" @click="item.onClick(scope.$index,scope.row)">
                <i class="icon" :class="item.iconClass" :title="item.buttonText"></i>
              </button>
            </template>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-if="options.pageInfo" @size-change="options.pageInfo.handleSizeChange" @current-change="options.pageInfo.handleCurrentChange" :current-page="options.pageInfo.currentPage" :page-sizes="options.pageInfo.pageSizes" :page-size="options.pageInfo.pageSize" :layout="options.pageInfo.layout" :total="options.pageInfo.total" :class="options.pageInfo.className" :prev-text="options.pageInfo.prevText" :next-text="options.pageInfo.nextText" class="pagination">
			<span class="pageInfo" v-if="!options.pageInfo.leftHide">
				Page {{options.pageInfo.currentPage}} of  {{ Math.ceil(options.pageInfo.total/options.pageInfo.pageSize)}}，
				<span>总共 {{options.pageInfo.total}} 条数据</span>
			</span>
    </el-pagination>
  </el-container>
</template>

<script>
  export default {
    props: ['options'],
    data() {
      return {
        fileList: []
      }
    },
    methods: {
      getRefs(refName) {
        if(this.$refs[refName])
          return this.$refs[refName][0]
        else
          throw new Error(`the control ${refName} is undefined !`)
      }
    }
  }
</script>
<style lang="less" scoped>
  .tableContainer {
  /deep/  .el-table {
     flex: none;/*调节表体总高度*/
      thead {
         color:#586d80;
         tr th {
           background: #f6f7fb;
             }
         }
      .el-table__row .cell {
        font-size: 16px;
        color: #7b99b2;
      }
      .operation span {
        font-size: 24px;
        font-weight: bolder;
        cursor: pointer;
      }
      .toolbarLabel.el-tag {
        border: none;
        background: url('img/labelIcon.png') no-repeat 100%;
        width: 90px;
        color: #fff;
        margin: 5px;
        float: left;
      }
      .current-row td .toolbarLabel.el-tag {
        background: url('img/labelIconActive.png') no-repeat 100%;
        color: #279eb7;
      }
      .aReset {
        color: inherit;
      }
  }
  /*分页*/
  /deep/ .pagination {
     font-weight: normal;
     margin-top: 40px;
    .pageInfo {
      span {
        color: #279eb7;
      }
    }
    .el-pager {
      .number {
        background-color: #46c3f6;
        color: #fff;
        margin: 0 1px;
      }
      .number.active {
        background-color: #108cee;
      }
      .more {
        background-color: #46c3f6;
        color: #fff;
        margin: 0 1px;
      }
    }
    .btn-prev, .btn-next {
      background-color: #b5c4d2;
      color: #fff;
    }
  .el-select .el-input {
    width: 100px;
    margin: 0 5px;
  }
  }
}

/*操作按钮*/
  .flyTableBtn{
    background: none;
    cursor: pointer;
    margin-right: 10px;
    i{
      font-size: 18px;
      /*font-weight: bold;*/
      color: #7899B2;
    }
    &:hover i{
      color: #1B92EC;
    }
  }
</style>
