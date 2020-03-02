/*
* 应该将最初的所有数组信息添加到localstorage
* 在其他页面去获取
*
*
*
*
* */

localStorage.setItem('GoodsArray',)

//和商品相关的数量
/*
* ---供应商处的数量----供应商处的库存量
* ---新增商品的数量----我们从供应商那里拿的数量
* ---销售数量---我们卖出的数量
* ---我们的库存量-----我们从供应商那里拿的数量-我们卖出的数量
* */

/*===============================================================================商品模板
* 属性：
* 1.++++商品ID-------Gys
* 2.++++商品名称-------Gys
* 3.++++商品类别-------Gys
* 4.商品价格
* 5.商品封面
* 6.商品详情图（待定）-----数组（应该不直接传参吧）
* 7.供应商ID
* 8.商品批次
* 9.++++库存-------Gys
* 10.销售量（已经卖出的量）
* 11.促销价(参加各类活动后的价格)
* 12.入库时间（将其添加到商品列表的时间）
* 13.状态（销售中、已售罄、库存中、促销中）--新增商品的时候默认库存中
*
* 14.商品描述
* 15.++++成本价-------Gys
* 16.快递价格-------数组对象
* 17.****购买数量****---
* 18.上架时间（将其添加到销售网站的时间）
* 19.创单量（创建订单的量，不一定成交）
* 20.退货量（创单量-销售量）
*
* 行为：
* 1.添加商品（添加到商品列表）
* 2.修改商品
* 3.删除商品
* 4.查询商品（筛选、通过ID查询、通过名称查询、状态筛选、）
* 5.商品发布（发布到销售网站）
* */
function Good(GoodType, GoodId, GoodName,
              GoodPrice, GoodCover, GoodPicture,
              GysId, GoodBatch, Stock, SaleNumber,
              DiscountPrice, StorageTime, GoodState,
              GoodDes, CostPrice, KdPrice, BuyNumber,
              ShelfTime, TotalSale, ReturnNumber) {
    this.GoodType = GoodType;
    this.GoodId = GoodId;
    this.GoodName = GoodName;
    this.GoodPrice = GoodPrice;
    this.GoodCover = GoodCover;
    this.GoodPicture = [];
    // this.GoodPicture = GoodPicture;
    this.GysId = GysId;
    this.GoodBatch = GoodBatch;
    this.Stock = Stock;
    this.SaleNumber = SaleNumber;
    this.DiscountPrice = DiscountPrice;
    this.StorageTime = StorageTime;
    this.GoodState = GoodState;
    this.GoodDes = GoodDes;
    this.CostPrice = CostPrice;
    this.KdPrice = KdPrice;
    this.BuyNumber = BuyNumber;
    this.ShelfTime = ShelfTime;
    this.TotalSale = TotalSale;
    this.ReturnNumber = ReturnNumber;
    this.addGood = function () {

    };
    this.editGood = function () {

    };
    this.deleteGood = function () {

    };
    this.checkGood = function () {

    };
    this.publishGood = function () {

    };
}
/*=======================================================================================订单模板
* 属性：
* 1.商品名称 GoodName
* 2.商品ID GoodId
* 3.订单ID OrderId
* 4.顾客账号 CstmId
* 5.顾客手机 CstmPhone
* 6.顾客姓名 CstmName
* 7.支付方式 PayWay
* 8.创建时间 CreateTime
* 9.支付时间 PayTime
* 10.发货时间 FhTime
* 11.订单状态 OrderState
* 12.快递费(点击发货获取）KdPrice
* 13.快递公司（点击发货获取）Kdcompany
* 14.订单价格 OrderPrice
* 15.邮寄联系人 GetterName
* 16.联系人手机 GetterPhone
* 17.邮寄地址 Address
* 18.快递号（点击发货获取) KdId
*
* 行为：
* 1.查看订单（全部)
* 2.编辑订单（已下单、已支付）
* 3.取消订单（已下单、已支付）
* 4.确认收货（已发货）
* 5.删除订单（已签收、已取消、已退款）
* 6.处理退款（退款处理中）
* */
function Order(GoodName,GoodId,OrderId,
               CstmId,CstmPhone,CstmName,PayWay,
               CreateTime,PayTime,FhTime,OrderState,KdPrice,
               Kdcompany,OrderPrice,GetterName,GetterPhone,Address,KdId) {
    this.GoodName=GoodName;
    this.GoodId=GoodId;
    this.OrderId=OrderId;
    this.CstmId=CstmId;
    this.CstmPhone=CstmPhone;
    this.CstmName=CstmName;
    this.PayWay=PayWay;
    this.CreateTime=CreateTime;
    this.PayTime=PayTime;
    this.FhTime=FhTime;
    this.OrderState=OrderState;
    this.KdPrice=KdPrice;
    this.Kdcompany=Kdcompany;
    this.OrderPrice=OrderPrice;
    this.GetterName=GetterName;
    this.GetterPhone=GetterPhone;
    this.Address=Address;
    this.KdId=KdId;
    this.checkOrder=function () {

    };
    this.editOrder=function () {

    };
    this.cancelOrder=function () {

    };
    this.finishOrder=function () {

    };
    this.deleteOrder=function () {

    };
    this.payBack=function () {

    };
}

