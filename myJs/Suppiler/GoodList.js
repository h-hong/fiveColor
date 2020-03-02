
//==展示供应商信息
    var GysArray = [
        {
            GysId: 1,
            GysName: "沃尔玛",
            GysAdress: "成都",
            GysPhone: "111",
            GysMan: "小红",
            GysNet: "111.com",
            GysType: "实体店",
            GysGysType: ["水果", "零食", "生鲜"],
            GysGyss: [
                {
                    GoodType: "水果",
                    GoodId: "1-1",
                    GoodName: "小苹果",
                    CostPrice: 2,
                    Stock: 200,

                },
                {
                    GoodType: "零食",
                    GoodId: "1-2",
                    GoodName: "小蛋糕",
                    CostPrice: 4,
                    Stock: 400
                }
            ]
        },
        {
            GysId: 2,
            GysName: "万达",
            GysAdress: "绵阳",
            GysPhone: "222",
            GysMan: "小名",
            GysNet: "222.com",
            GysType: "实体店",
            GysGyssType: ["水果", "甜点", "饮料"],
            GysGyss: [
                {
                    GoodType: "水果",
                    GoodId: "2-1",
                    GoodName: "小苹果",
                    CostPrice: 2,
                    Stock: 200
                },
                {
                    GoodType: "零食",
                    GoodId: "2-2",
                    GoodName: "小蛋糕",
                    CostPrice: 4,
                    Stock: 400
                }
            ]
        }
    ];

    function show(GysArray) {
        for (let i = 0; i < GysArray.length; i++) {
            var newTr = $(`<tr value="` + GysArray[i].GysId + `">` +
                "<td class='list_GysId'>" +
                GysArray[i].GysId +
                "</td>" +
                "<td class='list_GysName'>" +
                GysArray[i].GysName +
                "</td>" +
                `<td class='list_goodshow' onclick="showGoods(this)" name="` + GysArray[i].GysId + `">` +
                `<a href='javascript:void(0);' >查看商品</a> ` +
                "</td>" +
                "<td class='list_Gysoperate'>" +
                `<button class="delbtn btn-danger myDelete" onclick="del(this)" value="`+GysArray[i].GysId +`">删除</button>
                        <button class="movebtn xiu btn-info" value="` + GysArray[i].GysId + `">修改</button>
                        <button class="viewbtn btn-success" value="` + GysArray[i].GysId + `">查看</button>` +
                "</td>" +
                "</tr>");
            $("#GysListTable>tbody").append(newTr);
        }

    }

//将数组中的数据读出到页面
    show(GysArray);


//============供应商信息查看
    $(document).on("click", ".viewbtn", function () {
        var arrView = [];
        var nowGysGyssType = [];//当前供应商供应商品类型
        var nowGysGyssTypeText = [];//当前供应商类型转化成的数组
        $(".viewfade").fadeIn(600);
        var mes = $(this).val();
        // console.log(mes);
        for (let i = 0; i < GysArray.length; i++) {
            if (GysArray[i].GysId == mes) {
                $(".modal-body").find("p span").eq(0).text(GysArray[i].GysId);
                $(".modal-body").find("p span").eq(1).text(GysArray[i].GysName);
                $(".modal-body").find("p span").eq(2).text(GysArray[i].GysAdress);
                $(".modal-body").find("p span").eq(3).text(GysArray[i].GysMan);
                $(".modal-body").find("p span").eq(4).text(GysArray[i].GysPhone);
                $(".modal-body").find("p span").eq(5).text(GysArray[i].GysNet);
                $(".modal-body").find("p span").eq(6).text(GysArray[i].GysType);
                $(".modal-body").find("p span").eq(7).text(GysArray[i].GysGyssType);
            }
        }

    });
//==供应上信息查看关闭
    $(document).on("click", ".addbtn_no", function () {
        $(".viewfade").fadeOut(600)
    });

    $(document).on("click", ".modal-header i", function () {
        $(".viewfade").fadeOut(600)
    });
