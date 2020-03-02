var n;
function getTds() {
    for(var i=0;i<Tds.length;i++){
        if(Tds[i].TdId=="Td000003"){
            n=i;
        }
    }
    $(".TdId")[0].innerHTML =Tds[n].TdId;
    $(".GoodId")[0].innerHTML =Tds[n].GoodId;
    $(".GoodName")[0].innerHTML =Tds[n].GoodName;
    $(".PtTime")[0].innerHTML =Tds[n].PtTime;
    $(".PtFinish")[0].innerHTML =Tds[n].PtFinish;
    $(".EffectiveTime")[0].innerHTML =Tds[n].EffectiveTime;
    $(".Member")[0].innerHTML =Tds[n].Member;
    $(".PtState")[0].innerHTML =Tds[n].PtState;
    $(".OrderId1")[0].innerHTML =Tds[n].OrderId1;
    $(".CstmId1")[0].innerHTML =Tds[n].CstmId1;
    $(".CstmName1")[0].innerHTML =Tds[n].CstmName1;
    $(".OrderId2")[0].innerHTML =Tds[n].OrderId2;
    $(".CstmId2")[0].innerHTML =Tds[n].CstmId2;
    $(".CstmName2")[0].innerHTML =Tds[n].CstmName2;
    $(".OrderId3")[0].innerHTML =Tds[n].OrderId3;
    $(".CstmId3")[0].innerHTML =Tds[n].CstmId3;
    $(".CstmName3")[0].innerHTML =Tds[n].CstmName3;

}
getTds();