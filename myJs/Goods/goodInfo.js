/*获取传过来的ID值*/

var nowGoodId=localStorage.getItem("GoodId");
for (var i=0;i<GoodsArray.length;i++){
    if (GoodsArray[i].GoodId==nowGoodId) {
        $("#GoodType").val(GoodsArray[i].GoodType);
        $("#GoodId").val(GoodsArray[i].GoodId);
        $("#GoodName").val(GoodsArray[i].GoodName);
        $("#GoodCover").prop("src",GoodsArray[i].GoodCover);

    //    供应商信息
        $("#GysId").val(GoodsArray[i].GysId);
        for(let j=0;j<GysArray.length;j++){
            if (GoodsArray[i].GysId===GysArray[j].GysId){
                $("#GysName").val(GysArray[j].GysName);
                $("#GysPhone").val(GysArray[j].GysPhone);
            }
        }
    //    销售相关信息
        $("#GoodCover").prop("src",GoodsArray[i].GoodCover);
        $("#Stock").val(GoodsArray[i].Stock);
        $("#SaleNumber").val(GoodsArray[i].SaleNumber);
        $("#GoodCreate").val(parseInt(GoodsArray[i].SaleNumber)+parseInt(GoodsArray[i].ReturnNumber));
        $("#ReturnNumber").val(GoodsArray[i].ReturnNumber);
        $("#GoodPrice").val(GoodsArray[i].GoodPrice);
        $("#DiscountPrice").val(GoodsArray[i].DiscountPrice);
        $("#CostPrice").val(GoodsArray[i].CostPrice);
        $("#GoodYingli").val(GoodsArray[i].SaleNumber*(GoodsArray[i].GoodPrice-GoodsArray[i].CostPrice));

    }
}
for (let i=0;i<GoodsArray.length;i++){
    console.log(GoodsArray[i]);
}