var app = getApp();
var WxParse = require('../../lib/wxParse/wxParse.js');
var util = require('../../utils/util.js');
var api = require('../../config/api.js');

Page({
    data: {
        id: 0,
        posts: {},
        picList: [],
        attribute: [],
        issueList: [],
        comment: [],
        brand: {},
        specificationList: [],
        productList: [],
        postComments: [],
        cartGoodsCount: 0,
        userHasCollect: 0,
        number: 1,
        openAttr: false,
        noCollectImage: "/static/images/icon_collect.png",
        hasCollectImage: "/static/images/icon_collect_checked.png",
        collectBackImage: "/static/images/icon_collect.png"
    },
          

    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        this.setData({
            // id: parseInt(options.id)
            // id: 1181000
        });
       
    },
    onReady: function () {
        // 页面渲染完成

    },
    onShow: function () {
        // 页面显示

    },
    onHide: function () {
        // 页面隐藏

    },
    onUnload: function () {
        // 页面关闭

    },
    switchAttrPop: function () {
        if (this.data.openAttr == false) {
            this.setData({
                openAttr: !this.data.openAttr
            });
        }
    },
    
})