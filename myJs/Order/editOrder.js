var Kdcompany=document.getElementById("example-select");
var GetterName=document.getElementById("example-text-input");
var GetterPhone=document.getElementById("GetterPhone");
var Address=document.getElementById("example-textarea-input");
// var n;
// function getOrder() {
//     for (let i = 0; i < orders.length; i++) {
//         if (orders[i].OrderId == a) {
//             n = i;
//         }
//     }
// }
var ddid;
function haha(obj) {
     ddid=$(obj).attr("name");
     console.log(ddid);
    get1();
}


var n;
function get1() {
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].OrderId == ddid) {
            n = i;
        }
    }
}
var dz;
function Save() {
    if(Kdcompany.value==1){
        orders[n].Kdcompany="中通";
        localStorage.setItem("kdgs", "中通");
        // $(".Kdcompany")[0].innerHTML=orders[n].Kdcompany;
    }else if(Kdcompany.value==2){
        orders[n].Kdcompany="圆通";
        localStorage.setItem("kdgs", "圆通");
        // $(".Kdcompany")[0].innerHTML=orders[n].Kdcompany;
    }else if(Kdcompany.value==3){
        orders[n].Kdcompany="顺丰";
        localStorage.setItem("kdgs", "顺丰");
        // $(".Kdcompany")[0].innerHTML=orders[n].Kdcompany;
    }else{
        // $(".Kdcompany")[0].innerHTML =orders[n].Kdcompany;
    }
    if(GetterName.value!=="") {
        orders[n].GetterName = GetterName.value;
        localStorage.setItem("gtnm", GetterName.value);
    }
    // $(".GetterName")[0].innerHTML=orders[n].GetterName;
    if(GetterPhone.value!=="") {
        orders[n].GetterPhone = GetterPhone.value;
        localStorage.setItem("gtph", GetterPhone.value);
    }
    if(Address.value!=="") {
        orders[n].Address= Address.value;
        localStorage.setItem("address", Address.value);
    }
    // $(".GetterPhone")[0].innerHTML=orders[n].GetterPhone;
    // dz=Address.value;
    $('#myModal').modal('hide');
    // window.open("dingdanxiangqing.html?d="+ddid+dz);
}
// var bjobj={
//     name:dz
// };
// exports=bjobj;