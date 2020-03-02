
function checkMes(){
    var loginUseName=$("#username").val();
    var loginPwd=$("#password").val();
    for(let i=0;i<adminData.length;i++){
        if(adminData[i].AdminId==loginUseName){
            if(adminData[i].AdminPsw==loginPwd){
                $("#success").css("display","");
                localStorage.setItem("Id", adminData[i].AdminId);
                setTimeout(function(){
                    window.location.href='../index.html';},1000);
                break;
            }
        }
        if(i==adminData.length-1){
            $("#fail").css("display","");
            setTimeout(function () {
                $("#fail").css("display","none");
            },2000);
        }
    }
}