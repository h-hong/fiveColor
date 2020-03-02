var n = 0;
var pag = 5;  //每页显示多少条
var userSta;  //状态
var scoreArr = [];  //所有用户
for(let i = 0; i<user.length; i++){
    scoreArr.push(user[i]);
}
var Id, pwd, name, fakName, sex,  phone, email, score, Spend, state, adress, order;
function getAdmin(data, n){
    $("tbody tr").remove();
    var num = parseInt(n);
    scoreLook(scoreArr, num);
}
getAdmin(user, n);

//锁定
function adsta(obj) {
    var admId = $(obj).parent().parent().children(".AI").text();
    if($(obj).html() === "正常") {
        $(obj).html("锁定");
        $(obj).css("color","red");
        setData(admId, "false");
    }else {
        $(obj).html("正常");
        $(obj).css("color","rgba(45, 142, 255, 0.71)");
        setData(admId, "true");
    }
}
// 更新权限数据
function setData(Id, reg){
    for(let i = 0; i<user.length; i++){
        if(user[i].UserId === Id){
            // console.log(adminData[i].AdminState);
            user[i].UserState = reg;
            console.log(user[i].UserState);
            break;
        }
    }
}
//翻页
var falge = true;
function getTo(){
    if(falge){
        if(n <=0){
            getAdmin(user, n);
        }else {
            falge = false;
            n--;
            getAdmin(user, n);
            getFalge()
        }
    }
}
function getLa(){
    if(falge){
        if(n >= Math.ceil(user.length/pag) - 1){
            getAdmin(user, n);
        }else {
            falge = false;
            n++;
            getAdmin(user, n);
            getFalge()
        }
    }
}
function getFalge(){
    setTimeout(function () {
        falge = true;
    }, 500)
}

/////------------------------------------////////////
//修改管理
function reviUser(obj){
    $("#exampleModal").css("display","block");
    let userId = $(obj).parent().parent().children(".AI").text();
    // console.log(admId);
    let id = $("#idModal");  //页面账号
    let pwd = $("#pwdModal");  //密码
    //页面显示
    for(let i = 0; i<user.length; i++){
        if(user[i].UserId === userId){
            id.val(user[i].UserId);
            pwd.val(user[i].UserPassword);
            break;
        }
        // console.log(adminData[i].AdminState);
    }
}
//确认修改
$("#trueExample").on("click", function () {
    let id = $("#idModal").val();
    let pwd = $("#pwdModal").val();
    // 调用更新modal账号数据
    var listI = setModalData(id, pwd);
    //更新列表
    newList(id , listI);
    // alert("修改成功");
    yesModa();
});
//查询
$("#userSelBtn").on("click",function () {
    let nameSel = $("#setUserID").val();
    if (nameSel) {
        for(let i = 0; i<user.length; i++) {
            Id = user[i].UserId;               //1.账号
            pwd = user[i].UserPassword;             //2.密码
            name = user[i].UserName || "";     // 4.名字
            fakName = user[i].UserFakename || "";  //5.昵称
            sex = user[i].UserSex || "";        //6.性别
            phone = user[i].UserPhone || "";  //7.电话
            email = user[i].UserEmail || ""; //8..邮箱
            score = user[i].UserScore || "";     //9.积分
            Spend = user[i].UserSpend || "";     //10.花费
            state = user[i].UserState;      //11.状态
            adress = user[i].UserAdress;   //地址数组
            order =  user[i].UserOrder;    //订单
            // 判断
            switch (state) {
                case "true":
                    userSta = "正常";
                    break;
                default:
                    userSta = "锁定";
                    break;
            }
            if (nameSel === Id) {
                $("tbody tr").remove();
                var html = `<tr><th scope="row"><input type="checkbox" onclick="delA(this)"/></th><td>${i+1}</td><td  class="AI">${Id}</td><td class="cur"><div onclick="look(this)">${name}</div></td><td>${sex}</td><td>${phone}</td><td>${email}</td><td>${score}</td><td><div class="condition" onclick="adsta(this);">正常</div></td><td><div class="revise" onclick="reviUser(this);">修改</div><div class="dele" onclick="delAdmin(this);">删除</div></td></tr>`;
                $("table").append(html);
                break;
            }
        }
        return;
    }
    getAdmin(user, n)
});
//取消修改
$("#falseExample").on("click", function () {
    $("#exampleModal").css("display","none");
});
//删除
function delAdmin(obj) {
    var id = $(obj).parent().parent().children("td").eq(1).html();
    console.log(id);
    for(let i = 0; i< user.length; i++){
        if(id === user[i].UserId){
            user.splice(i, 1);  //删除数据
            getAdmin(user, n);
        }
    }
    $(obj).parent().parent().remove();
}

