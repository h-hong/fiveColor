var combneString;
var combneString=localStorage.getItem("combneString");
console.log(combneString);
if (combneString!=null){
    console.log("执行这段")

    var GoodsArray=[];
    splitString(combneString);
//拆分传过来的数组字符串
    function splitString(combneString) {
        var combineArray=[];
        combineArray=combneString.split("|");
        var singleObj=[];
        for (let i=0;i<combineArray.length;i++){
            singleObj=combineArray[i].split("+");
            var pics=[];
            for (let j=18;j<singleObj.length;j++){
                pics.push(singleObj[j]);
            }
            GoodsArray.push(new Good(singleObj[0],singleObj[1],singleObj[2],singleObj[3],singleObj[4],singleObj[5],singleObj[6],pics,singleObj[7],singleObj[8],singleObj[9],singleObj[10],singleObj[11],singleObj[12],singleObj[13],singleObj[14],singleObj[15],singleObj[16],singleObj[17],singleObj[18],singleObj[19]));
        }
        console.log(GoodsArray);
    }
}


function show(GoodsArray) {
    for (let i = 0; i < GoodsArray.length; i++) {
        var newTr = $(`<tr value="` + GoodsArray[i].GoodId + `">` +
            "<th>" +
            `<input type='checkbox' name="myCheckbox" class='myCheckbox' value='` + GoodsArray[i].GoodId + `'>` +
            "</th>" +
            "<th class='list_GoodType'>" +
            GoodsArray[i].GoodType +
            "</th>" +
            "<td>" +
            "<img src='" +
            GoodsArray[i].GoodCover +
            "' style='height:40px;width:60px'>" +
            "</td>" +
            "<td class='list_GoodId'>" +
            "<a href='javascript:void(0)' onclick='Gooddetail(this)'>" +
            GoodsArray[i].GoodId +
            "</a>" +
            "</td>" +
            "<td class='list_GoodName'>" +
            GoodsArray[i].GoodName +
            "</td>" +
            "<td class='list_GysId'>" +
            GoodsArray[i].GysId +
            "</td>" +
            "<td class='list_GoodBatch'>" +
            GoodsArray[i].GoodBatch +
            "</td>" +
            "<td class='list_Stock'>" +
            GoodsArray[i].Stock +
            "</td>" +
            "<td class='list_SaleNumber'>" +
            GoodsArray[i].SaleNumber +
            "</td>" +
            "<td class='list_GoodPrice'>" +
            GoodsArray[i].GoodPrice +
            "</td>" +
            "<td class='list_DiscountPrice'>" +
            GoodsArray[i].DiscountPrice +
            "</td>" +
            "<td class='list_CostPrice'>" +
            GoodsArray[i].CostPrice +
            "</td>" +
            "<td class='list_ShelfTime'>" +
            GoodsArray[i].ShelfTime +
            "</td>" +
            "<td class='list_GoodState'>" +
            "</td>" +
            "</td>" +
            "<td class='list_GoodOperate'>" +
            `<button value="` + GoodsArray[i].GoodId + `" type="button" class="btn btn-primary modalBtn" onclick="GoodInfo(this)" data-toggle="modal" data-target="#myModal">
                        编辑
                    </button>

                    <div class="modal fade text-left" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title" id="myModalLabel">商品信息</h4>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="form-group">
                                            <label for="GoodId">商品ID</label>
                                            <input name="GoodId" id="GoodId" class="form-control" type="text" disabled>
                                        </div>
                                        <div class="form-group">
                                            <label for="GoodName">商品名称</label>
                                            <input id="GoodName" name="GoodName" class="form-control" type="text">
                                        </div>
                                        <div class="form-group">
                                            <label for="GoodPrice">售价</label>
                                            <input id="GoodPrice" name="GoodPrice" class="form-control" type="text">
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                                    <button type="button" id="save" class="btn btn-primary" onclick="Save();">保存</button>
                                </div>
                            </div>
                        </div>
                    </div>` +
            "</td>" +
            "</tr>");
        $("#GoodsList>tbody").append(newTr);

    }
}

//将数组中的数据读出到页面
show(GoodsArray);
state();

//
//===全选
$("#selectAll").click(function () {
    var myCheckbox = document.getElementsByClassName("myCheckbox");
    if (this.checked === true) {
        for (let i = 0; i < myCheckbox.length; i++) {
            $(myCheckbox[i]).prop("checked", "checked");
        }
    } else {
        for (let i = 0; i < myCheckbox.length; i++) {
            $(myCheckbox[i]).prop("checked", "");
        }
    }

});


