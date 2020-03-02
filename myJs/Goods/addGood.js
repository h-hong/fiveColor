/*商品添加form*/
var goodsItem = document.getElementById("goodsItem");
/*供应商名称下拉列表*/
var GysName = document.getElementById("GysName");
/*商品类型下拉列表*/
var GoodType = document.getElementById("GoodType");
/*商品ID下拉列表*/
var GoodID = document.getElementById("GoodID");
/*当前所选择的商品ID*/
var thisGoodID = 0;
/*封面图*/
var cover;
/*详情图*/
var details=[];
// var CoverDetail;


//遍历供应商数据，将名称层数据追加到option选项
for (let i = 0; i < GysArray.length; i++) {
    let option = document.createElement("option");
    option.value = i + 1;
    option.innerHTML = GysArray[i].GysName;
    GysName.appendChild(option);
}

//供应商名称下拉列表发生改变事件
GysName.onchange = function () {
//    获取当前点击对象的值
    var thisGysName = this.value;
    console.log(thisGysName);
    if (thisGysName === "none") {
        GoodType.innerHTML = "<option value='none'>--请选择商品类型--</option>";
        GoodID.innerHTML = "<option value='none'>--请选择商品ID--</option>";
        $("#GoodName").val("");
        $("#GysId").val("");
        $("#GysPhone").val("");
    } else {
        var thisGys=[];
        //遍历，找出当前供应商
        for (let i = 0; i < GysArray.length; i++) {
            if (i === thisGysName - 1) {
                thisGys = GysArray[i];
                console.log(thisGys);
            //    ======================================获取供应商ID
                $("#GysId").val(thisGys.GysId);
            //    ======================================获取供应商联系方式
                $("#GysPhone").val(thisGys.GysPhone);
            }
        }
//    修改商品类型下拉列表


//    每次点击供应商后，商品类型初始化，避免高级重复追加
        GoodType.innerHTML = "<option value='none'>--请选择商品类型--</option>";
        GoodID.innerHTML = "<option value='none'>--请选择商品ID--</option>";
//    遍历供应商可供应商品类型数组，追加到商品类型
        /*this_GysGoodType当前供应商可供应的商品类型数组*/
        var this_GysGoodType = thisGys.GysGoodType;
        console.log(this_GysGoodType);
        for (let i = 0; i < this_GysGoodType.length; i++) {
            let option = document.createElement("option");
            option.innerHTML = this_GysGoodType[i];
            option.value = i + 1;
            GoodType.appendChild(option);
        }
        /*this_GysGood当前供应商可提供的商品*/
        var this_GysGood = thisGys.GysGood;
//商品类型下拉列表发生改变事件,修改商品ID
        GoodType.onchange = function () {
            //初始化
            GoodID.innerHTML = "<option value='none'>--请选择商品ID--</option>";
            //获取当前供应商>商品类型
            var thisGoodType = $("#GoodType option:selected").text();
            var GoodID_index = 0;
            for (let i = 0; i < this_GysGood.length; i++) {
                //如果当前供应商提供的商品类型和选择的商品相同，就列出商品ID
                if (this_GysGood[i].GoodType === thisGoodType) {
                    let option = document.createElement("option");
                    option.innerHTML = this_GysGood[i].GoodId;
                    GoodID_index++;
                    option.value = GoodID_index;
                    GoodID.appendChild(option);
                }
            }
            GoodID.onchange = function () {
                $("#GoodName").val("");
                thisGoodID = $("#GoodID option:selected").text();
                // console.log(thisGoodID);
                for (let i = 0; i < this_GysGood.length; i++) {
                    if (this_GysGood[i].GoodId === thisGoodID) {
                        $("#GoodName").val(this_GysGood[i].GoodName);
                    }
                }
                //==================================================获取对应商品成本价
                //在商品数组中去找    从供应商数组中找商品遍历太多次
                for (let i = 0; i < GoodsArray.length; i++) {
                    if (GoodsArray[i].GoodId === thisGoodID) {
                        $("#CostPrice").val(GoodsArray[i].CostPrice);
                    }
                }
            }
        };
    }
};




//===========================================图片上传
/*====图片读取函数
* file-上传的文件
* element-读取的内容要放入的容器
* */
function readFile(file,element) {
    //每一次初始化
    CoverDetail=11;
//    新建阅读器
    var reader=new FileReader();
//    根据文件类型选择阅读方式
    switch (file.type){
        case 'image/jpg':
        case 'image/png':
        case 'image/jpeg':
        case 'image/gif':
            reader.readAsDataURL(file);
            break;
    }
//    文件阅读结束后执行如下方法
    reader.addEventListener('load',function () {
        //    显示读取的文件，要通过文件类型创建不同的标签
        switch (file.type){
            case 'image/jpg':
            case 'image/png':
            case 'image/jpeg':
            case 'image/gif':
                var figure=document.createElement("figure");
                var img=document.createElement('img');
                var figcaption=document.createElement("figcaption");
                //图片的宽度为容器宽度
                img.style.width="100%";
                img.style.height="250px";
                img.src = "../myImg/"+file.name;
                console.log(file.name);
                //给img添加id
                $(img).attr("class","CoverDetail");
                //当前显示图片的容器新增图片节点
                $(element).parent().append(figure);
                //========================================少写一个商品详情图预览的按钮
                $(figcaption).append(
                    `<a class="btn btn-round btn-square btn-danger" href="#!" title="删除"><i class="mdi mdi-delete"></i></a>`
                );
                figure.append(img);

                figure.append(figcaption);
                //a标签和input  display:none
                element.hide();
                //========================================暂时不写商品详情图预览
                //====图片删除
                $(figcaption).children("a").click(function () {
                    $(this).parent().parent().hide();
                    element.show();
                });
                //
                break;
        }
    });
}


