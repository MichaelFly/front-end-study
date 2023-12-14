/**
 * Created by cdyoue on 2018/6/14.
 */
/**  * 描述 ：公用原生方法 */

export default {
  //向url里穿参， 如果参数存在，则替换
  setQuery: (key, value, url) => {
    var retUrl = url || window.document.location.href;

    if(retUrl.indexOf("?") == -1) {
      retUrl += "?" + key + "=" + value;
    } else {
      if(retUrl.indexOf("&" + key + "=") == -1) {
        if(retUrl.indexOf("?" + key + "=") == -1)
          retUrl += "&" + key + "=" + value;
        else
          retUrl = retUrl.replace(eval('/(' + key + '=)([^&]*)/gi'), "?" + key + "=" + value);
      } else {
        retUrl = retUrl.replace(eval('/($' + key + '=)([^&]*)/gi'), "&" + key + "=" + value);
      }
    }
    return retUrl;
  },
  //url取值函数
  /*getQuery: () => {
    var urlData = {};
    window.document.location.href.split("?")[1] == undefined ? "" : $.each(decodeURI(window.document.location.href.split("?")[1]).split("&"), function(index, domEle) {
        urlData[domEle.split("=")[0]] = domEle.split("=")[1];
      });
    return urlData
  },*/

  //单位转换
  bytesToSize: (bytes) => {
    if (bytes === 0) return '0 B';
    var k = 1024, // or 1024
      sizes = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
  },
  //状态码封装
  isSucc: function (code) {
    return code !== null && code  === 200;
  },
  isAuthSucc: function (code) {
    return code !== null && code % 1000 === 201;
  },
  noticeMsg:function (restcode) {
    var code = restcode % 1000;
    switch(code) {
      case 1:
        return "成功";
        break;
      case 2:
        return "失败";
        break;
      case 3:
        return "请求错误";
        break;
      case 4:
        return "执行错误";
        break;
      case 5:
        return "参数错误";
        break;
      case 6:
        return "内部错误";
        break;
      case 7:
        return "调用错误";
        break;
      case 8:
        return "目标不存在";
        break;
      case 9:
        return "目标已存在";
        break;

      case 10:
        // return{
        //     msg:"认证失败",
        //     omsg:"AUTH_FAILED"
        // };
        // Showbo.Msg.alert("Token失效！", function () {
        //     window.location.href = basePath + "/login";
        // });
        /*layer.confirm("Token失效！", {
         btn: ['确定']
         }, function(index) {
         window.location.href = basePath + "/login";
         layer.close(index);
         }, function() {

         });*/
        return "token失效";
        break;
      case 11:
        return "缺少权限";
        break;
      case 13:
        return "功能不支持";
        break;
      case 50:
        return "达到最大访问数量";
        break;
      case 51:
        return "达到最大访问流量";
        break;
      case 52:
        return "长度超限";
        break;
      case 100:
        return "获取TOKEN成功";
        break;
      case 101:
        return "用户已存在";
        break;
      case 102:
        return "用户不存在";
        break;
      case 103:
        return "用户禁用";
        break;
      case 104:
        return "用户截断";
        break;
      case 105:
        return "组已存在";
        break;
      case 106:
        return "组不存在";
        break;
      case 107:
        return "组禁用";
        break;
      case 108:
        return "用户已在组内";
        break;
      case 109:
        return "用户不在组内";
        break;
      case 150:
        return "数据单元结构存在";
        break;
      case 151:
        return "数据单元结构不存在";
        break;
      case 500:
        return "目标无更改";
        break;
      default:
        return "未知错误";
        break;

    }

  }
}