var orders=[
    {
        "GoodName":"商品1",
        "GoodId":"001",
        "OrderId":"PXI100001",
        "CstmId":"001",
        "CstmPhone":"15283454745",
        "CstmName":"顾客1",
        "PayWay":"微信支付",
        "CreateTime":"2018-04-09 18:10:10",
        "PayTime":"-",
        "FhTime":"-",
        "OrderState":"已下单",
        "KdPrice":"10元",
        "Kdcompany":"圆通",
        "OrderPrice":"100元",
        "GetterName":"小红",
        "GetterPhone":"18100000000",
        "Address":"成都市成都动物园",
        "KdId":"Kd000001",
        "OrderOprate":"",
        "SendType":"寄送到家",
        "GroupId":"Td000003",
        "ReturnPrice":"-",
        "ReturnReason":"-"
    },
    {
        "GoodName":"商品1",
        "GoodId":"001",
        "OrderId":"PXI100008",
        "CstmId":"008",
        "CstmPhone":"15283454752",
        "CstmName":"顾客8",
        "PayWay":"微信支付",
        "CreateTime":"2018-04-09 18:10:10",
        "PayTime":"-",
        "FhTime":"-",
        "OrderState":"已下单",
        "KdPrice":"10元",
        "Kdcompany":"圆通",
        "OrderPrice":"100元",
        "GetterName":"小橙",
        "GetterPhone":"18100000001",
        "Address":"成都市成都动物园",
        "KdId":"Kd000001",
        "OrderOprate":"",
        "SendType":"寄送到家",
        "GroupId":"Td000003",
        "ReturnPrice":"-",
        "ReturnReason":"-"
    },
    {
        "GoodName":"商品1",
        "GoodId":"001",
        "OrderId":"PXI100009",
        "CstmId":"009",
        "CstmPhone":"15283454753",
        "CstmName":"顾客9",
        "PayWay":"微信支付",
        "CreateTime":"2018-04-09 18:10:10",
        "PayTime":"-",
        "FhTime":"-",
        "OrderState":"已下单",
        "KdPrice":"10元",
        "Kdcompany":"圆通",
        "OrderPrice":"100元",
        "GetterName":"小黄",
        "GetterPhone":"18100000002",
        "Address":"成都市成都动物园",
        "KdId":"Kd000001",
        "OrderOprate":"",
        "SendType":"寄送到家",
        "GroupId":"Td000003",
        "ReturnPrice":"-",
        "ReturnReason":"-"
    },
    {
        "GoodName":"商品2",
        "GoodId":"002",
        "OrderId":"PXI100002",
        "CstmId":"002",
        "CstmPhone":"15283454746",
        "CstmName":"顾客2",
        "PayWay":"微信支付",
        "CreateTime":"2018-04-09 18:10:10",
        "PayTime":"2018-04-09 18:10:15",
        "FhTime":"-",
        "OrderState":"已支付",
        "KdPrice":"10元",
        "Kdcompany":"圆通",
        "OrderPrice":"100元",
        "GetterName":"小绿",
        "GetterPhone":"18100000003",
        "Address":"成都市成都动物园",
        "KdId":"Kd000002",
        "OrderOprate":"",
        "SendType":"寄送到家",
        "GroupId":"-",
        "ReturnPrice":"-",
        "ReturnReason":"-"
    },
    {
        "GoodName":"商品3",
        "GoodId":"003",
        "OrderId":"PXI100003",
        "CstmId":"003",
        "CstmPhone":"15283454747",
        "CstmName":"顾客3",
        "PayWay":"微信支付",
        "CreateTime":"2018-04-09 18:10:10",
        "PayTime":"2018-04-09 18:10:15",
        "FhTime":"-",
        "OrderState":"已发货",
        "KdPrice":"10元",
        "Kdcompany":"圆通",
        "OrderPrice":"100元",
        "GetterName":"小蓝",
        "GetterPhone":"18100000004",
        "Address":"成都市成都动物园",
        "KdId":"Kd000003",
        "OrderOprate":"",
        "SendType":"寄送到家",
        "GroupId":"-",
        "ReturnPrice":"-",
        "ReturnReason":"-"
    },
    {
        "GoodName":"商品4",
        "GoodId":"004",
        "OrderId":"PXI100004",
        "CstmId":"004",
        "CstmPhone":"15283454748",
        "CstmName":"顾客4",
        "PayWay":"微信支付",
        "CreateTime":"2018-04-09 18:10:10",
        "PayTime":"2018-04-09 18:10:15",
        "FhTime":"2018-04-10 18:10:15",
        "OrderState":"退款处理中",
        "KdPrice":"10元",
        "Kdcompany":"圆通",
        "OrderPrice":"100元",
        "GetterName":"小青",
        "GetterPhone":"18100000005",
        "Address":"成都市成都动物园",
        "KdId":"Kd000004",
        "OrderOprate":"",
        "SendType":"寄送到家",
        "GroupId":"-",
        "ReturnPrice":"-",
        "ReturnReason":"-"
    },
    {
        "GoodName":"商品5",
        "GoodId":"005",
        "OrderId":"PXI100005",
        "CstmId":"005",
        "CstmPhone":"15283454749",
        "CstmName":"顾客5",
        "PayWay":"微信支付",
        "CreateTime":"2018-04-09 18:10:10",
        "PayTime":"2018-04-09 18:10:15",
        "FhTime":"2018-04-10 18:10:15",
        "OrderState":"已签收",
        "KdPrice":"10元",
        "Kdcompany":"圆通",
        "OrderPrice":"100元",
        "GetterName":"小紫",
        "GetterPhone":"18100000006",
        "Address":"成都市成都动物园",
        "KdId":"Kd000005",
        "OrderOprate":"",
        "SendType":"寄送到家",
        "GroupId":"-",
        "ReturnPrice":"-",
        "ReturnReason":"-"
    },
    {
        "GoodName":"商品6",
        "GoodId":"006",
        "OrderId":"PXI100006",
        "CstmId":"006",
        "CstmPhone":"15283454750",
        "CstmName":"顾客6",
        "PayWay":"微信支付",
        "CreateTime":"2018-04-09 18:10:10",
        "PayTime":"-",
        "FhTime":"-",
        "OrderState":"已取消",
        "KdPrice":"10元",
        "Kdcompany":"圆通",
        "OrderPrice":"100元",
        "GetterName":"龚宇杰",
        "GetterPhone":"15283454745",
        "Address":"成都市成都动物园",
        "KdId":"Kd000006",
        "OrderOprate":"",
        "SendType":"配送到站",
        "GroupId":"-",
        "ReturnPrice":"-",
        "ReturnReason":"-"
    },
    {
        "GoodName":"商品7",
        "GoodId":"007",
        "OrderId":"PXI100007",
        "CstmId":"007",
        "CstmPhone":"15283454751",
        "CstmName":"顾客7",
        "PayWay":"微信支付",
        "CreateTime":"2018-04-09 18:10:10",
        "PayTime":"2018-04-09 18:10:15",
        "FhTime":"2018-04-11 18:10:10",
        "OrderState":"已退款",
        "KdPrice":"10元",
        "Kdcompany":"圆通",
        "OrderPrice":"100元",
        "GetterName":"冯昊",
        "GetterPhone":"18100000010",
        "Address":"成都市成都动物园",
        "KdId":"Kd000007",
        "OrderOprate":"",
        "SendType":"配送到站",
        "GroupId":"-",
        "ReturnPrice":"-",
        "ReturnReason":"-"
    }
];

