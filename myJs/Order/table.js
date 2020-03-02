var pageNo=1;
showTable();
start();
var showText;
var isSearch = false;
var searchOrderId;
var searchGoodsName;
var searchCstmName;
var searchCstmPhone;
var searchOrderType;
var searchSendType;

function delOrder(obj) {
    var delSure = confirm("确认删除吗？");
    if (delSure == true) {
        var index = $(obj).parent().parent().index();
        // $(obj).parent().parent().remove();
        for (let i = 0; i < orders.length; i++) {
            if (showOrder[index] == orders[i]) {
                orders.splice(i, 1);
            }
        }
    }
    showTable();
}

function sendGood(obj) {
    var sendSure = confirm("确认发货吗？");
    if (sendSure == true) {
        var index = $(obj).parent().parent().index();
        for (let i = 0; i < orders.length; i++) {
            if (showOrder[index] == orders[i]) {
                orders[i].OrderState = "已发货";
            }
        }
    }
    showTable();
}

function cancelOrder(obj) {
    var sendSure = confirm("确认取消吗？");
    if (sendSure == true) {
        var index = $(obj).parent().parent().index();
        for (let i = 0; i < orders.length; i++) {
            if (showOrder[index] == orders[i]) {
                orders[i].OrderState = "已取消";
            }
        }
    }
    showTable();
}

function sureSend(obj) {
    var sendSure = confirm("确认收货吗？");
    if (sendSure == true) {
        var index = $(obj).parent().parent().index();
        for (let i = 0; i < orders.length; i++) {
            if (showOrder[index] == orders[i]) {
                orders[i].OrderState = "已签收";
            }
        }
    }
    showTable();
}

