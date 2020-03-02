var n = 0;     //分页数
var pag = 5;  //每页显示多少条
var adLv;   //超级/普通管理员
var adminSta;  //状态
var reg1 = /^[\u4e00-\u9fa5]{2,6}$/;
var reg2 = /^[\w]{3,6}$/;
var Id, pwd, lv, name, aUrl, card, creTime, lastTime, phone, email, state,sex;
var nowLv = localStorage.getItem("lv");
console.log("nowLv");
function getNowLv() {
    if(nowLv !== "1"){
        return false;
    }else{
        return true;
    }
}
function getAdmin(data, n){
    $("tbody tr").remove();
    var num = parseInt(n);
    for(let i = 0; i<data.length; i++){
        Id = data[i].AdminId;               //1.管理员账号
        pwd = data[i].AdminPsw;             //2.管理员密码
        lv = data[i].AdminLevel || "";      // 3.管理员权限等级
        name = data[i].AdminName || "";     // 4.管理员名字
        aUrl = data[i].AdminPicture || "";  //5.管理员头像
        card = data[i].IdCard || "";        //6.证件号
        creTime = data[i].CreateTime || "";  //7.创建时间
        lastTime = data[i].LastLogtime || ""; //8.最近登陆时间
        phone = data[i].AdminPhone || "";     //9.电话号码
        email = data[i].AdminEmail || "";     //10.邮箱
        state= data[i].AdminState;      //11.状态
        adLv = getLv(lv);
        // 判断
        switch (state) {
            case "true":
                adminSta = "正常";
                break;
            default:
                adminSta = "锁定";
                break;
        }
        var html = `<tr><th scope="row"><input type="checkbox" onclick="delA(this)"/></th><td>${i+1}</td><td class="cur"><div onclick="look(this)">${name}</div></td><td class="AI">${Id}</td><td>${phone}</td><td>${adLv}</td><td>${creTime}</td><td>${lastTime}</td><td><div class="condition" onclick="adsta(this);">正常</div></td><td><div class="revise" onclick="reviAdmin(this);">修改</div><div class="dele" onclick="delAdmin(this);">删除</div></td></tr>`;
        if(num === 0){
            if(i<pag){
                // console.log(html);
                $("table").append(html);
            }
        }else {
            if(num*pag <= i && i <= num*pag + pag-1){
                $("table").append(html);
            }
        }
    }
    var len = adminData.length;
    var ye = Math.ceil(len/pag);
    if(ye <= 1){
        $(".pager").css("display","none");
    }else {
        $(".pager").css("display","block");
    }
}
getAdmin(adminData, n);
//判断权限
function getLv(lv) {
    switch (lv) {
        case "1":
            return "超级管理员";
        case "2":
            return "普通管理员";
        default:
            return "";
    }
}
//页面显示页数
$("#getNumber").on("change",function () {
    n = 0;
    pag= $("#getNumber").val();
    getAdmin(adminData, n);
});
//翻页
var falge = true;
function getTop(){
    if(falge){
        if(n <=0){
            getAdmin(adminData, n);
        }else {
            falge = false;
            n--;
            getAdmin(adminData, n);
            getFalge()
        }
    }
}
function getLast(){
    if(falge){
        if(n >= Math.ceil(adminData.length/pag) - 1){
            getAdmin(adminData, n);
        }else {
            falge = false;
            n++;
            getAdmin(adminData, n);
            getFalge()
        }
    }
}
function getFalge(){
    setTimeout(function () {
        falge = true;
    }, 500)
}
//锁定管理员
function adsta(obj) {
    getNowLv();
    if(getNowLv()){
        var id = $(obj).parent().parent().children("td").eq(2).html();
        if(id === localStorage.getItem("Id")){
            return;
        }else {
            let admId = $(obj).parent().parent().children(".AI").text();
            console.log(admId);
            if ($(obj).html() === "正常") {
                $(obj).html("锁定");
                $(obj).css("color", "red");
                setDataState(admId, "false");
            } else {
                $(obj).html("正常");
                $(obj).css("color", "rgba(45, 142, 255, 0.71)");
                setDataState(admId, "true");
            }
        }
    }else{
        alert("没有当前权限");
    }
}
//修改管理
function reviAdmin(obj){
    getNowLv();
    if(getNowLv()){
        $("#exampleModal").css("display","block");
        let admId = $(obj).parent().parent().children(".AI").text();
        // console.log(admId);
        let id = $("#idModal");  //页面账号
        let name = $("#nameModal");  //姓名
        let pwd = $("#pwdModal");  //密码
        let lv = $("#lvModal");  //权限
        console.log(admId);
        console.log(localStorage.getItem("Id"));
        if(admId === localStorage.getItem("Id")){
            $("#lvModal").attr("disabled", true);
            $("#lvModal").css("backgroundColor", "#ccc");
        }
        //页面显示
        for(let i = 0; i<adminData.length; i++){
            if(adminData[i].AdminId === admId){
                // console.log(adminData[i].AdminState);
                id.val(adminData[i].AdminId);
                name.val(adminData[i].AdminName);
                pwd.val(adminData[i].AdminPsw);
                if(adminData[i].AdminLevel){   //存在权限
                    lv.val(adminData[i].AdminLevel);
                }else{
                    lv.val(0);
                }
                break;
            }
            // console.log(adminData[i].AdminState);
        }
    }else{
        alert("没有当前权限");
    }
}
//确认修改
$("#trueExample").on("click", function () {
    let id = $("#idModal").val();
    let name = $("#nameModal").val();
    let pwd = $("#pwdModal").val();
    let lv = $("#lvModal").val();
    // 调用更新modal账号数据
    var listI = setModalData(id, name, pwd, lv);
    //更新列表
    newList(id , listI);
    // alert("修改成功");
    yesModa();
});
//查询
$("#selBtn").on("click",function () {
    let nameSel = $("#selName").val();
    if (nameSel) {
        for(let i = 0; i<adminData.length; i++) {
            Id = adminData[i].AdminId;               //1.管理员账号
            pwd = adminData[i].AdminPsw;             //2.管理员密码
            lv = adminData[i].AdminLevel || "";      // 3.管理员权限等级
            name = adminData[i].AdminName || "";     // 4.管理员名字
            aUrl = adminData[i].AdminPicture || "";  //5.管理员头像
            card = adminData[i].IdCard || "";        //6.证件号
            creTime = adminData[i].CreateTime || "";  //7.创建时间
            lastTime = adminData[i].LastLogtime || ""; //8.最近登陆时间
            phone = adminData[i].AdminPhone || "";     //9.电话号码
            email = adminData[i].AdminEmail || "";     //10.邮箱
            state = adminData[i].AdminState;      //11.状态
            adLv = getLv(lv);
            // 判断
            switch (state) {
                case "true":
                    adminSta = "正常";
                    break;
                default:
                    adminSta = "锁定";
                    break;
            }
            if (nameSel === name) {
                $("tbody tr").remove();
                var html = `<tr><th scope="row"><input type="checkbox" onclick="delA(this)"/></th><td>${i+1}</td><td class="cur"><div onclick="look(this)">${name}</div></td><td class="AI">${Id}</td><td>${phone}</td><td>${adLv}</td><td>${creTime}</td><td>${lastTime}</td><td><div class="condition" onclick="adsta(this);">正常</div></td><td><div class="revise" onclick="reviAdmin(this);">修改</div><div class="dele" onclick="delAdmin(this);">删除</div></td></tr>`;
                $("table").append(html);
                break;
            }
        }
        return;
    }
    getAdmin(adminData, n)
});
//取消修改
$("#falseExample").on("click", function () {
    $("#exampleModal").css("display","none");
});
//增加
$("#btn_add").on("click",function () {
    getNowLv();
    if(getNowLv()){
        $("#addModal").css("display","block");
        var arrId = [];
        for(let i = 0; i < adminData.length; i++){
            arrId.push(adminData[i].AdminId);
        }
        arrId.sort();
        $("#addIdModal").val(parseInt(arrId[arrId.length-1])+1);
        // console.log(arrId.sort());
    }else{
        alert("没有当前权限");
    }
});
//确认添加
$("#trueAdd").on("click", function () {
    let id = $("#addIdModal").val();
    let name = $("#addNameModal").val();
    let pwd = $("#addPwdModal").val();
    let lv = $("#addLvModal").val();
    let myDate = new Date();
    let time = myDate.getFullYear()+"."+parseInt(myDate.getMonth()+1)+"."+myDate.getDate();
    let state = "true";
    let picture, idCard, creTime, lastTime, phone,  email;
    // 调用更新modal账号数据
    if(reg1.test(name)){
        if(reg2.test(pwd)){
            var newAdmin = new setAddData(id, pwd, lv, name, picture, idCard, time, lastTime,phone, email, state);
            adminData.push(newAdmin);
            // console.log(adminData);
            $("#addModal").css("display","none");
            getAdmin(adminData, n);
            $("#addNameModal").val("");
            $("#addPwdModal").val("");
            $("#addLvModal").val("0");
            // alert("成功");
            yesModa();
        }else{
            $("#addPwdModal").val("");
        }
    }else {
        $("#addNameModal").val("");
    }

});
//取消添加
$("#falseAdd").on("click", function () {
    $("#addModal").css("display","none");
});
//删除
function delAdmin(obj) {
    getNowLv();
    if(getNowLv()){
        var id = $(obj).parent().parent().children("td").eq(2).html();
        if(id === localStorage.getItem("Id")){
            return;
        }else{
            for(let i = 0; i< adminData.length; i++){
                if(id === adminData[i].AdminId){
                    adminData.splice(i, 1);  //删除数据
                    getAdmin(adminData, n);
                }
            }
            $(obj).parent().parent().remove();
        }
    }else{
        alert("没有当前权限");
    }
}
//批量选择
$("#allCheck").on("click",function () {
    if ($(this).prop("checked")) {      //返回checked的值
        var trL = $("tbody tr");
        for(let i = 0; i < trL.length; i++){
            // console.log($(trL[i]).children("td").eq(2).text());
            // console.log(adminData[localStorage.getItem("i")].AdminId);
            if($(trL[i]).children("td").eq(2).text() === adminData[localStorage.getItem("i")].AdminId){
                continue;
            }else{
                $(trL[i]).addClass("bgc");
                $(trL[i]).children("th").children("input:checkbox").prop("checked", true);
            }
        }
    } else {
        $("tbody tr").removeClass("bgc");
        $("tbody tr input:checkbox").prop("checked", false);
    }
});
function delA(obj){
    console.log($(obj).parent().parent().children("td").eq(2).html());
    console.log(localStorage.getItem("Id"));
    if($(obj).parent().parent().children("td").eq(2).html() === localStorage.getItem("Id")){
        $(obj).prop("checked", false);
        return;
    }else{
        if ($(obj).prop("checked")) {
            $(obj).parent().parent().addClass("bgc");
        }else {
            $(obj).parent().parent().removeClass("bgc");
        }
    }
}
//批量删除
$("#btn_delete").on("click",function () {
    getNowLv();
    if(getNowLv()){
        var arrDel = [];  //要删除的账号
        let tr =  $("tbody tr");
        $("#allCheck").attr("checked", false);
        for(let i = 0; i < tr.length; i++){
            if($(tr[i]).attr("class") === "bgc"){
                arrDel.push($(tr[i]).children("td").eq(2).text());   //获取删除的账号
                console.log(arrDel);
                $(tr[i]).remove();
            }
        }
        setDel(arrDel); //删除
        getAdmin(adminData, n);
    }else{
        alert("没有当前权限");
    }
});
function setDel(arrDel) {
    getNowLv();
    if(getNowLv()){
        for(let i = 0; i < arrDel.length; i++){
            for(let j = 0; j < adminData.length; j++){
                if(arrDel[i] === adminData[j].AdminId){
                    adminData.splice(j, 1);
                    console.log(adminData);
                }
            }
        }
    }else{
        alert("没有当前权限");
    }
}
// 更新账号状态数据
function setDataState(admId, state){
    for(let i = 0; i<adminData.length; i++){
        if(adminData[i].AdminId === admId){
            // console.log(adminData[i].AdminState);
            adminData[i].AdminState = state;
            break;
        }
        // console.log(adminData[i].AdminState);
    }
}
// 更新modal账号数据
function setModalData(id, name, pwd, lv) {
    for(let i = 0; i<adminData.length; i++){
        if(adminData[i].AdminId === id){
            adminData[i].AdminName = name;
            adminData[i].AdminPsw = pwd ;
            if(lv === "0"){
                adminData[i].AdminLevel = "";
            }else {
                adminData[i].AdminLevel = lv;
            }
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
            $(ids[i]).parent().children("td").eq(1).children().html(adminData[listI].AdminName);
            $(ids[i]).parent().children("td").eq(4).html(getLv(adminData[listI].AdminLevel));
        }
    }
}
function look(obj) {
    var thisId = $(obj).parent().parent().children("td").eq(2).html();
    var arrAdm = ["姓名:","权限:", "账号:", "密码:", "性别:",  "电话:", "电子邮箱:","状态:", "创建时间:"];
    for(let i = 0; i<adminData.length; i++){
        if(adminData[i].AdminId === thisId){
            Id = adminData[i].AdminId;               //1.账号
            pwd = adminData[i].AdminPsw;             //2.密码
            name = adminData[i].AdminName;     // 4.名字
            lv = adminData[i].AdminLevel || "";      // 3.管理员权限等级
            var getL = getLv(lv);
            sex = adminData[i].sex || "";        //6.性别
            phone = adminData[i].AdminPhone || "";  //7.电话
            email =adminData[i].AdminEmail || ""; //8..邮箱
            state = adminData[i].AdminState || "";      //11.状态
            lastTime = adminData[i].CreateTime;
            // 判断
            switch (state) {
                case "true":
                    adminSta = "正常";
                    break;
                default:
                    adminSta = "锁定";
                    break;
            }
            var addArr = [ name, Id , getL , pwd, sex, phone, email, adminSta, lastTime];
            $("#exampleModa2").css("display", "block");
            for (let i = 0; i < addArr.length; i++){
                var li = `<li><p><span>${arrAdm[i]}</span> ${addArr[i]}</p></li>`;
                $("#userP").append(li);
            }
        }
    }

}
$("#trueLook").on("click", function () {
    $("#userP").empty();
    $("#exampleModa2").css("display", "none");
});

//修改成功
function yesModa() {
    $("#yesModal").css("display","block");
    setTimeout(function () {
        $("#yesModal").css("display","none");
    },1000)
}
//添加账号
/**
 *
 * @param {string} id 管理员账号
 * @param {string} pwd   密码
 * @param {string} lv   权限等级
 * @param {string} name  姓名
 * @param {string} picture 头像地址
 * @param {string} idCard 身份证号
 * @param {string} creTime 注册时间
 * @param {string} lastTime 最后登陆
 * @param {string} phone 电话号码
 * @param {string} email 邮箱
 * @param {string} state 状态
 * @constructor
 */
function setAddData(id, pwd, lv,name,picture, idCard,creTime, lastTime,phone,email, state) {
    this.AdminId = id;
    this.AdminPsw = pwd;
    this.AdminLevel = lv;
    this.AdminName = name;
    this.AdminPicture = picture;
    this.IdCard = idCard;
    this.CreateTime = creTime;
    this.LastLogtime = lastTime;
    this.AdminPhone = phone;
    this.AdminEmail = email;
    this.AdminState = state;
}




