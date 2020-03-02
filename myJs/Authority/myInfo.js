(function($) {
    var reg1 = /^[\u4e00-\u9fa5]{2,6}$/;
    var regexp= /^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;
    var reg2 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    var regEm = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var id, pwd, lv, name, aUrl, card,phone, email,sex, i;
    var regMy = true;   //保存成功条件
    // get data
    // console.log(localStorage.getItem("Id"));  //获取浏览器储存
    i = localStorage.getItem("i");    //下标
    id = localStorage.getItem("Id");               //1.管理员账号
    pwd = localStorage.getItem("pwd");             //2.管理员密码
    lv = localStorage.getItem("lv") || "";      // 3.管理员权限等级
    name = localStorage.getItem("name") || "";     // 4.管理员名字
    aUrl = localStorage.getItem("aUrl") || "";  //5.管理员头像
    card = localStorage.getItem("card") || "";        //6.证件号
    phone = localStorage.getItem("phone") || "";     //9.电话号码
    email = localStorage.getItem("email") || "";     //10.邮箱
    sex = localStorage.getItem("sex") || "";
    console.log(sex);
    if(!sex){
        sex = "男";
    }
    if(sex === "男"){
        $("#userSex input").eq(0).prop("checked","checked");
    }else{
        $("#userSex input").eq(1).prop("checked","checked");
    }
    //加载页面
    $(".imgFile img").attr("src", "../"+aUrl); //显示图片地址
    $("#lv").html(getLv(lv));
    $("#userId").val(id);
    $("#userName").val(name);
    $("#phone").val(phone);
    $("#idCard").val(card);
    $("#email").val(email);
    //获取上传图片
    $("#file").on("change",function () {
        var file = this.files[0];
        if (window.FileReader) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            //监听文件读取结束后事件
            reader.onloadend = function () {
                   //e.target.result就是最后的路径地址
                //console.log(localStorage.getItem("aUrl"));
                aUrl = "myImg/"+file.name;
                $("#imgChange").attr("src", "../"+aUrl);
            };
        }
    });

    $("#myBtn").on("click", function(){
        $("#file").click();
    });
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
    // 确定修改 保存
    $("#conserveMy").on("click",function () {
        if(regMy){
            name = $("#userName").val();
            console.log(name);
            phone = $("#phone").val();
            card = $("#idCard").val();
            email = $("#email").val();
            $("#userSex input").each(function () {
                if($(this).prop("checked")){
                    // console.log($(this).val());
                    sex = $(this).val();
                }
            });
            if(reg1.test(name)){    //姓名判断
                localStorage.setItem("name",name);
                if(regexp.test(phone)){    //电话判断
                    localStorage.setItem("phone", phone);
                    if(reg2.test(card)){    //身份证判断
                        localStorage.setItem("card", card);
                        if(regEm.test(email)){     //邮箱判断
                            localStorage.setItem("email", email);
                            localStorage.setItem("aUrl",  aUrl);
                            localStorage.setItem("sex",  sex);
                            $("#myImage", window.parent.document).attr("src", aUrl);
                            $("#myName", window.parent.document).html(name);
                            yesModa();
                        }else{
                            $("#email").val("");
                            $("#email").attr("placeholder","输入错误！！！");
                        }
                    }else{
                        $("#idCard").val("");
                        $("#idCard").attr("placeholder","输入错误！！！");
                    }
                }else{
                    $("#phone").val("");
                    $("#phone").attr("placeholder","输入错误！！！");
                }
            }else{
                $("#userName").val("");
                $("#userName").attr("placeholder","输入错误！！！");
            }
        }
    });
    function yesModa() {
        $("#yesModal").css("display","block");
        setTimeout(function () {
            $("#yesModal").css("display","none");
        },1000)
    }
})(jQuery);
