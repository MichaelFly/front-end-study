/**
* 描述 ：左侧菜单(后期JSX语法重构！！！)
*/
<template>
  <el-container>
    <el-tree class="cataTree"
             :data="options.data"
             :props="defaultProps"
             :highlight-current="true"
             :show-checkbox="false"
             :default-expanded-keys="[0, 0]"
             :expand-on-click-node="true"
             :render-content="renderContent"
             @node-click="options.treeMethod.nodeClick">
    </el-tree>
  </el-container>
</template>

<script>
  export default {
    name:'treeBar',
    props: ['options'],
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        iconImg: 'static/images/file_icon.png',
        fileIconImg: 'static/images/logoIcon.jpg',
      }
    },
    methods: {
      renderContent(h, { node, data, store }) {
        let vm = this,
          template;
        if(data.isFile === true){
          template = <span style="flex:1;display:flex;align-items:center;justify-content:space-between;font-size:16px;padding-right:8px;">
            <span>
            <span><img style="margin-right:10px;" src={vm.fileIconImg} />{node.label}</span>
          </span>
          </span>
        }else{
          template = <span style="flex:1;display:flex;align-items:center;justify-content:space-between;font-size:16px;padding-right:8px;">
            <span>
            <span><img style="margin-right:10px;" src={vm.iconImg} />{node.label}</span>
          </span>
          </span>
        }


        return (template);
      }
    }
  };
</script>

<style scoped>
  @import "./treeBar.styl";

</style>