// var newOrder=new Order("冰红茶","001","001","001","15283454745","小宇","微信支付","2019.10.8",
//     "2019.10.9","2019.10.10","已签收","10","圆通","5","小宇","15283454745","成都","123");
// orders.push(newOrder);
// var newOrder=new Order("冰绿茶","001","001","001","15283454745","小宇","微信支付","2019.10.8",
//     "2019.10.9","2019.10.10","已签收","10","圆通","5","小宇","15283454745","成都","123");
// orders.push(newOrder);
// function getOrder() {
//     $(".GoodName")[0].innerHTML =orders[0].GoodName;
//
// }
// getOrder();
/*======================================================================团单模板
* 属性：
* 1.团单ID TdId
* 2.商品ID GoodId
* 3.商品名称 GoodName
* 4.发起拼团时间 PtTime
* 5.拼团完成时间 PtFinish
* 6.成团有效时间（小时） EffectiveTime
* 7.当前人数/成团人数 Member
* 8.拼团状态 PtState
* 9.订单ID OrderId
* 10.顾客姓名 CstmName
* 11.顾客账号 CstmId
*/
function Tds(TdId,GoodId,GoodName,PtTime,PtFinish,EffectiveTime,Member,PtState,OrderId,CstmName,CstmId) {
    this.TdId=TdId;
    this.GoodId=GoodId;
    this.GoodName=GoodName;
    this.PtTime=PtTime;
    this.PtFinish=PtFinish;
    this.EffectiveTime=EffectiveTime;
    this.Member=Member;
    this.PtState=PtState;
    this.OrderId=OrderId;
    this.CstmName=CstmName;
    this.CstmId=CstmId;
}
var Tds=[
    {
        "TdId":"Td000001",
        "GoodId":"001",
        "GoodName":"商品1",
        "PtTime":"-",
        "PtFinish":"-",
        "EffectiveTime":"24",
        "Member":"0/3",
        "PtState":"待成团",
        "OrderId1":"-",
        "CstmName1":"-",
        "CstmId1":"-",
        "OrderId2":"-",
        "CstmName2":"-",
        "CstmId2":"-",
        "OrderId3":"-",
        "CstmName3":"-",
        "CstmId3":"-"
    },
    {
        "TdId":"Td000002",
        "GoodId":"002",
        "GoodName":"商品2",
        "PtTime":"2018-04-09 18:10:10",
        "PtFinish":"-",
        "EffectiveTime":"24",
        "Member":"1/3",
        "PtState":"拼团中",
        "OrderId1":"PXI100002",
        "CstmName1":"顾客2",
        "CstmId1":"002",
        "OrderId2":"-",
        "CstmName2":"-",
        "CstmId2":"-",
        "OrderId3":"-",
        "CstmName3":"-",
        "CstmId3":"-"
    },
    {
        "TdId":"Td000003",
        "GoodId":"001",
        "GoodName":"商品1",
        "PtTime":"2018-04-09 18:10:10",
        "PtFinish":"2018-04-09 21:12:13",
        "EffectiveTime":"24",
        "Member":"3/3",
        "PtState":"拼团完成",
        "OrderId1":"PXI100001",
        "CstmName1":"顾客1",
        "CstmId1":"001",
        "OrderId2":"PXI100008",
        "CstmName2":"顾客8",
        "CstmId2":"008",
        "OrderId3":"PXI100009",
        "CstmName3":"顾客9",
        "CstmId3":"009"
    }
];

