// var id =  localStorage.getItem("id"); // 获取到的账号；
var aUrl, name;
var  id = localStorage.getItem("Id");
// 账号是否存在  跳转
function logReg(id) {
    if(!id){
        window.location = "pageOrder/login.html";
    }
}
logReg(id);
for(let i = 0; i<adminData.length; i++) {
    // Id = adminData[i].AdminId;               //1.管理员账号
    // pwd = adminData[i].AdminPsw;             //2.管理员密码
    // lv = adminData[i].AdminLevel || "";      // 3.管理员权限等级
    // name = adminData[i].AdminName || "";     // 4.管理员名字
    // aUrl = adminData[i].AdminPicture || "";  //5.管理员头像
    // card = adminData[i].IdCard || "";        //6.证件号
    // creTime = adminData[i].CreateTime || "";  //7.创建时间
    // lastTime = adminData[i].LastLogtime || ""; //8.最近登陆时间
    // phone = adminData[i].AdminPhone || "";     //9.电话号码
    // email = adminData[i].AdminEmail || "";     //10.邮箱
    // state = adminData[i].AdminState;      //11.状态
    if(id === adminData[i].AdminId){
        localStorage.setItem("i", i);
        localStorage.setItem("pwd",adminData[i].AdminPsw);
        localStorage.setItem("lv", adminData[i].AdminLevel);
        localStorage.setItem("name", adminData[i].AdminName);
        localStorage.setItem("aUrl", adminData[i].AdminPicture);
        localStorage.setItem("card", adminData[i].IdCard);
        localStorage.setItem("creTime", adminData[i].CreateTime);
        localStorage.setItem("lastTime", adminData[i].LastLogtime);
        localStorage.setItem("phone", adminData[i].AdminPhone);
        localStorage.setItem("email",adminData[i].AdminEmail);
        localStorage.setItem("state",adminData[i].AdminState);
        localStorage.setItem("sex", adminData[i].sex);
        aUrl = localStorage.getItem("aUrl");
        name = localStorage.getItem("name");
    }
}
$("#myImage").attr("src", aUrl );
$("#myName").html(name);
// 退出
$("#logout").on("click",function () {
    localStorage.setItem("Id", "");
    logReg(localStorage.getItem("Id"));
});
// 关闭窗口
// window.onbeforeunload = function(e){
//     e.returnValue = '关闭提示';
// };
/*window.onunload = function(){
    localStorage.clear();
};*/
//判断权限显示页面
console.log(localStorage.getItem("lv"));
if (localStorage.getItem("lv") !=="1"){
    $("#activityC").parent().css("display","none");
    $("#manageC").parent().css("display","none");
}
