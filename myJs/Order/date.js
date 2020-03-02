/*商品模板
* 属性：
* 1.商品ID
* 2.商品名称
* 3.商品类别
* 4.商品价格
* 5.商品封面
* 6.商品详情图（待定）
* 7.供应商ID
* 8.商品批次
* 9.库存
* 10.销售量（已经卖出的量）
* 11.优惠(参加各类活动后的价格)
* 12.入库时间（将其添加到商品列表的时间）
* 13.状态（销售中、已售罄、库存中、促销中）
* 14.商品描述
* 15.成本价
* 16.快递价格
* 17.购买数量
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
function Good(GoodId,GoodName,GoodType,
              GoodPrice,GoodCover,GoodPicture,
              GysId,GoodBatch,Stock,SaleNumber,
              DiscountPrice,StorageTime,GoodState,
              GoodDes,CostPrice,KdPrice,
              BuyNumber,ShelfTime,TotalSale,ReturnNumber) {
    this.GoodId=GoodId;
    this.GoodName=GoodName;
    this.GoodType=GoodType;
    this.GoodPrice=GoodPrice;
    this.GoodCover=GoodCover;
    this.GoodPicture=GoodPicture;
    this.GysId=GysId;
    this.GoodBatch=GoodBatch;
    this.Stock=Stock;
    this.SaleNumber=SaleNumber;
    this.DiscountPrice=DiscountPrice;
    this.StorageTime=StorageTime;
    this.GoodState=GoodState;
    this.GoodDes=GoodDes;
    this.CostPrice=CostPrice;
    this.KdPrice=KdPrice;
    this.BuyNumber=BuyNumber;
    this.ShelfTime=ShelfTime;
    this.TotalSale=TotalSale;
    this.ReturnNumber=ReturnNumber;
    this.addGood=function () {

    };
    this.editGood=function () {

    };
    this.deleteGood=function () {

    };
    this.checkGood=function () {

    };
    this.publishGood=function () {

    };
}



/*订单模板
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
/*团单模板
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



/*
    * 用户：
    * 1.用户ID
    * 2.用户密码
    * 3.用户名字
    * 4.用户昵称
    * 5.用户性别
    * 6.电话号码
    * 7.电子邮箱
    * 8.积分
    * 9.历史开销，花费多少钱
    * 10.状态  （账户是否禁用）
    * 11.收货地址
    * 12.订单（所有历史订单）
 */
function User(UserId,UserPassword,UserName,UserFakename,UserSex,
              UserPhone,UserEmail,UserScore,UserSpend,
              UserState,UserAdress,UserOrder) {
    this.UserId=UserId;
    this.UserPassword=UserPassword;
    this.UserName=UserName;
    this.UserFakename=UserFakename;
    this.UserSex=UserSex;
    this.UserPhone=UserPhone;
    this.UserEmail=UserEmail;
    this.UserScore=UserScore;
    this.UserSpend=UserSpend;
    this.UserState=UserState;
    this.UserAdress=UserAdress;
    this.UserOrder=UserOrder;
}
/*供应商模板
* 属性：
* 1.供应商编码
* 2.供应商名称
* 3.公司地址
* 4.联系电话
* 5.联系人
* 6.单位网址
* 7.供应商类型
*
* 行为：
* 1.修改供应商
* 2.修改商品
* 3.删除供应商
* 4.删除商品
* 5.添加供应商
* 6.添加商品
* */
function Gys(GysId,GysName,GysAdress,GysPhone,GysMan,GysNet,GysType) {
    this.GysId=GysId;
    this.GysName=GysName;
    this.GysAdress=GysAdress;
    this.GysPhone=GysPhone;
    this.GysMan=GysMan;
    this.GysNet=GysNet;
    this.GysType=GysType;
    this.GysGoods=[];
    this.editGys=function () {

    };
    this.editGood=function () {

    };
    this.deleteGys=function () {

    };
    this.deleteGood=function () {

    };
    this.addGys=function () {

    };
    this.addGood=function () {

    };
}
/*优惠券模板
* 属性：
* 1.面额
* 2.券类型
* 3.使用条件
* 4.活动条件
* 5.商品条件
*/
function Yhq(YhqMiane,YhqType,YhqCondition,YhqHdcondition,YhqGoodcondition) {
    this.YhqMiane=YhqMiane;
    this.YhqType=YhqType;
    this.YhqCondition=YhqCondition;
    this.YhqHdcondition=YhqHdcondition;
    this.YhqGoodcondition=YhqGoodcondition;
}
/*管理员模板
* 属性：
* 1.管理员账号
* 2.管理员密码
* 3.管理员权限等级
* 4.管理员名字
* 5.管理员头像
* 6.证件号
* 7.创建时间
* 8.最近登陆时间
* 9.电话号码
* 10.邮箱
* 11.状态

* */
function Admin(AdminId,AdminPsw,AdminLevel,AdminName,AdminPicture,IdCard,
               CreateTime,LastLogtime,AdminPhone,AdminEmail,AdminState) {
    this.AdminId = AdminId;
    this.AdminPsw = AdminPsw;
    this.AdminLevel = AdminLevel;
    this.AdminName = AdminName;
    this.AdminPicture = AdminPicture;
    this.IdCard = IdCard;
    this.CreateTime = CreateTime;
    this.LastLogtime = LastLogtime;
    this.AdminPhone = AdminPhone;
    this.AdminEmail = AdminEmail;
    this.AdminState = AdminState;
}