/*=====================================================================================优惠券模板
* 属性：
* 1.优惠券ID
* 2.优惠券名称
* 3.优惠券类型
* 4.商品类型
* 5.剩余份数
*/
function Coupon(YhqId,YhqName,YhqType,YhqGood,YhqNumber) {
    this.YhqId=YhqId;
    this.YhqName=YhqName;
    this.YhqType=YhqType;
    this.YhqGood=YhqGood;
    this.YhqNumber=YhqNumber;
}
/*===========================================================================================活动模板
* 属性：
* 1.活动ID
* 2.活动名称
* 3.关联商品
* 4.促销程度
*/
function promotion(promotionID,promotionName,promotionCommodity,promotionLevel) {
    this.promotionID=promotionID;
    this.promotionName=promotionName;
    this.promotionCommodity=promotionCommodity;
    this.promotionLevel=promotionLevel;
}
/*=================================================================================================拼团模板
* 属性：
* 1.商品ID
* 2.商品名称
* 3.拼团价
* 4.成团有效时间（小时）
* 5.成团人数
*/
function PinTuan(PinTuanID,PinTuanName,PinTuanrice,PinTuanTime,PinTuanNumber) {
    this.PinTuanID=PinTuanID;
    this.PinTuanName=PinTuanName;
    this.PinTuanrice=PinTuanrice;
    this.PinTuanTime=PinTuanTime;
    this.PinTuanNumber=PinTuanNumber;
}
var adminData = [
    {
        "AdminId": "admin",
        "AdminPsw": "admin",
        "AdminLevel": "1",
        "AdminName": "张雨",
        "sex": "女",
        "AdminPicture": "myImg/log.png",
        "IdCard": "510129199505098545",
        "CreateTime": "2018.02.11",
        "LastLogtime": "2018.12.11",
        "AdminPhone": "15928651444",
        "AdminEmail": "7544842555@qq.com",
        "AdminState": "true"
    },
    {
        "AdminId": "user",
        "AdminPsw": "user",
        "AdminLevel": "2",
        "AdminName": "张三",
        "sex": "男",
        "AdminPicture": "myImg/place.png",
        "IdCard": "510129199505098545",
        "CreateTime": "2018.02.11",
        "LastLogtime": "2018.12.11",
        "AdminPhone": "15928651444",
        "AdminEmail": "7544842555@qq.com",
        "AdminState": "true"
    },
    {
        "AdminId": "1113",
        "AdminPsw": "admin",
        "AdminLevel": "",
        "AdminName": "张四",
        "sex": "男",
        "AdminPicture": "myImg/place.png",
        "IdCard": "510129199505098545",
        "CreateTime": "2018.02.11",
        "LastLogtime": "2018.12.11",
        "AdminPhone": "15928651444",
        "AdminEmail": "7544842555@qq.com",
        "AdminState": "true"
    },
    {
        "AdminId": "1114",
        "AdminPsw": "admin",
        "AdminLevel": "1",
        "AdminName": "张上",
        "sex": "男",
        "AdminPicture": "myImg/place.png",
        "IdCard": "510129199505098545",
        "CreateTime": "2018.02.11",
        "LastLogtime": "2018.12.11",
        "AdminPhone": "15928651444",
        "AdminEmail": "7544842555@qq.com",
        "AdminState": "true"
    },
    {
        "AdminId": "1115",
        "AdminPsw": "admin",
        "AdminLevel": "1",
        "AdminName": "张弩",
        "sex": "男",
        "AdminPicture": "myImg/place.png",
        "IdCard": "510129199505098545",
        "CreateTime": "2018.02.11",
        "LastLogtime": "2018.12.11",
        "AdminPhone": "15928651444",
        "AdminEmail": "7544842555@qq.com",
        "AdminState": "true"
    },
    {
        "AdminId": "1116",
        "AdminPsw": "admin",
        "AdminLevel": "1",
        "AdminName": "张锚",
        "sex": "女",
        "AdminPicture": "myImg/place.png",
        "IdCard": "510129199505098545",
        "CreateTime": "2018.02.11",
        "LastLogtime": "2018.12.11",
        "AdminPhone": "15928651444",
        "AdminEmail": "7544842555@qq.com",
        "AdminState": "true"
    },
    {
        "AdminId": "1117",
        "AdminPsw": "admin",
        "AdminLevel": "2",
        "AdminName": "张嘟嘟",
        "sex": "女",
        "AdminPicture": "",
        "IdCard": "510129199505098545",
        "CreateTime": "2018.02.11",
        "LastLogtime": "2018.12.11",
        "AdminPhone": "15928651444",
        "AdminEmail": "7544842555@qq.com",
        "AdminState": "true"
    },
    {
        "AdminId": "1118",
        "AdminPsw": "admin",
        "AdminLevel": "2",
        "AdminName": "张尉",
        "sex": "女",
        "AdminPicture": "",
        "IdCard": "510129199505098545",
        "CreateTime": "2018.02.11",
        "LastLogtime": "2018.12.11",
        "AdminPhone": "15928651444",
        "AdminEmail": "7544842555@qq.com",
        "AdminState": "true"
    },
];
//---------权限列表  -----//
/*
    * 1.权限大类    id [用户管理, 订单, 商品, 活动, 优惠券]
    *
 */
