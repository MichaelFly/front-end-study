/**
 * 描述 ：此版本未用到   headerConfig【临时措施】
 */
export default () => {
  let headerConfig = {"Content-Type": "application/json"}

  let previewId = GetUrlParam("preview");
  let state = GetUrlParam("state");

  if (previewId) {
    headerConfig['Preview'] = previewId
  }
  if (state) {
    headerConfig['State'] = state
  }
  return headerConfig
}

function GetUrlParam(paraName) {
  var url = window.location.href.toString();
  var arrObj = url.split("?");

  if (arrObj.length > 1) {
    var arrPara = arrObj[1].split("&");
    var arr;

    for (var i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split("=");

      if (arr != null && arr[0] == paraName) {
        return arr[1];
      }
    }
    return "";
  } else {
    return "";
  }
}
