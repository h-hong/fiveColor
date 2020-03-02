$(function () {
    $("#goodManage").on("click",function () {
        $("#goodManageC",window.parent.document)[0].click();
    });
    $("#purchaseOrder").on("click",function () {
        $("#purchaseOrderC",window.parent.document)[0].click();
    });
    $("#activity").on("click",function () {
        $("#activityC",window.parent.document)[0].click();
    });
    $("#manage").on("click",function () {
        $("#supplierC",window.parent.document)[0].click();
    });
    $("#supplier").on("click",function () {
        $("#manageC",window.parent.document)[0].click();
    });
    $("#admin").on("click",function () {
        $("#adminC",window.parent.document)[0].click();
    });
    $("#user").on("click",function () {
        $("#userC",window.parent.document)[0].click();
    });

});
if (localStorage.getItem("lv") !=="1"){
    $("#activity").parent().parent().on("click",function () {
        alert("权限不足");
    });
    $("#supplier").parent().parent().on("click",function () {
        alert("权限不足");
    })
}