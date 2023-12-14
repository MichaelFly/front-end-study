/**
 * 作者 ：fly
 *
 * 描述 ：表格demo
 */
"use strict" // 定义为严格模式编码要求

class tableJs {
  constructor(data) {
    this.data = data
  }

  getTableOptions({
                    handleSizeChangeFun,
                    handleCurrentChangeFun,
                    handleSelectionChangeFun,
                    sortChangeFun,
                    rowClick,
                    pageClickFun,
                    rowDblclick,
                    rowEditFun
                  }) {
    let self = this;
    let options = {
      thead: [
        {
          xtype: 'index',
          label: '序号',
          width: '55'
        }, {
          prop: "name", // 数据的key值
          label: "名称", // 显示的标题
        }, {
          prop: "type", // 数据的key值
          label: "类型", // 显示的标题
        }, {
          xtype: 'icon',
          prop: "share", // 数据的key值
          label: "分享", // 显示的标题
        }, {
          prop: "host", // 数据的key值
          label: "主机", // 显示的标题
        }, {
          prop: "port", // 数据的key值
          label: "端口号", // 显示的标题
        },{
          prop: "type", // 数据的key值
          label: "类型", // 显示的标题
        },
      ],
      selection: {
        width: "55"
      },
      operation: {
        width: "240",
        items: [{
          xtype: "button", // commonButton
          buttonText: "编辑",
          iconClass:'',
          onClick: rowEditFun
        }, {
          xtype: "button",
          buttonText: "删除",
          iconClass:'',
          onClick: rowEditFun
        }, {
          xtype: "button",
          buttonText: "二级分类",
          iconClass:'',
          onClick: rowEditFun
        }]
      },
      data: self.data.dataList,
      pageInfo: {
        currentPage: self.data.pageNo,
				pageSizes: [10, 20, 50],
        pageSize: self.data.pageSize,
        layout: "slot, sizes ,-> ,prev, pager, next",
        total: self.data.total,
        totaldata: Math.ceil(self.data.total/self.data.pageSize),
        handleSizeChange: handleSizeChangeFun,
        handleCurrentChange: handleCurrentChangeFun,
        popperClass: "ppp",
        prevText: "< 上一页",
        nextText: "下一页 >"
      },
      handleSelectionChange: handleSelectionChangeFun,
      sortChange: sortChangeFun,
      rowClick: rowClick,
      rowDblclick: rowDblclick
    }

    return options
  }
}

export default (data) => {
  return new tableJs(data)
}