//批量选择
$("#allUserCheck").on("click",function () {
    if ($(this).prop("checked")) {      //返回checked的值
        var trL = $("tbody tr");
        for(let i = 0; i < trL.length; i++){
            $(trL[i]).addClass("bgc");
            $(trL[i]).children("th").children("input:checkbox").prop("checked", true);
        }
    } else {
        $("tbody tr").removeClass("bgc");
        $("tbody tr input:checkbox").prop("checked", false);
    }
});
function delA(obj){
    if ($(obj).prop("checked")) {
        $(obj).parent().parent().addClass("bgc");
    }else {
        $(obj).parent().parent().removeClass("bgc");
    }
}
//批量删除
$("#btn_delete").on("click",function () {
    var arrDel = [];  //要删除的账号
    let tr =  $("tbody tr");
    $("#allUserCheck").attr("checked", false);
    for(let i = 0; i < tr.length; i++){
        if($(tr[i]).attr("class") === "bgc"){
            arrDel.push($(tr[i]).children("td").eq(1).text());   //获取删除的账号
        }
    }
    setDel(arrDel); //删除
    getAdmin(user, n);
});
function setDel(arrDel) {
    for(let i = 0; i < arrDel.length; i++){
        for(let j = 0; j < user.length; j++){
            if(arrDel[i] === user[j].UserId){
                user.splice(j, 1);
            }
        }
    }
}
// 更新modal账号数据
function setModalData(id, pwd) {
    for(let i = 0; i<adminData.length; i++){
        if(user[i].UserId === id){
            user[i].UserPassword = pwd ;
            $(".moda").css("display","none");
            return i;
        }
    }
}
//跟新页面列表
function   newList(id, listI) {
    var ids = $(".AI");
    for(let i = 0; i < ids.length; i++){
        if($(ids[i]).html() === id){
            // console.log($(ids[i]).parent().children("td").eq(1).html());
            $(ids[i]).parent().children("td").eq(1).html(user[listI].UserId);
        }
    }
}
//修改成功
function yesModa() {
    $("#yesModal").css("display","block");
    setTimeout(function () {
        $("#yesModal").css("display","none");
    },1000)
}
//查看
function look(obj) {
    var thisId = $(obj).parent().parent().children("td").eq(1).html();
    var arrUser = ["姓名:", "昵称：", "账号:", "密码:", "性别:",  "电话:", "电子邮箱:", "积分:", "消费:", "状态:", "地址"];
    for(let i = 0; i<user.length; i++){
        if(user[i].UserId === thisId){
            Id = user[i].UserId;               //1.账号
            pwd = user[i].UserPassword;             //2.密码
            name = user[i].UserName || "";     // 4.名字
            fakName = user[i].UserFakename || "";  //5.昵称
            sex = user[i].UserSex || "";        //6.性别
            phone = user[i].UserPhone || "";  //7.电话
            email =user[i].UserEmail || ""; //8..邮箱
            score = user[i].UserScore || "";     //9.积分
            Spend = user[i].UserSpend || "";     //10.花费
            state = user[i].UserState;      //11.状态
            adress = user[i].UserAdress;   //地址数组
            // 判断
            switch (state) {
                case "true":
                    userSta = "正常";
                    break;
                default:
                    userSta = "锁定";
                    break;
            }
            var addArr = [name , fakName, Id, pwd, sex, phone, email, score, Spend, userSta, adress];
            $("#exampleModa2").css("display", "block");
            for (let i = 0; i < addArr.length; i++){
                if(i === addArr.length-1){
                    for(var j = 0; j < addArr[i].length; j++){
                        var li = `<li><p><span>${arrUser[i]}${j+1}:</span>${addArr[i][j]}</p></li>`;
                        $("#userP").append(li);
                    }
                }else{
                    var li = `<li><p><span>${arrUser[i]}</span> ${addArr[i]}</p></li>`;
                    $("#userP").append(li);
                }
            }
        }
    }
}
$("#trueLook").on("click", function () {
    $("#userP").empty();
    $("#exampleModa2").css("display", "none");
});
// 积分排序
$("#scoreTop").on("change", function () {
    console.log($(this).prop("checked"));
    if($(this).prop("checked")){
        var num = parseInt(n);
        $("tbody tr").remove();
        scoreArr.sort(function (a,b) {
            return parseInt(a.UserScore) - parseInt(b.UserScore);
        });
        scoreLook(scoreArr, num);
    }
});
$("#scoreB").on("change", function () {
    console.log($(this).prop("checked"));
    if($(this).prop("checked")){
        var num = parseInt(n);
        $("tbody tr").remove();
        scoreArr.sort(function (a,b) {
            return parseInt(b.UserScore)-parseInt(a.UserScore);
        });
        scoreLook(scoreArr, num);
    }
});

function scoreLook(scoreArr, num) {
    scoreArr.forEach(function (val, index) {
        let i =index;
        console.log(val);
        Id = val.UserId;               //1.账号
        pwd = val.UserPassword;             //2.密码
        name = val.UserName || "";     // 4.名字
        fakName = val.UserFakename || "";  //5.昵称
        sex = val.UserSex || "";        //6.性别
        phone = val.UserPhone || "";  //7.电话
        email = val.UserEmail || ""; //8..邮箱
        score = val.UserScore || "";     //9.积分
        Spend = val.UserSpend || "";     //10.花费
        state = val.UserState;      //11.状态
        adress = val.UserAdress;   //地址数组
        // 判断
        switch (state) {
            case "true":
                userSta = "正常";
                break;
            default:
                userSta = "锁定";
                break;
        }
        var html = `<tr><th scope="row"><input type="checkbox" onclick="delA(this)"/></th><td>${i+1}</td><td  class="AI">${Id}</td><td class="cur"><div onclick="look(this)">${name}</div></td><td>${sex}</td><td>${phone}</td><td>${email}</td><td>${score}</td><td><div class="condition" onclick="adsta(this);">正常</div></td><td><div class="revise" onclick="reviUser(this);">修改</div><div class="dele" onclick="delAdmin(this);">删除</div></td></tr>`;
        if(num === 0){
            if(i<pag){
                // console.log(html);
                $("table").append(html);
            }
        }else {
            if(n*pag <= i && i <= n*pag + pag-1){
                $("table").append(html);
            }
        }
    });
    var len = user.length;
    var ye = Math.ceil(len/pag);
    if(ye <= 1){
        $(".pager").css("display","none");
    }else {
        $(".pager").css("display","block");
    }
}