//===配置状态
function state() {
    //应该根据商品状态来
    var list_Stock = document.getElementsByClassName("list_Stock");//库存数组
    var list_GoodState = document.getElementsByClassName("list_GoodState");//操作数组
    for (let i = 0; i < list_GoodState.length; i++) {
        if ($(list_Stock[i]).text() == 0) {
            let newOper = "<span class='label label-danger'>已售罄</span>";
            $(list_GoodState[i]).append(newOper);
        } else {
            let newOper = "<span class='label label-success'>销售中</span>";
            $(list_GoodState[i]).append(newOper);
        }
    }
}

//====删除按钮
$("#btn_deleteGood").on("click", function () {
    //删除选中行


    var checkID = [];//定义一个空数组
    $("input[name='myCheckbox']:checked").each(function (i) {//把所有被选中的复选框的值存入数组
        checkID[i] = $(this).val();
        var index = checkID[i];

    });
    for (var i = 0; i < GoodsArray.length; i++) {
        for (var j = 0; j < checkID.length; j++) {
            if (GoodsArray[i].GoodId === checkID[j]) {
                GoodsArray.splice(i, 1);//数组中删除数据
                $("#selectAll").prop("checked", "");
                $("#GoodsList>tbody").empty();
                show(GoodsArray);
                state();
            }
        }

    }
    console.log(GoodsArray);

});
function Gooddetail(obj){
    var GoodId = $(obj).text();
    localStorage.setItem("GoodId", GoodId);
    console.log(GoodId);
    window.location.href = "goodInfo.html";
}
/*$(".list_GoodId").on('click', function () {
    var GoodId = $(this).children().text();
    localStorage.setItem("GoodId", GoodId);
    console.log(GoodId);
    window.location.href = "goodInfo.html";
});*/

