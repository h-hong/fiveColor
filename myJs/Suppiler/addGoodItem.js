//==展示供应商信息
function Good(GoodType, GoodId, GoodName,
              GoodPrice, GoodCover, GoodPicture,
              GysId, GoodBatch, Stock, SaleNumber,
              DiscountPrice, StorageTime, GoodState,
              GoodDes, CostPrice, KdPrice, BuyNumber,
              ShelfTime, TotalSale, ReturnNumber) {
    this.GoodType = GoodType;
    this.GoodId = GoodId;
    this.GoodName = GoodName;
    this.GoodPrice = GoodPrice;
    this.GoodCover = GoodCover;
    this.GoodPicture = [];
    // this.GoodPicture = GoodPicture;
    this.GysId = GysId;
    this.GoodBatch = GoodBatch;
    this.Stock = Stock;
    this.SaleNumber = SaleNumber;
    this.DiscountPrice = DiscountPrice;
    this.StorageTime = StorageTime;
    this.GoodState = GoodState;
    this.GoodDes = GoodDes;
    this.CostPrice = CostPrice;
    this.KdPrice = KdPrice;
    this.BuyNumber = BuyNumber;
    this.ShelfTime = ShelfTime;
    this.TotalSale = TotalSale;
    this.ReturnNumber = ReturnNumber;
    this.addGood = function () {

    };
    this.editGood = function () {

    };
    this.deleteGood = function () {

    };
    this.checkGood = function () {

    };
    this.publishGood = function () {

    };
}
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

var nowGysId=localStorage.getItem("nowGysId");
//console.log(nowGysId);
//console.log(GysArray);
var nowGys;
getNowGys(GysArray);
///=====获取当前对应供应商
function getNowGys(GysArray) {
    for(let i=0;i<GysArray.length;i++){
        if(nowGysId==GysArray[i].GysId){
            nowGys=GysArray[i].GysGyss;
        }
    }
     console.log(nowGys);
}
//======展示商品信息列表
show(nowGys);
function show(nowGys) {
    for(let i=0;i<nowGys.length;i++){
        var newTr=$(`<tr>` +
            "<td class='list_GoodId'>" +
            "<a href='javascript:void(0)'>"+
            nowGys[i].GoodId +
            "</a>"+
            "</td>" +
            "<td class='list_GoodName'>" +
            nowGys[i].GoodName +
            "</td>" +
            "<td class='list_CostPrice'>" +
            nowGys[i].CostPrice +
            "</td>" +
            "<td class='list_Stock'>" +
            nowGys[i].Stock +
            "</td>" +
            "<td class='list_Gysoperate'>" +
            `<button class="delbtn btn-danger" onclick="delBtn(this)">删除</button>
                      <button class="movebtn xiu btn-info" value="`+nowGys[i].GysId+`">修改</button>
                      `+
            "</td>" +
            "</tr>");
        $(".table>tbody").append(newTr);

    }

}
//======添加商品
//增加
var arrAdd=[];
$(document).on("click",".addbtn",function(){
    $(".addfade").fadeIn(600)
});
//增加确定
$(document).on("click",".addbtn_ok",function(){
    $(".addfade").fadeOut(600);

    // arrAdd=[];
    // $('#addmodal').find("input").each(function(){
    //     arrAdd.push($(this).val())
    // });

    var newGoods=new Good();
    newGoods.GoodId=$("#addmodal").find("input").eq(0).val();
    newGoods.GoodName=$("#addmodal").find("input").eq(1).val();
    newGoods.CostPrice=$("#addmodal").find("input").eq(2).val();
    newGoods.Stock=$("#addmodal").find("input").eq(3).val();
    for(let i=0;i<GysArray.length;i++){
        if(GysArray[i].GysId==nowGysId){
            var a=GysArray[i].GysGyss;
            // console.log(a);
            a.push(newGoods);
        }
    }
    //console.log(newGoods)
    $('#addmodal').find("input").val('');//初始化
   // console.log(GysArray);
    $(".table>tbody").empty();
//   刷新页面
//     history.go(0);
    getNowGys(GysArray);
    show(nowGys);


});
$(document).on("click",".addbtn_no",function(){
    $(".addfade").fadeOut(600)
});

$(document).on("click",".modal-header i",function(){
    $(".addfade").fadeOut(600)
});


//=====修改商品信息
//修改
var arrMove=[];
var _this = null ;
$(document).on("click",".movebtn",function(){
    arrMove=[];
    _this=$(this).parents("tr");
    // console.log(_this)
    // console.log(_this=$(this).parents("tr"))
    $(".movefade").fadeIn(600);
    $(this).parent().siblings().each(function(){
        arrMove.push($(this).text())

    });

    $(this).parents().find('.movemodal input').each(function(i){
        $(this).val(arrMove[i])

    })
});

//修改确定
$(document).on("click",".addbtn_ok2",function(){
    arrMove=[];
    //  取到修改过的input里的内容
    $(this).parent().siblings().find('input').each(function(){
        arrMove.push($(this).val());
    });
    $(this).parents().find('.movemodal input').each(function(i){
        $(this).val(arrMove[i])
    });

    _this.find("td").each(function(i){
        $(this).text(arrMove[i])
    });
    $(".movefade").fadeOut(600)
});
//修改取消
$(document).on("click",".addbtn_no",function(){
    $(".movefade").fadeOut(600)
});
$(document).on("click",".modal-header i",function(){
    $(".movefade").fadeOut(600)
});
//=========================删除 
function delBtn(obj){
    let goodsId = $(obj).parent().parent().find(".list_GoodId a").html();
    for(let i = 0; i < nowGys.length; i++){
        if(goodsId === nowGys[i].GoodId){
            nowGys.splice(i, 1);
            break;
        }
    }
    //console.log( nowGys);
    $(obj).parent().parent().remove();
}
