// var orders=[];
// var newOrder=new Order("冰红茶","001","001","001","15283454745","小宇","微信支付","2019.10.8",
//     "2019.10.9","2019.10.10","已签收","10","圆通","5","小宇","15283454745","成都","123");
// console.log(newOrder);
// orders.push(newOrder);
var a;
var b;
var n;
// var bjobj=require("./bianjidingdan.js");
// console.log(bjobj.name);
window.onload = function () {
    // let url = location.search.substring(1).split('d=');
    // // let dz = location.search.substring(1).split('d=');
    // function goHash(hash) {
    //     return hash;
    // }
    // a=goHash(url[1]);
    // // b=goHash(dz[1]);
    // console.log(a.slice(0,9));
    // // console.log(b);
    a=localStorage.getItem("gyj");



    getOrder();
function getOrder() {
    for(let i=0;i<orders.length;i++){
        if(orders[i].OrderId==a||orders[i].OrderId==a.slice(0,9)){
             n=i;
        }
    }
    $(".GoodName")[0].innerHTML =orders[n].GoodName;
    $(".CstmName")[0].innerHTML =orders[n].CstmName;
    $(".OrderState")[0].innerHTML =orders[n].OrderState;
    $(".OrderPrice")[0].innerHTML =orders[n].OrderPrice;
    $(".OrderPrice")[1].innerHTML =orders[n].OrderPrice;
    $(".GoodId")[0].innerHTML =orders[n].GoodId;
    $(".PayWay")[0].innerHTML =orders[n].PayWay;
    $(".KdPrice")[0].innerHTML =orders[n].KdPrice;
    $(".GetterName")[0].innerHTML =orders[n].GetterName;
    $(".OrderId")[0].innerHTML =orders[n].OrderId;
    $(".OrderId")[1].innerHTML =orders[n].OrderId+n;
    $(".OrderId")[2].innerHTML =orders[n].OrderId+n+n;
    $(".CreateTime")[0].innerHTML =orders[n].CreateTime;
    $(".Kdcompany")[0].innerHTML =orders[n].Kdcompany;
    $(".GetterPhone")[0].innerHTML =orders[n].GetterPhone;
    $(".CstmId")[0].innerHTML =orders[n].CstmId;
    $(".PayTime")[0].innerHTML =orders[n].PayTime;
    $(".Address")[0].innerHTML =orders[n].Address;
    $(".CstmPhone")[0].innerHTML =orders[n].CstmPhone;
    $(".FhTime")[0].innerHTML =orders[n].FhTime;
    $(".KdId")[0].innerHTML =orders[n].KdId;
    $(".SendType")[0].innerHTML =orders[n].SendType;
    $(".GroupId")[0].innerHTML =orders[n].GroupId;
    $(".ReturnPrice")[0].innerHTML =orders[n].ReturnPrice;
    $(".ReturnReason")[0].innerHTML =orders[n].ReturnReason;
    document.getElementsByClassName("Kdcompany")[0].innerHTML=localStorage.getItem("kdgs");
    document.getElementsByClassName("GetterName")[0].innerHTML=localStorage.getItem("gtnm");
    document.getElementsByClassName("GetterPhone")[0].innerHTML=localStorage.getItem("gtph");
    document.getElementsByClassName("Address")[0].innerHTML=localStorage.getItem("address");
    document.getElementsByClassName("ReturnPrice")[0].innerHTML=localStorage.getItem("rtpr");
    document.getElementsByClassName("ReturnReason")[0].innerHTML=localStorage.getItem("rtrs");
}
};
function back(){
    window.location.href="orderList.html";
}