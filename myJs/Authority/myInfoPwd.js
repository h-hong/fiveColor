$(function () {
    var reg = /^[\w]{6,12}$/;
    var id, pwd, name;
    var regMyOld = false;   //保存成功条件
    var regMyNew = false;
    // get data

    pwd = localStorage.getItem("pwd");             //2.管理员密码
    // console.log(pwd);
    //
    $("#old").blur(function(){
        if( $("#old").val() && $("#old").val() === localStorage.getItem("pwd")){
            $("#old").css("border","0 solid red");
            regMyOld = true;
        } else{
            $("#old").css("border","1px solid red");
            regMyOld = false;
        }
    });
    $("#new").blur(function(){
        if($("#new").val()){
            if(reg.test($("#new").val()) && !($("#new").val() === localStorage.getItem("pwd"))){
                $("#new").css("border","0 solid red");
                regMyNew = true;
            }else{
                $("#new").val("");
                $("#new").css("border","1px solid red");
                regMyNew = false;
            }
        }else{
            $("#new").css("border","1px solid red");
            regMyNew = false;
        }
    });
    $("#confirm").focus(function () {
        if($("#new").val()){
            getConfirm();
        }else {
            $("#new").focus();
        }
    });
    function getConfirm(){
        $("#confirm").blur(function(){
            if($("#confirm").val()){
                $("#confirm").css("border","0 solid red");
            }else {
                $("#confirm").css("border","1px solid red");
            }
        });
    }
    // 修改成功
    $("#regBtn").on("click", function () {
        if(regMyOld && regMyNew && $("#confirm").val() === $("#new").val()){
            localStorage.setItem("pwd", $("#new").val());
            console.log( localStorage.getItem("pwd"));
            $("#yesModal").css("display","block");
            setTimeout(function () {
                $("#yesModal").css("display","none");
            },500)
        }else{
            $("#yesModa2").css("display","block");
            setTimeout(function () {
                $("#yesModa2").css("display","none");
            },500)
        }
    });
});