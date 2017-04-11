/**
 * Created by David Xie on 2017/4/11.
 */
String.prototype.format = function (args) {
  let result = this;
  if (arguments.length > 0) {
    if (arguments.length == 1 && typeof (args) == "object") {
      for (let key in args) {
        if (args[key] != undefined) {
          let reg = new RegExp("({" + key + "})", "g");
          result = result.replace(reg, args[key]);
        }
      }
    }
    else {
      for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] != undefined) {
          let reg = new RegExp("({)" + i + "(})", "g");
          result = result.replace(reg, arguments[i]);
        }
      }
    }
  }
  return result;
};

$(function(){
  $('#btnSub').on('click',function(){
    let fulAvatarVal = $('#fulAvatar').val(),
      errorTip = '<div id="errorTip" class="alert alert-warning">{0}</div> ';

    $("#errorTip,#alt_warning").remove();

    if(fulAvatarVal.length == 0)
    {
      $("#container").prepend(errorTip.format('请选择要上传的文件'));
      return false;
    }

    let extName = fulAvatarVal.substring(fulAvatarVal.lastIndexOf('.'),fulAvatarVal.length).toLowerCase();

    if(extName != '.png' && extName != '.jpg'){
      $("#container").prepend(errorTip.format('只支持png和jpg格式图片'));
      return false;
    }

    return true;
  })
});