//封面
$("#addCoverBtn>input").change(function () {
    //当前上传的图片信息
    var file=this.files[0];
    readFile(file,$(this).parent());

});

//详情

for (let i=0;i<$(".addDetailBtn").length;i++){
    $(".addDetailBtn").eq(i).children("input").change(function () {
        var file=this.files[0];
        var detail=readFile(file,$(this).parent());
    });
}


//===================================================================新增商品
$("#addGood").click(function () {

    addGood();
    console.log($("#GoodPrice").val());
    for (let i=0;i<GoodsArray.length;i++){
        console.log(GoodsArray[i]);
    }
});
function addGood() {
    var details=[];

    //遍历商品数组，找到当前商品;
    //然后依次赋值
    var newGoodId=$("#GoodID option:selected").text();
    for (let i=0;i<GoodsArray.length;i++){

        if (GoodsArray[i].GoodId===newGoodId){
            console.log(111)
            //GoodType, GoodId, GoodName,GoodPrice, GoodCover, GoodPicture,
            //               GysId, GoodBatch, Stock, SaleNumber,
            //               DiscountPrice, StorageTime, GoodState,
            //               GoodDes, CostPrice, KdPrice,BuyNumber,
            //               ShelfTime, TotalSale, ReturnNumber)
            GoodsArray[i].GoodPrice=parseInt($("#GoodPrice").val());//商品价格
            //CoverDetail数组-第一张是封面，剩下的是详情图
            var CoverDetail=document.getElementsByClassName("CoverDetail");

            for (let i=0;i<CoverDetail.length;i++) {
                if (i ===0){
                    console.log("封面图");
                    GoodsArray[i].GoodCover=CoverDetail[i].src;//商品封面
                }else{
                    console.log("详情图");
                    details.push(CoverDetail[i].src);//商品详情图
                }
            }
            GoodsArray[i].BuyNumber=$("#BuyNumber").val();
            GoodsArray[i].GoodPicture=details;
            GoodsArray[i].GysId=$("#GysId");//供应商ID
            GoodsArray[i].GoodBatch=$("#GoodBatch option:selected").val();//商品批次
            //销售量为0，不赋值
            GoodsArray[i].DiscountPrice=$("#DiscountPrice").val();
            GoodsArray[i].StorageTime=new Date();
            GoodsArray[i].GoodState = $("#GoodState").val();
            GoodsArray[i].GoodDes=$("#GoodDes").val();
            GoodsArray[i].KdPrice=$("#KdPrice option:selected").val();

        }
    }
    console.log(GoodsArray);
    combineData(GoodsArray);
    localStorage.setItem("combneString",combneString);
    window.location.href="goodList.html";

};
//============================localstorage传参
var combineArray=[];//组合数组
var combneString;
function combineData(GoodsArray) {
    var singleObj=[];
    var singleObjDetail=[];//存放详情图信息
    for (let i=0;i<GoodsArray.length;i++){
        singleObj.push(GoodsArray[i].GoodType);
        singleObj.push(GoodsArray[i].GoodID);
        singleObj.push(GoodsArray[i].GoodName);
        singleObj.push(GoodsArray[i].CostPrice);
        singleObj.push(GoodsArray[i].Stock);
        singleObj.push(GoodsArray[i].GoodPrice);
        singleObj.push(GoodsArray[i].GoodCover);
        //商品详情图列表最后读
        singleObj.push(GoodsArray[i].GysId);
        singleObj.push(GoodsArray[i].GoodBatch);
        singleObj.push(GoodsArray[i].SaleNumber);
        singleObj.push(GoodsArray[i].DiscountPrice);
        singleObj.push(GoodsArray[i].StorageTime);
        singleObj.push(GoodsArray[i].GoodState);
        singleObj.push(GoodsArray[i].GoodDes);
        singleObj.push(GoodsArray[i].KdPrice);
        singleObj.push(GoodsArray[i].BuyNumber);
        singleObj.push(GoodsArray[i].ShelfTime);
        singleObj.push(GoodsArray[i].TotalSale);
        singleObj.push(GoodsArray[i].ReturnNumber);

        var pics=GoodsArray[i].GoodPicture;//商品详情图数组
        for (let j=0;j<pics.length;j++){
            singleObj.push(singleObj.push(pics[j]));
        }
        //单个对象信息
        combineArray.push(singleObj.join("+"));
    }
    combneString=combineArray.join("|");
    console.log(combneString);
}






