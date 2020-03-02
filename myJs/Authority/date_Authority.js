var adminData = [
    {
        "AdminId": "10010",
        "AdminPsw": "10010",
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
        "AdminId": "10086",
        "AdminPsw": "10086",
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
        "UserScore": "2200",
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
        "UserScore": "2500",
        "UserSpend": "48880",
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
        "UserScore": "3010",
        "UserSpend": "1040",
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
        "UserScore": "1472",
        "UserSpend": "205",
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
        "UserScore": "447",
        "UserSpend": "9550",
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
        "UserScore": "7445",
        "UserSpend": "124",
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
