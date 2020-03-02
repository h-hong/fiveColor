$(function () {
    var addSet;     //添加权限分类
   $("#add_set_add").click( function () {
       addSet = $("#addSteInput").val();
       if(addSet){
           var htmlDt = `<dt><input type="checkbox">${addSet} <span>+</span></dt>`;
           $("#setTab").append(htmlDt);
           $("#addSteInput").val("");
       }
   });
});
var thisDl;
$("#setTab").on("click","span",function () {
    $("#SetModal").css("display","block"); //打开添加模态框
    thisDl =  $(this).parent().parent();
});

$("#falseDd").click(function () {
    $("#SetModal").css("display","none");
    $("#DdModal").val("");
});
$("#trueDd").on("click", function () {
    if( $("#DdModal").val()){
        var htmlDd = `<dd><input type="checkbox">${$("#DdModal").val()}</dd>`;
        $(thisDl).append(htmlDd);
        $("#DdModal").val("");
        $("#SetModal").css("display","none");
    }
});
// 全选
$("#setTab").on("click", "dt input",function () {
    // console.log($(this).prop("checked"));
    if($(this).prop("checked")){
        $(this).parent().nextAll().children("input").prop("checked","checked");
    }else {
        $(this).parent().nextAll().children("input").prop("checked",false);
    }
});