function showTable() {
    $("#table1").empty();
    var hasOrder = [];
    var count = 0;
    showOrder = [];
    if (showText == "全部" || showText == undefined) {
        for (let i = 0; i < orders.length; i++) {
            showOrder.push(orders[i]);
        }
    } else {
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].OrderState == showText) {
                showOrder.push(orders[i]);
            }
        }
    }
    if (isSearch == false || isSearch == undefined) {

    } else {
        showOrder = [];
        /*通过id查询*/
        if (searchOrderId != "") {
            for (let i = 0; i < orders.length; i++) {
                if (searchOrderId == orders[i].OrderId) {
                    showOrder.push(orders[i]);
                }
            }
        } else {
            if (searchGoodsName != "") {
                for (let i = 0; i < orders.length; i++) {
                    if (searchGoodsName == orders[i].GoodName) {
                        showOrder.push(orders[i]);
                    }
                }
                if (searchCstmName != "") {
                    for (let i = 0; i < showOrder.length; i++) {
                        if (searchCstmName != showOrder[i].CstmName) {
                            showOrder.splice(i, 1);
                            i--;
                        }
                    }
                }
                if (searchCstmPhone != "") {
                    for (let i = 0; i < showOrder.length; i++) {
                        if (searchCstmPhone != showOrder[i].CstmPhone) {
                            showOrder.splice(i, 1);
                            i--;
                        }
                    }
                }
                if (searchOrderType != "0") {
                    if(searchOrderType=="1"){
                        for (let i = 0; i < showOrder.length; i++) {
                            if (showOrder[i].GroupId=="-") {
                                showOrder.splice(i, 1);
                                i--;
                            }
                        }
                    }else if(searchOrderType=="2"){
                        for (let i = 0; i < showOrder.length; i++) {
                            if (showOrder[i].GroupId!="-") {
                                showOrder.splice(i, 1);
                                i--;
                            }
                        }
                    }
                }
                if(searchSendType!=""){
                    for (let i = 0; i < showOrder.length; i++) {
                        if (searchSendType != showOrder[i].SendType) {
                            showOrder.splice(i, 1);
                            i--;
                        }
                    }
                }
            }
            if(searchCstmName!=""){
                for (let i = 0; i < orders.length; i++) {
                    if (searchCstmName == orders[i].CstmName) {
                        showOrder.push(orders[i]);
                    }
                }
                if (searchCstmPhone != "") {
                    for (let i = 0; i < showOrder.length; i++) {
                        if (searchCstmPhone != showOrder[i].CstmPhone) {
                            showOrder.splice(i, 1);
                            i--;
                        }
                    }
                }
                if (searchOrderType != "0") {
                    if(searchOrderType=="1"){
                        for (let i = 0; i < showOrder.length; i++) {
                            if (showOrder[i].GroupId=="-") {
                                showOrder.splice(i, 1);
                                i--;
                            }
                        }
                    }else if(searchOrderType=="2"){
                        for (let i = 0; i < showOrder.length; i++) {
                            if (showOrder[i].GroupId!="-") {
                                showOrder.splice(i, 1);
                                i--;
                            }
                        }
                    }
                }
                if(searchSendType!=""){
                    for (let i = 0; i < showOrder.length; i++) {
                        if (searchSendType != showOrder[i].SendType) {
                            showOrder.splice(i, 1);
                            i--;
                        }
                    }
                }
            }
            if(searchCstmPhone!=""){
                for (let i = 0; i < orders.length; i++) {
                    if (searchCstmPhone == orders[i].CstmPhone) {
                        showOrder.push(orders[i]);
                    }
                }
                if (searchOrderType != "0") {
                    if(searchOrderType=="1"){
                        for (let i = 0; i < showOrder.length; i++) {
                            if (showOrder[i].GroupId=="-") {
                                showOrder.splice(i, 1);
                                i--;
                            }
                        }
                    }else if(searchOrderType=="2"){
                        for (let i = 0; i < showOrder.length; i++) {
                            if (showOrder[i].GroupId!="-") {
                                showOrder.splice(i, 1);
                                i--;
                            }
                        }
                    }
                }
                if(searchSendType!=""){
                    for (let i = 0; i < showOrder.length; i++) {
                        if (searchSendType != showOrder[i].SendType) {
                            showOrder.splice(i, 1);
                            i--;
                        }
                    }
                }
            }
            if(searchOrderType!="0"){
                if(searchOrderType=="2"){
                    for(let i=0;i<orders.length;i++){
                        if(orders[i].GroupId=="-"){
                            showOrder.push(orders[i]);
                        }
                    }
                }else if(searchOrderType=="1"){
                    for(let i=0;i<orders.length;i++){
                        if(orders[i].GroupId!="-"){
                            showOrder.push(orders[i]);
                        }
                    }
                }
            }
            if(searchSendType!=""){
                for (let i = 0; i < orders.length; i++) {
                    if (searchSendType != orders[i].SendType) {
                        showOrder.push(orders[i]);
                    }
                }
            }
        }
        if(showOrder.length==0){
            alert("没有该信息！");
        }
    }

    if(showOrder.length>6){
        var b=parseInt(showOrder.length/6)+1;
        $(".pagination").empty();
        for(let i=1;i<=b;i++){
            var pageLi = $("<li class='nor' onclick='changePage(this)'><a>"+i+"</a></li>");
            $(".pagination").append(pageLi);
        }
    }else {
        $(".pagination").empty();
        pageNo=1;
    }


    for (let i = 0; i < showOrder.length; i++) {
        if (showOrder[i].OrderState == "已支付" || showOrder[i].OrderState == "已下单") {
            showOrder[i].OrderOprate = `<span class='tableSpan' onclick='haha(this)' name="`+showOrder[i].OrderId+`">` +
                "<div>\n" +
                "\n" +
                "        <div>\n" +
                "            <div>\n" +
                "                <div>\n" +
                "                    <div>\n" +
                "\n" +
                "                        <button type=\"button\" class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" id=\"bjbottom\">\n" +
                "                            订单编辑\n" +
                "                        </button>\n" +
                "\n" +
                "                        <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
                "                            <div class=\"modal-dialog\" role=\"document\">\n" +
                "                                <div class=\"modal-content\">\n" +
                "                                    <div class=\"modal-header\">\n" +
                "                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
                "                                        <h4 class=\"modal-title\" id=\"myModalLabel\">订单编辑</h4>\n" +
                "                                    </div>\n" +
                "                                    <div class=\"modal-body\">\n" +
                "                                        <div class=\"form-group\">\n" +
                "                                            <label class=\"col-xs-12\" for=\"example-select\">快递公司</label>\n" +
                "                                            <div class=\"col-xs-12\">\n" +
                "                                                <select class=\"form-control\" id=\"example-select\" name=\"example-select\" size=\"1\">\n" +
                "                                                    <option value=\"0\">请选择</option>\n" +
                "                                                    <option value=\"1\">中通</option>\n" +
                "                                                    <option value=\"2\">圆通</option>\n" +
                "                                                    <option value=\"3\">顺丰</option>\n" +
                "                                                </select>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"form-group\">\n" +
                "                                            <label class=\"col-xs-12\" for=\"example-text-input\">收货人姓名</label>\n" +
                "                                            <div class=\"col-xs-12\">\n" +
                "                                                <input class=\"form-control\" type=\"text\" id=\"example-text-input\" name=\"example-text-input\" placeholder=\"请输入收货人姓名...\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"form-group\">\n" +
                "                                            <label class=\"col-xs-12\" for=\"example-text-input\">收货人手机号</label>\n" +
                "                                            <div class=\"col-xs-12\">\n" +
                "                                                <input class=\"form-control\" type=\"text\"  id=\"GetterPhone\" name=\"example-text-input\" placeholder=\"请输入收货人手机号...\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"form-group\">\n" +
                "                                            <label class=\"col-xs-12\" for=\"example-textarea-input\">收货地址</label>\n" +
                "                                            <div class=\"col-xs-12\">\n" +
                "                                                <textarea class=\"form-control\" id=\"example-textarea-input\" name=\"example-textarea-input\" rows=\"6\" placeholder=\"请输入收货地址...\"></textarea>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                    </div>\n" +
                "                                    <div class=\"modal-footer\">\n" +
                "                                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button>\n" +
                "                                        <button type=\"button\" class=\"btn btn-primary\" onclick=\"Save()\">点击保存</button>\n" +
                "                                    </div>\n" +
                "                                </div>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>" +
                "</span class='tableSpan'>" +
                "<span class='tableSpan' onclick='cancelOrder(this)'>" +
                "取消订单" +
                "</span ><br>" +
                "<span class='tableSpan'  onclick='sendGood(this)'>" +
                "进行发货" +
                "</span>"
        } else if (showOrder[i].OrderState == "已发货") {
            showOrder[i].OrderOprate = "<span class='tableSpan'  onclick='sureSend(this)'>" +
                "确认收货" +
                "</span>"
        } else if (showOrder[i].OrderState == "退款处理中") {
            showOrder[i].OrderOprate = `<span class='tableSpan' onclick='drawBack(this)' name="`+showOrder[i].OrderId+`">` +
                "<div>\n" +
                "\n" +
                "        <div>\n" +
                "            <div>\n" +
                "                <div>\n" +
                "                    <div>\n" +
                "\n" +
                "                        <button type=\"button\" class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#myModa2\" id=\"tkcl\">\n" +
                "                            退款处理\n" +
                "                        </button>\n" +
                "\n" +
                "                        <div class=\"modal fade\" id=\"myModa2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
                "                            <div class=\"modal-dialog\" role=\"document\">\n" +
                "                                <div class=\"modal-content\">\n" +
                "                                    <div class=\"modal-header\">\n" +
                "                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
                "                                        <h4 class=\"modal-title\" id=\"myModalLabe2\">退款处理</h4>\n" +
                "                                    </div>\n" +
                "                                    <div class=\"modal-body\">\n" +
                "                                        <div class=\"form-group\">\n" +
                "                                            <label class=\"col-xs-12\">退款金额：<span class=\"OrderPrice\"></span></label>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"form-group\">\n" +
                "                                            <div class=\"col-xs-12\">\n" +
                "                                                <input class=\"form-control\" type=\"text\" id=\"example-text-input2\" name=\"example-text-input\" placeholder=\"请输入退款金额...\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"form-group\">\n" +
                "                                            <label class=\"col-xs-12\" for=\"example-textarea-input\">支付原因</label>\n" +
                "                                            <div class=\"col-xs-12\">\n" +
                "                                                <textarea class=\"form-control\" id=\"example-textarea-input2\" name=\"example-textarea-input\" rows=\"6\" placeholder=\"请输入退款原因...\"></textarea>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                    </div>\n" +
                "                                    <div class=\"modal-footer\">\n" +
                "                                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button>\n" +
                "                                        <button type=\"button\" class=\"btn btn-primary\" onclick='SaveTK()'>点击保存</button>\n" +
                "                                    </div>\n" +
                "                                </div>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>" +
                "</span>"
        } else if (showOrder[i].OrderState == "已签收" || showOrder[i].OrderState == "已退款" || showOrder[i].OrderState == "已取消") {
            showOrder[i].OrderOprate = "<span class='tableSpan delOrder' onclick='delOrder(this)'  >" +
                "删除订单" +
                "</span>"
        }
    }
    for (let i = (pageNo-1)*6; i < pageNo*6; i++) {
        var tr = $("<tr>" +
            "<td>" +
            (i + 1) +
            "</td>" +
            "<td>" +
            "<span class='tableSpan odid'>" +
            showOrder[i].OrderId +
            "</span>" +
            "</td>" +
            "<td>" +
            showOrder[i].GroupId +
            "</td>" +
            "<td>" +
            showOrder[i].GoodName +
            "</td>" +
            "<td>" +
            showOrder[i].CstmName +
            "</td>" +
            "<td>" +
            showOrder[i].CstmPhone +
            "</td>" +
            "<td>" +
            showOrder[i].SendType +
            "</td>" +
            "<td>" +
            showOrder[i].PayTime +
            "</td>" +
            "<td>" +
            showOrder[i].OrderState +
            "</td>" +
            "<td>" +
            showOrder[i].OrderOprate +
            "</td>" +
            "</tr>");
        $("#table1").append(tr);
    }
}
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
$(".odid").on("click",function () {
    var id=$(this).text();
    console.log(id);
    localStorage.setItem("gyj",id);
    window.location.href="orderDetails.html";
});
$("li").click(function () {
    showText = $(this).children().text();
    isSearch = false;
    showTable();
});
$(".searchBtn").click(function () {
    searchOrderId = $("#orderId").val();
    searchGoodsName = $("#goodName").val();
    searchCstmName = $("#userName").val();
    searchCstmPhone = $("#userPhoneNumber").val();
    searchOrderType = $("#orderType").val();
    searchSendType = $("#sendType").val();
    if (searchSendType == 1) {
        searchSendType = "寄送到家";
    } else if (searchSendType == 2) {
        searchSendType = "配送到站";
    }else if(searchSendType==0){
        searchSendType="";
    }
    console.log(typeof searchOrderType);
    $("input").val("");
    $("select").val("0");
    isSearch = true;
    showTable();
});

