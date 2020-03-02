var tkje=document.getElementById("example-text-input2");
var tkrs=document.getElementById("example-textarea-input2");
var ddid;
function drawBack(obj) {
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
function SaveTK() {
    orders[n].ReturnPrice=tkje.value;
    localStorage.setItem("rtpr",tkje.value);
    // $(".ReturnPrice")[0].innerHTML=orders[n].ReturnPrice;
    orders[n].ReturnReason=tkrs.value;
    localStorage.setItem("rtrs",tkrs.value);
    // $(".ReturnReason")[0].innerHTML=orders[n].ReturnReason;
    orders[n].OrderState="已退款";
    // $(".OrderState")[0].innerHTML=orders[n].OrderState;
    $('#myModa2').modal('hide');
}