//======供应商信息修改
    // //  修改按钮
    $(document).on("click",".movebtn",function(){
        var arrView=[];
        var nowGysGyssType=[];//当前供应商供应商品类型
        var nowGysGyssTypeText=[];//当前供应商类型转化成的数组
        $("#movemodal").fadeIn(600);
        var mes=$(this).val();
        console.log(mes);
        for (let i=0;i<GysArray.length;i++){
            if(GysArray[i].GysId==mes){
                console.log( $("#editModal"));
                $("#editModal").find("input").eq(0).val(GysArray[i].GysId);
                $("#editModal").find("input").eq(1).val(GysArray[i].GysName);
                $("#editModal").find("input").eq(2).val(GysArray[i].GysAdress);
                $("#editModal").find("input").eq(3).val(GysArray[i].GysMan);
                $("#editModal").find("input").eq(4).val(GysArray[i].GysPhone);
                $("#editModal").find("input").eq(5).val(GysArray[i].GysNet);
                $("#editModal").find("input").eq(6).val(GysArray[i].GysType);
                $("#editModal").find("input").eq(7).val(GysArray[i].GysGyssType);
            }
        }
        //   把数组里的内容加入到模态框里
        tr=$(this).parent().parent();
        console.log(tr);
    });


    // 修改信息 确定按钮
    $(document).on("click",".addbtn_ok2",function(){
        arrchange=[];
        $(this).parent().siblings().find('input').each(function(){
            arrchange.push($(this).val());
        });
        // console.log(arrchange);
        $(this).parents().find('.movemodal input').each(function(i){
            $(this).val(arrchange[i]);
        });
        $(".movefade").fadeOut(600);
        var qxI=$("#GysId2").val();
        var qxN=$("#GysName2").val();
        var qxA=$("#GysAdress2").val();
        var qxM=$("#GysMan2").val();
        var qxP=$("#GysPhone2").val();
        var qxNe=$("#GysNet").val();
        tr.children().eq(1).html(qxN);
        xarr={
            xId:qxI,
            xNa:qxN,
            xAdd:qxA,
            xMan:qxM,
            xPhone:qxP,
            xNet:qxNe
        };
        obj=xarr;
        // arrMove.push(obj);
        console.log(arrMove)

    });
    //修改取消
    $(document).on("click",".addbtn_no",function(){
        $(".movefade").fadeOut(600)
    });

    $(document).on("click",".modal-header i",function(){
        $(".movefade").fadeOut(600)
    });

//=====供应商信息添加
//   添加
var arrMove = [];
$(document).on("click", ".addbtn", function () {
    $(".addfade").fadeIn(600);
    $(".addbtn_ok1").unbind("click").on("click",addGys);
});
$(".addbtn_ok1").unbind("click");
function addGys() {
    // arrMove=[];
    $(".addfade").fadeOut(600);

    var GysId = $("#GysId").val();
    var GysName = $("#GysName").val();
    var GysAdress = $("#GysAdress").val();
    var GysMan = $("#GysMan").val();
    var GysPhone = $("#GysPhone").val();
    var GysNet = $("#GysNet").val();
    var GysType = $("#GysType").val();
    //  遍历复选框
    var GysGyssType = "";
    $('input:checkbox[name=playaudio]:checked').each(function (i) {
        if (0 == i) {
            GysGyssType = $(this).val();
        } else {
            GysGyssType += ("," + $(this).val());
        }
        return GysGyssType;
    });

    obj = {
        GysId: GysId,
        GysName: GysName,
        GysAdress: GysAdress,
        GysMan: GysMan,
        GysPhone: GysPhone,
        GysNet: GysNet,
        GysType: GysType,
        GysGyssType: GysGyssType,
    };
    GysArray.push(obj);
    console.log(GysArray);
    // $(".movefade").fadeOut(600);
    $("#GysListTable>tbody").empty();
    show(GysArray);


//==模态框初始化
    if (GysId != "") {
        $("#GysId").val("")
    }
    if (GysName != "") {
        $("#GysName").val("")
    }
    if (GysAdress != "") {
        $("#GysAdress").val("")
    }
    if (GysMan != "") {
        $("#GysMan").val("")
    }
    if (GysPhone != "") {
        $("#GysPhone").val("")
    }
    if (GysNet != "") {
        $("#GysNet").val("")
    }
    if (GysType != "批发") {
        $("#GysType").html("<option>批发</option><option>网上售卖</option><option>厂家直销</option>")
    }
};
//=========================查看商品信息列表
function showGoods(obj) {
    var nowGysId;
    window.location.href = "supplierGood.html";
    console.log($(obj).attr("name"));
    console.log($(obj));
    localStorage.setItem("nowGysId", $(obj).attr("name"));
}
$(document).on("click", ".addbtn_no", function () {
    $(".addfade").fadeOut(600);
});