var authorizationArr = [
    {
        "id": "1",
        "name": "用户管理",
        "list": [
            {
                "name": "不可见",
                "reg": "false"
            },
            {
                "name": "可读",
                "reg": "true"
            },
            {
                "name": "读写",
                "reg": "true"
            }
        ]
    },
    {
        "id": "2",
        "name": "订单",
        "list": [
            {
                "name": "退款",
                "reg": "true"
            },
            {
                "name": "查询",
                "reg": "true"
            },
            {
                "name": "取消订单",
                "reg": "true"
            },
            {
                "name": "修改地址",
                "reg": "true"
            },
            {
                "name": "发货",
                "reg": "true"
            }
        ]
    }
];
//==================================================== ===========================================权限
function authorization(nameA, nameL, reg) {
    this.nameA = nameA;
    this.nameL = nameL;
    this.reg = reg;
}
// var arr =[];
// arr.name = "n";
// arr.reg = "a";
// authorization[0].list.push(arr);
// console.log(authorization[0]);




/*
    * 用户：
    * 1.用户ID   UserId
    * 2.用户密码  UserPassword
    * 3.用户名字  UserName
    * 4.用户昵称  UserFakename
    * 5.用户性别  UserSex
    * 6.电话号码  UserPhone
    * 7.电子邮箱  UserEmail
    * 8.积分      UserScore
    * 9.历史开销，花费多少钱    UserSpend
    * 10.状态  （账户是否禁用）  UserState
    * 11.收货地址       UserAdress
    * 12.订单（所有历史订单）  UserOrder
 */
