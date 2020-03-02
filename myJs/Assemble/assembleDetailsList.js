var PT=[
    {
        "PinTuanID":"135",
        "PinTuanName":"四川麻辣牛肉",
        "PinTuanrice":"20.00",
        "PinTuanTime":"1小时",
        "PinTuanNumber":"3人",
    },
    {
        "PinTuanID":"134",
        "PinTuanName":"四川香脆椒",
        "PinTuanrice":"18.00",
        "PinTuanTime":"1小时",
        "PinTuanNumber":"3人",
    },
    {
        "PinTuanID":"145",
        "PinTuanName":"河北原生板栗仁",
        "PinTuanrice":"18.00",
        "PinTuanTime":"2小时",
        "PinTuanNumber":"2人",
    }
];
$("#queding").click(
    function () {
        if ($("#pintuanTime").val()==1){
            var pintuanTime="1小时"
        }
        else if ($("#pintuanTime").val()==2){
            var pintuanTime="2小时"
        }
        else if ($("#pintuanTime").val()==3){
            var pintuanTime="3小时"
        }
        else if ($("#pintuanTime").val()==4){
            var pintuanTime="4小时"
        }
        if ($("#people").val()==1){
            var people="2人"
        }
        else if ($("#people").val()==2){
            var people="3人"
        }
        else if ($("#people").val()==3){
            var people="4人"
        }
        else if ($("#people").val()==4){
            var people="5人"
        }
        var tianjia={
            "PinTuanID":$("#add_1").val(),
            "PinTuanName":$("#add_2").val(),
            "PinTuanrice":$("#add_3").val(),
            "PinTuanTime":pintuanTime,
            "PinTuanNumber":people,
        };
        PT.push(tianjia);
        console.log(PT.length)
        $("#myTbody").empty()
        table()
        $('#myModal').modal('hide')
    }
);
function table(){
    for (let i = 0; i < PT.length; i++) {
        var tr = $("<tr>" +
            "<td>" +
            PT[i].PinTuanID +
            "</td>" +
            "<td>" +
            PT[i].PinTuanName +
            "</td>" +
            "<td>" +
            PT[i].PinTuanrice +
            "</td>" +
            "<td>" +
            PT[i].PinTuanTime +
            "</td>" +
            "<td>" +
            PT[i].PinTuanNumber +
            "</td>" +
            "<td>" +
            "<span class='myDelete' onclick='mydelete(this)'>删除拼团</span>"+
            "</td>" +
            "</tr>");
        $("#myTbody").append(tr);

    }
}
table();
var newPT=[]
function newTable(){
    for (let i = 0; i < newPT.length; i++) {
        var tr = $("<tr>" +
            "<td>" +
            newPT[i].PinTuanID +
            "</td>" +
            "<td>" +
            newPT[i].PinTuanName +
            "</td>" +
            "<td>" +
            newPT[i].PinTuanrice +
            "</td>" +
            "<td>" +
            newPT[i].PinTuanTime +
            "</td>" +
            "<td>" +
            newPT[i].PinTuanNumber +
            "</td>" +
            "<td>" +
            "<span class='myDelete' onclick='mydelete(this)'>删除拼团</span>"+
            "</td>" +
            "</tr>");
        $("#myTbody").append(tr);
    }
}
$("#chaxun").click(
    function () {
        $("#myTbody").empty()
        newPT.length=0
        for (let i = 0; i < PT.length; i++) {
            if ($("#goodID").val()==PT[i].PinTuanID||$("#goodName").val()==PT[i].PinTuanName) {
                newPT.push(PT[i])
            }
        }
        newTable()
    })
function mydelete(obj) {
    var num=parseInt($(obj).parent().parent().index())//获取当前选中的下标
    PT.splice(num,1)//删除当前选中的对象
    $("#myTbody").empty()//清空表格
    table()//重新生成表格
}