function start() {
    $("input").val("");
    $("select").val("0");
}
function changePage(obj){
    console.log($(obj).children().text());
    pageNo=parseInt($(obj).children().text());
    showTable();
    // $(obj).attr("class","active");
    // $(obj).siblings().attr("class","nor");

}
// function ggg() {
//     $("td").css("height")
// }
// function Save() {
//     if(Kdcompany.value==1){
//         orders[n].Kdcompany="中通";
//         $(".Kdcompany")[0].innerHTML=orders[n].Kdcompany;
//     }else if(Kdcompany.value==2){
//         orders[n].Kdcompany="圆通";
//         $(".Kdcompany")[0].innerHTML=orders[n].Kdcompany;
//     }else if(Kdcompany.value==3){
//         orders[n].Kdcompany="顺丰";
//         $(".Kdcompany")[0].innerHTML=orders[n].Kdcompany;
//     }else{
//         $(".Kdcompany")[0].innerHTML =orders[n].Kdcompany;
//     }
//     // orders[n].GetterName=GetterName.value;
//     // $(".GetterName")[0].innerHTML=orders[n].GetterName;
//     // orders[n].GetterPhone=GetterPhone.value;
//     // $(".GetterPhone")[0].innerHTML=orders[n].GetterPhone;
//     // dz=Address.value;
//     // $('#myModal').modal('hide');
//
//     // window.open("dingdanxiangqing.html?d="+ddid+dz);
// }
