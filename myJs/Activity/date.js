// var promotion=[
//     {
//         "promotionID":"001",
//         "promotionName":"新春大礼",
//         "promotionCommodity":"水果类",
//         "promotionLevel":"-10%",
//     },
//     {
//         "promotionID":"002",
//         "promotionName":"粽子情 赛龙舟",
//         "promotionCommodity":"蔬菜类",
//         "promotionLevel":"-15%",
//     },
//     {
//         "promotionID":"003",
//         "promotionName":"中秋佳节",
//         "promotionCommodity":"水果类",
//         "promotionLevel":"-20%",
//     }
// ];


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
function Order(GoodName,GoodId,OrderId,CstmId,CstmPhone,CstmName,PayWay,CreateTime,PayTime,FhTime,OrderState,KdPrice,Kdcompany,OrderPrice,GetterName,GetterPhone,Address,KdId) {
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
/*活动模板
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
/*拼团模板
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
