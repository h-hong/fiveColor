var Yhq=[
    {
        "YhqId":"A001",
        "YhqName":"水果满减券",
        "YhqType":"满减券",
        "YhqGood":"水果类",
        "YhqNumber":"35",
    },
    {
        "YhqId":"B002",
        "YhqName":"水果立减券",
        "YhqType":"立减券",
        "YhqGood":"水果类",
        "YhqNumber":"44",
    },
    {
        "YhqId":"B003",
        "YhqName":"蔬菜立减券",
        "YhqType":"立减券",
        "YhqGood":"蔬菜类",
        "YhqNumber":"21",
    }
];
$("#queding").click(
    function () {
        if ($("#YhqType").val()==1){
            var YhqType="满减券"
        }
        else if ($("#YhqType").val()==2){
            var YhqType="立减券"
        }
        if ($("#myGood").val()==1){
            var goodType="全部商品"
        }
        else if ($("#myGood").val()==2){
            var goodType="水果类"
        }
        else if ($("#myGood").val()==3){
            var goodType="蔬菜类"
        }
        var tianjia={
            "YhqId":$("#add_1").val(),
            "YhqName":$("#add_2").val(),
            "YhqType":YhqType,
            "YhqGood":goodType,
            "YhqNumber":$("#add_3").val(),
        };
        Yhq.push(tianjia);
        console.log(Yhq.length)
        $("#myTbody").empty()
        table()
        $('#myModal').modal('hide')
    }
);
function table(){
    for (let i = 0; i < Yhq.length; i++) {
        var tr = $("<tr>" +
            "<td>" +
            Yhq[i].YhqId +
            "</td>" +
            "<td>" +
            Yhq[i].YhqName +
            "</td>" +
            "<td>" +
            Yhq[i].YhqType +
            "</td>" +
            "<td>" +
            Yhq[i].YhqGood +
            "</td>" +
            "<td>" +
            Yhq[i].YhqNumber +
            "</td>" +
            "<td>" +
            "<span class='myDelete' onclick='mydelete(this)'>删除优惠券</span>"+
            "</td>" +
            "</tr>");
        $("#myTbody").append(tr);

    }
}
table();
var newYhq=[]
function newTable(){
    for (let i = 0; i < newYhq.length; i++) {
        var tr = $("<tr>" +
            "<td>" +
            newYhq[i].YhqId +
            "</td>" +
            "<td>" +
            newYhq[i].YhqName +
            "</td>" +
            "<td>" +
            newYhq[i].YhqType +
            "</td>" +
            "<td>" +
            newYhq[i].YhqGood +
            "</td>" +
            "<td>" +
            newYhq[i].YhqNumber +
            "</td>" +
            "<td>" +
            "<span class='myDelete' onclick='mydelete(this)'>删除优惠券</span>"+
            "</td>" +
            "</tr>");
        $("#myTbody").append(tr);
    }
}
$("#chaxun").click(
    function () {
        $("#myTbody").empty()
        newYhq.length=0
        for (let i = 0; i < Yhq.length; i++) {
            if ($("#YhqID").val()==Yhq[i].YhqId||$("#YhqName").val()==Yhq[i].YhqName) {
                newYhq.push(Yhq[i])
            }
            // if ($("#myCoupon").val()==1){
            //     if (Yhq[i].YhqType=="满减券") {
            //         newYhq.push(Yhq[i])
            //     }
            // }else if ($("#myCoupon").val()==2) {
            //     if (Yhq[i].YhqType=="立减券") {
            //         newYhq.push(Yhq[i])
            //     }
            // }
            // if ($("#myGoodType").val()==1){
            //     if (Yhq[i].YhqGood=="全部商品") {
            //         newYhq.push(Yhq[i])
            //     }
            // }else if ($("#myGoodType").val()==2) {
            //     if (Yhq[i].YhqGood=="水果类") {
            //         newYhq.push(Yhq[i])
            //     }
            // }
            // else if ($("#myGoodType").val()==3) {
            //     if (Yhq[i].YhqGood=="蔬菜类") {
            //         newYhq.push(Yhq[i])
            //     }
            // }
        }

        newTable()
    })

function mytime() {
    console.log($("#myCoupon").val())
}
setInterval(mytime,2000)
function mydelete(obj) {
    var num=parseInt($(obj).parent().parent().index())//获取当前选中的下标
    Yhq.splice(num,1)//删除当前选中的对象
    $("#myTbody").empty()//清空表格
    table()//重新生成表格
}