$(document).on("click", ".modal-header i", function () {
    $(".addfade").fadeOut(600);
});

//=========================查看商品信息列表
/*$("#GysListTable").on("click",$(".list_goodshow"),function () {
    var nowGysId;
    // window.location.href = "商品列表1.html";
    console.log($(this).attr("name"));
    console.log($(this));
    localStorage.setItem("nowGysId", $(this).attr("name"));
});*/
function showGoods(obj) {
    var nowGysId;
    window.location.href = "GysGoodList.html";
    console.log($(obj).attr("name"));
    console.log($(obj));
    localStorage.setItem("nowGysId", $(obj).attr("name"));
}
   /* $(".list_goodshow").on("click", function () {
        var nowGysId;
        window.location.href = "商品列表1.html";
        console.log($(this).attr("name"));
        localStorage.setItem("nowGysId", $(this).attr("name"));
        // console.log(localStorage.getItem("nowGysId"));
    });*/


   ///================删除供应商信息

// $(".myDelete").click(function () {
//
// });
function del(obj) {
    $(obj).parent().parent().remove();
    // console.log($(this).parent().parent());
    var mes = $(obj).val();
    console.log(GysArray);
    for (let i=0;i<GysArray.length;i++){
        if (GysArray[i].GysId==mes) {
            GysArray.splice(i,1);
        }
    }
}


