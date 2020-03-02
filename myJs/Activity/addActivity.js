var promotionA=[
    {
        "promotionID":"001",
        "promotionName":"新春大礼",
        "promotionCommodity":"水果类",
        "promotionLevel":"-10%",
    },
    {
        "promotionID":"002",
        "promotionName":"粽子情 赛龙舟",
        "promotionCommodity":"蔬菜类",
        "promotionLevel":"-15%",
    },
    {
        "promotionID":"003",
        "promotionName":"中秋佳节",
        "promotionCommodity":"水果类",
        "promotionLevel":"-20%",
    }
];
$("#queding").click(
    function () {
        if ($("#myGood").val()==1){
            var goodType="全部商品"
        }
        else if ($("#myGood").val()==2){
            var goodType="水果类"
        }
        else if ($("#myGood").val()==3){
            var goodType="蔬菜类"
        }
        if ($("#choiceLevel").val()==1){
            var choiceLevel="-10%"
        }
        else if ($("#choiceLevel").val()==2){
            var choiceLevel="-15%"
        }
        else if ($("#choiceLevel").val()==3){
            var choiceLevel="-20%"
        }
        var tianjia={
            "promotionID":$("#add_1").val(),
            "promotionName":$("#add_2").val(),
            "promotionCommodity":goodType,
            "promotionLevel":choiceLevel,
        };
        promotionA.push(tianjia);
        console.log(promotionA.length)
        $("#myTbody").empty()
        table()
        $('#myModal').modal('hide')
    }
);
function table(){
    for (let i = 0; i < promotionA.length; i++) {
        var tr = $("<tr>" +
            "<td>" +
            promotionA[i].promotionID +
            "</td>" +
            "<td>" +
            promotionA[i].promotionName +
            "</td>" +
            "<td>" +
            promotionA[i].promotionCommodity +
            "</td>" +
            "<td>" +
            promotionA[i].promotionLevel +
            "</td>" +
            "<td>" +
            "<span class='myDelete' onclick='mydelete(this)'>删除活动</span>"+
            "</td>" +
            "</tr>");
        $("#myTbody").append(tr);

    }
}
table();
var newPromotion=[]
function newTable(){
    for (let i = 0; i < newPromotion.length; i++) {
        var tr = $("<tr>" +
            "<td>" +
            newPromotion[i].promotionID +
            "</td>" +
            "<td>" +
            newPromotion[i].promotionName +
            "</td>" +
            "<td>" +
            newPromotion[i].promotionCommodity +
            "</td>" +
            "<td>" +
            newPromotion[i].promotionLevel +
            "</td>" +
            "<td>" +
            "<span class='myDelete' onclick='mydelete(this)'>删除活动</span>"+
            "</td>" +
            "</tr>");
        $("#myTbody").append(tr);
    }
}
$("#chaxun").click(
    function () {
        newPromotion.length=0
        $("#myTbody").empty()
        for (let i = 0; i < promotionA.length; i++) {
            if ($("#huodongID").val()==promotionA[i].promotionID||$("#huodongName").val()==promotionA[i].promotionName) {
                newPromotion.push(promotionA[i])
            }
        }
        newTable()
    })
function mydelete(obj) {
    var num=parseInt($(obj).parent().parent().index())//获取当前选中的下标
    promotionA.splice(num,1)//删除当前选中的对象
    $("#myTbody").empty()//清空表格
    table()//重新生成表格
}