var user = [
    {
        "UserId": "1112",
        "UserPassword": "admin",
        "UserName": "张嘟嘟",
        "UserFakename": "嘟嘟",
        "UserSex": "女",
        "UserPhone": "15448555514",
        "UserEmail": "755548524@qq.com",
        "UserScore": "2100",
        "UserSpend": "5000",
        "UserState": "true",
        "UserAdress": ["四川省成都市双流","四川省成都市高新区"],
        "UserOrder": [
            {
                "goods":"食品",
                "money":"200"
            },
            {
                "goods":"家具",
                "money":"600"
            }
        ]
    },
    {
        "UserId": "1113",
        "UserPassword": "admin",
        "UserName": "张嘟",
        "UserFakename": "嘟",
        "UserSex": "女",
        "UserPhone": "15448555514",
        "UserEmail": "755548524@qq.com",
        "UserScore": "2100",
        "UserSpend": "5000",
        "UserState": "true",
        "UserAdress": ["四川省成都市双流","四川省成都市高新区"],
        "UserOrder": [
            {
                "goods":"食品",
                "money":"200"
            },
            {
                "goods":"家具",
                "money":"600"
            }
        ]
    },
    {
        "UserId": "1114",
        "UserPassword": "admin",
        "UserName": "张嘟级",
        "UserFakename": "分割",
        "UserSex": "女",
        "UserPhone": "15448555514",
        "UserEmail": "755548524@qq.com",
        "UserScore": "2100",
        "UserSpend": "5000",
        "UserState": "true",
        "UserAdress": ["四川省成都市双流","四川省成都市高新区"],
        "UserOrder": [
            {
                "goods":"食品",
                "money":"200"
            },
            {
                "goods":"家具",
                "money":"600"
            }
        ]
    },
    {
        "UserId": "1115",
        "UserPassword": "admin",
        "UserName": "张",
        "UserFakename": "丰富的",
        "UserSex": "女",
        "UserPhone": "15448555514",
        "UserEmail": "755548524@qq.com",
        "UserScore": "2100",
        "UserSpend": "5000",
        "UserState": "true",
        "UserAdress": ["四川省成都市双流","四川省成都市高新区"],
        "UserOrder": [
            {
                "goods":"食品",
                "money":"200"
            },
            {
                "goods":"家具",
                "money":"600"
            }
        ]
    },
    {
        "UserId": "1116",
        "UserPassword": "admin",
        "UserName": "苍南",
        "UserFakename": "丰富的",
        "UserSex": "女",
        "UserPhone": "15448555514",
        "UserEmail": "755548524@qq.com",
        "UserScore": "2100",
        "UserSpend": "5000",
        "UserState": "true",
        "UserAdress": ["四川省成都市双流","四川省成都市高新区"],
        "UserOrder": [
            {
                "goods":"食品",
                "money":"200"
            },
            {
                "goods":"家具",
                "money":"600"
            }
        ]
    },
    {
        "UserId": "1117",
        "UserPassword": "admin",
        "UserName": "女帝",
        "UserFakename": "丰富的",
        "UserSex": "女",
        "UserPhone": "15448555514",
        "UserEmail": "755548524@qq.com",
        "UserScore": "2100",
        "UserSpend": "5000",
        "UserState": "true",
        "UserAdress": ["四川省成都市双流","四川省成都市高新区"],
        "UserOrder": [
            {
                "goods":"食品",
                "money":"200"
            },
            {
                "goods":"家具",
                "money":"600"
            }
        ]
    }
];