/*
/!*$(function(){

    //  模态框
    $(document).on("click",".addbtn",function(){
        $(".addfade").fadeIn(600)
    });
    $(document).on("click",".addbtn_no",function(){
        $(".addfade").fadeOut(600)
    });

    $(document).on("click",".modal-header i",function(){
        $(".addfade").fadeOut(600)
    });

    //删除
    var del=[];
    $(document).on("click",".delbtn",function(){
        del=[];
        if(confirm("确定删除吗？")){
            $(this).parents("tr").fadeOut(300)
        }
    });


    // //  修改按钮
    var arrchange=[];
        $(document).on("click",".movebtn",function(){
            arrchange=[];
            $(".movefade").fadeIn(600);
            var nowGysID=$(this).val();
            for(var i=0;i<arrMove.length;i++){
                if(arrMove[i].GysId==nowGysID){
                    // console.log("相等");
                    arrchange=[
                        arrMove[i].GysId,
                        arrMove[i].GysName,
                        arrMove[i].GysAdress,
                        arrMove[i].GysMan,
                        arrMove[i].GysPhone,
                        arrMove[i].GysNet
                    ];
                }
            }

            //   把数组里的内容加入到模态框里

            $(this).parents().find('.movemodal input').each(function(i){
                $(this).val(arrchange[i])
            });
            tr=$(this).parent().parent();
        });


    // 修改信息 确定按钮
    $(document).on("click",".addbtn_ok2",function(){
        arrchange=[];
        $(this).parent().siblings().find('input').each(function(){
            arrchange.push($(this).val());
        });
        // console.log(arrchange);
        $(this).parents().find('.movemodal input').each(function(i){
            $(this).val(arrchange[i]);
        });
        $(".movefade").fadeOut(600);
            var qxI=$("#GysId2").val();
            var qxN=$("#GysName2").val();
            var qxA=$("#GysAdress2").val();
            var qxM=$("#GysMan2").val();
            var qxP=$("#GysPhone2").val();
            var qxNe=$("#GysNet").val();
            tr.children().eq(1).html(qxN);
            xarr={
                xId:qxI,
                xNa:qxN,
                xAdd:qxA,
                xMan:qxM,
                xPhone:qxP,
                xNet:qxNe
            };
        obj=xarr;
        // arrMove.push(obj);
        console.log(arrMove)

    });
    //修改取消
    $(document).on("click",".addbtn_no",function(){
        $(".movefade").fadeOut(600)
    });

    $(document).on("click",".modal-header i",function(){
        $(".movefade").fadeOut(600)
    });


    //   添加
    var arrMove=[];
    $(document).on("click",".addbtn_ok1",function(){
        // arrMove=[];
        $(".addfade").fadeOut(600);
        // $(document).on("click",".addbtn",function(){
        //
        //     $(".addfade").fadeIn(600)
        // });
        var GysId=$("#GysId").val();
        var GysName=$("#GysName").val();
        var GysAdress=$("#GysAdress").val();
        var GysMan=$("#GysMan").val();
        var GysPhone=$("#GysPhone").val();
        var GysNet=$("#GysNet").val();
        var GysType=$("#GysType").val();
        //  遍历复选框
        var GysGyssType = "";
        $('input:checkbox[name=playaudio]:checked').each(function(i){
            if(0==i){
                GysGyssType = $(this).val();
            }else{
                GysGyssType += (","+$(this).val());
            }
            return GysGyssType;
        });

        obj={
            GysId:GysId,
            GysName:GysName,
            GysAdress:GysAdress,
            GysMan:GysMan,
            GysPhone:GysPhone,
            GysNet:GysNet,
            GysType:GysType,
            GysGyssType:GysGyssType,
        };
        arrMove.push(obj);
        //增加行
        for (let i=arrMove.length-1;i>=0;i--){
            $("table tbody").append(`
                <tr>
                    <th scope="row" class="hea1">${arrMove[i].GysId}</th>
                    <td class="SPCK">${arrMove[i].GysName}</td>
                    <td><button class="chak btn-warning" onclick="jup()">查看商品</button></td>
                    <td>
                        <button class="delbtn btn-danger">删除</button>
                        <button class="movebtn xiu btn-info" value="${arrMove[i].GysId}">修改</button>
                        <button class="viewbtn btn-success">查看</button>

                    </td>
                </tr>
            `);
            break;
        }
        $(".movefade").fadeOut(600);

        if (GysId!=""){
            $("#GysId").val("")
        }
        if (GysName!=""){
            $("#GysName").val("")
        }
        if (GysAdress!="") {
            $("#GysAdress").val("")
        }
        if (GysMan!="") {
            $("#GysMan").val("")
        }
        if (GysPhone!=""){
            $("#GysPhone").val("")
        }
        if (GysNet!=""){
            $("#GysNet").val("")
        }
        if (GysType!="批发"){
            $("#GysType").html("<option>批发</option><option>网上售卖</option><option>厂家直销</option>")
        }
    });
    //修改取消
    $(document).on("click",".addbtn_no",function(){
        $(".movefade").fadeOut(600)
    });

    $(document).on("click",".modal-header i",function(){
        $(".movefade").fadeOut(600)
    });


    //查看
    var arrView=[];
    $(document).on("click",".viewbtn",function(){
        arrView=[];
        $(".viewfade").fadeIn(600);
        for (let i=0;i<arrMove.length;i++){
            var mes=$(this).parent().parent().find(".hea1").text();
            if(arrMove[i].GysId==mes){
                arrView=[
                    arrMove[i].GysId,
                    arrMove[i].GysName,
                    arrMove[i].GysAdress,
                    arrMove[i].GysMan,
                    arrMove[i].GysPhone,
                    arrMove[i].GysNet,
                    arrMove[i].GysType,
                    arrMove[i].GysGyssType
                ];
            }
        }
        // console.log(arrView);
        $(".modal-body").find("p span").each(function(i){
            $(this).text(arrView[i]);
        })
    });

    //查看取消
    $(document).on("click",".addbtn_no",function(){
        $(".viewfade").fadeOut(600)
    });

    $(document).on("click",".modal-header i",function(){
        $(".viewfade").fadeOut(600)
    })
});


*/