//=======================搜索
/*//步骤1、获取总共的商品类型
var totalBatches=[];
for (let i=0;i<GoodsArray.length;i++){


} */
//1、输入商品id
$("#s_GoodId").on("change", function () {
    var s_GoodsArray = [];
    $("#s_GoodName").prop("disabled", "true");
    $("#s_type").prop("disabled", "true");
    $("#s_attr").prop("disabled", "true");
    for (let i = 0; i < GoodsArray.length; i++) {
        if ($("#s_GoodId").val() == GoodsArray[i].GoodId) {
            $("#s_GoodName").val(GoodsArray[i].GoodName);
        }
    }
    $("#searchList").unbind("click").on("click", function () {

        for (let i = 0; i < GoodsArray.length; i++) {
            console.log(GoodsArray[i].GysId);
            if ($("#s_GoodId").val() == GoodsArray[i].GoodId) {
                s_GoodsArray.push(GoodsArray[i]);
                console.log("匹配到");
            }
        }
        console.log(s_GoodsArray);
        $("#GoodsList>tbody").empty();
        show(s_GoodsArray);
        state();
        $("#s_GoodName").attr("placeholder", "请输入商品名称");
        $("#s_GoodId").attr("placeholder", "请输入商品ID");

        $("#s_GoodId").attr("disabled", false);
        $("#s_GoodName").attr("disabled", false);
        $("#s_type").attr("disabled", false);
        $("#s_attr").removeAttr("disabled");
        s_GoodsArray = [];

    })

});
//2、类型搜索---封装成一个函数比较好----
$("#s_type").on('change', function () {
    //属性下拉列表初始化----如何获取上一次改变后的属性下拉列表的length
    // console.log($("#s_attr>option"));
    // console.log($("#s_attr>option").length);

    $("#s_attr").empty();
    $("#s_attr").append($("<option value='none'>--请选择对应属性--</option>"));

    /*for (let i=0;i<$("#s_attr>option").length;i++){
        if ($("#s_attr>option")[i].value!="none"){

            // console.log($("#s_attr>option")[i]);
            // console.log($("#s_attr>option")[i].value);

            $("#s_attr>option")[i].remove();
        }
    }*/
    // $("#s_attr").empty();
    $("#s_GoodName").val("");
    $("#s_GoodId").val("");
    $("#s_GoodName").attr("value", "请输入商品名称");
    $("#s_GoodId").attr("value", "请输入商品ID");
    $("#s_GoodId").prop("disabled", "true");
    $("#s_GoodName").prop("disabled", "true");
    //选择状态搜索
    if ($("#s_type option:selected").text() == "商品状态") {
        let option1 = document.createElement("option");
        let option2 = document.createElement("option");
        option1.innerHTML = "已售罄";
        option2.innerHTML = "销售中";
        option1.value = 1;
        option2.value = 2;
        $("#s_attr").append(option1);
        $("#s_attr").append(option2);
        $("#s_attr").on("change", function () {
            var s_GoodsArray = [];
            $("#searchList").unbind("click").on("click", function () {
                console.log($("#s_attr option:selected").text());
                for (let i = 0; i < GoodsArray.length; i++) {
                    console.log()
                    if ($("#s_attr option:selected").text() == GoodsArray[i].GoodState) {
                        s_GoodsArray.push(GoodsArray[i]);
                        console.log("匹配到");

                    }
                }
                console.log(s_GoodsArray);
                $("#GoodsList>tbody").empty();
                show(s_GoodsArray);
                state();
                s_GoodsArray = [];
                $("#s_GoodId").attr("disabled", false);
                $("#s_GoodName").attr("disabled", false);
                $("#s_type").find("option[value='none']").prop("selected", true);
                $("#s_attr").find("option[value='none']").prop("selected", true);
                // console.log($("#s_type").find("option[value='none']"));
            })
        });
    }
    //2、选择商品批次
    if ($("#s_type option:selected").text() == "商品批次") {
        let option1 = document.createElement("option");
        let option2 = document.createElement("option");
        option1.innerHTML = "191010";
        option2.innerHTML = "191011";
        option1.value = 1;
        option2.value = 2;
        $("#s_attr").append(option1);
        $("#s_attr").append(option2);
        $("#s_attr").on("change", function () {
            var s_GoodsArray = [];
            $("#searchList").unbind("click").on("click", function () {
                console.log($("#s_attr option:selected").text());
                for (let i = 0; i < GoodsArray.length; i++) {
                    console.log()
                    if ($("#s_attr option:selected").text() == GoodsArray[i].GoodBatch) {
                        s_GoodsArray.push(GoodsArray[i]);
                        console.log("匹配到");

                    }
                }
                console.log(s_GoodsArray);
                $("#GoodsList>tbody").empty();
                show(s_GoodsArray);
                state();
                $("#s_type").find("option[value='+none+']").attr("checked", true);
                s_GoodsArray = [];
                $("#s_GoodId").attr("disabled", false);
                $("#s_GoodName").attr("disabled", false);
                $("#s_type").find("option[value='none']").prop("selected", true);
                $("#s_attr").find("option[value='none']").prop("selected", true);
            })
        });
    }
    //3、选择商品类型
    if ($("#s_type option:selected").text() == "商品类型") {
        let option1 = document.createElement("option");
        let option2 = document.createElement("option");
        option1.innerHTML = "水果";
        option2.innerHTML = "零食";
        option1.value = 1;
        option2.value = 2;
        $("#s_attr").append(option1);
        $("#s_attr").append(option2);
        $("#s_attr").on("change", function () {
            var s_GoodsArray = [];
            $("#searchList").unbind("click").on("click", function () {
                console.log($("#s_attr option:selected").text());
                for (let i = 0; i < GoodsArray.length; i++) {
                    console.log()
                    if ($("#s_attr option:selected").text() == GoodsArray[i].GoodType) {
                        s_GoodsArray.push(GoodsArray[i]);
                        console.log("匹配到");

                    }
                }
                console.log(s_GoodsArray);
                $("#GoodsList>tbody").empty();
                show(s_GoodsArray);
                state();
                s_GoodsArray = [];
                $("#s_GoodId").attr("disabled", false);
                $("#s_GoodName").attr("disabled", false);
                $("#s_type").find("option[value='+none+']").attr("checked", true);
                $("#s_type").find("option[value='none']").prop("selected", true);
                $("#s_attr").find("option[value='none']").prop("selected", true);
            })
        });
    }
});


//编辑模态框赋值￥
function GoodInfo(obj) {
    // console.log($(obj));
    $("#myModal #GoodId").val($(obj).val());
    // console.log("111"+$(obj).val());
    for (let i = 0; i < GoodsArray.length; i++) {
        if ($("#myModal #GoodId").val() == GoodsArray[i].GoodId) {
            $("#myModal #GoodName").val(GoodsArray[i].GoodName);
            $("#myModal #GoodPrice").val(GoodsArray[i].GoodPrice);
        }
    }
}

//模态框的信息保存
// $("#save").unbind("click").on("click", function () {
function Save() {
    for (let i = 0; i < GoodsArray.length; i++) {
        if ($("#myModal #GoodId").val() == GoodsArray[i].GoodId) {
            GoodsArray[i].GoodName = $("#myModal #GoodName").val();
            GoodsArray[i].GoodPrice = $("#myModal #GoodPrice").val();
        }
    }
    console.log(GoodsArray);
    // history.go(0)
    //重新刷新页面之后的数组是最初的数组没有刷新修改信息
    $("#GoodsList>tbody").empty();
    show(GoodsArray);
    state();
    console.log($(".modal-backdrop.in"));
    $(".modal-backdrop.in").css("display","none");
}
localStorage.clear();

// $(".modal-backdrop.in").attr("display","block");

