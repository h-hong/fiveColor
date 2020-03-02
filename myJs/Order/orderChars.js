var pieSall=echarts.init(document.getElementById("pie-sall"));
var orderCount=0;
var groupCount=0;
var k=0;
for(let i=0;i<orders.length;i++){
    if(orders[i].GroupId!="-"){
        groupCount++;
    }else {
        orderCount++;
    }
}
var orderTypeC=[
    {
        "orderCount":8,
        "groupCount":7,
    },
    {
        "orderCount":orderCount,
        "groupCount":groupCount,
    },
    {
        "orderCount":78,
        "groupCount":41,
    },
    {
        "orderCount":150,
        "groupCount":104,
    }
];
var GoodType=[
    {
        "fruit":28,
        "littleEat":26,
        "dailyUse":17,
    },
    {
        "fruit":20,
        "littleEat":29,
        "dailyUse":31,
    },
    {
        "fruit":88,
        "littleEat":92,
        "dailyUse":97,
    },
    {
        "fruit":300,
        "littleEat":270,
        "dailyUse":301,
    },
];
var sallDate=[
    {
      "earnMoney":20,
      "getMoney":26,
      "outMoney":100,
    },
    {
        "earnMoney":24,
        "getMoney":30,
        "outMoney":180,
    },
    {
        "earnMoney":102,
        "getMoney":174,
        "outMoney":72,
    },
    {
        "earnMoney":300,
        "getMoney":450,
        "outMoney":150,
    },
];
var option1 = {
    title : {
        text: '销售订单类型',
        x:'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        right: 'right',
        data: ['团购订单','个人订单']
    },
    series : [
        {
            name: '销售订单类型',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:orderTypeC[k].groupCount, name:'团购订单'},
                {value:orderTypeC[k].orderCount, name:'个人订单'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
pieSall.setOption(option1);
var line=echarts.init(document.getElementById("line-sall"));
var option2 = {
    title:{
        text: "盈利图"
    },
    xAxis: {
        type: 'category',
        data: ['昨日', '今日', '一周', '一月']
    },
    tooltip : {
        trigger: 'axis',
        formatter: ""
    },
    yAxis: {
        type: 'value'
    },
    legend:{
        data:["盈利","收入","支出"]
    }
    ,
    series: [{
        name:'盈利',
        type:'line',
        data:[sallDate[0].earnMoney,sallDate[1].earnMoney,sallDate[2].earnMoney,sallDate[3].earnMoney]
    },
        {
            name:'收入',
            type:'line',
            data:[sallDate[0].getMoney,sallDate[1].getMoney,sallDate[2].getMoney,sallDate[3].getMoney]
        },
        {
            name:'支出',
            type:'line',
            data:[sallDate[0].outMoney,sallDate[1].outMoney,sallDate[2].outMoney,sallDate[3].outMoney]
        },

    ]
};
line.setOption(option2);
var bar=echarts.init(document.getElementById("bar-sall"));
var option3 = {
    title:{
        text: "销量图"
    },
    xAxis: {
        type: 'category',
        data: ['昨日', '今日', '一周', '一月']
    },
    tooltip : {
        trigger: 'axis',
        formatter: ""
    },
    yAxis: {
        type: 'value'
    },
    legend:{
        data:["水果","零食","生活用品"]
    }
    ,
    series: [{
        name:'水果',
        type:'bar',
        data:[GoodType[0].fruit,GoodType[1].fruit,GoodType[2].fruit,GoodType[3].fruit]
    },
        {
            name:'零食',
            type:'bar',
            data:[GoodType[0].littleEat,GoodType[1].littleEat,GoodType[2].littleEat,GoodType[3].littleEat]
        },
        {
            name:'生活用品',
            type:'bar',
            data:[GoodType[0].dailyUse,GoodType[1].dailyUse,GoodType[2].dailyUse,GoodType[3].dailyUse]
        },

    ]
};
bar.setOption(option3);
changeDate();
function changeDate(){
    $("#selfOrder").text(orderTypeC[k].orderCount);
    $("#groupOrder").text(orderTypeC[k].groupCount);
    $("#earnMoney").text(sallDate[k].earnMoney);
    $("#getMoney").text(sallDate[k].getMoney);
    $("#outMoney").text(sallDate[k].outMoney);
    $("#fruit").text(GoodType[k].fruit);
    $("#littleEat").text(GoodType[k].littleEat);
    $("#dailyUse").text(GoodType[k].dailyUse);
}
function s(){
    k=$("select").val();
    changeDate();
    option1={
        title : {
            text: '销售订单类型',
            x:'left'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            data: ['团购订单','个人订单']
        },
        series : [
            {
                name: '销售订单类型',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:orderTypeC[k].groupCount, name:'团购订单'},
                    {value:orderTypeC[k].orderCount, name:'个人订单'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    pieSall.setOption(option1);
}
