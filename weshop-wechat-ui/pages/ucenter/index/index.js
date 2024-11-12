const util = require('../../../utils/util.js');
const api = require('../../../config/api.js');
const user = require('../../../services/user.js');
const app = getApp();

Page({
    data: {
        userInfo: {},
        showLoginDialog: false,
        isModalVisible: false
    },
    onLoad: function (options) {
        let that = this;
        util.request(api.UserInfoQueryDetail).then((res) => {
            if (res.success) {
                console.log("res.data")
                console.log(res.data)
                that.setData({
                    userInfo: res.data
                })
                app.globalData.userInfo = res.data
                //存储用户信息
                wx.setStorageSync('userInfo', JSON.stringify(res.data));
                try {
                    app.globalData.userInfo = res.data;
                } catch (e) {
                    console.log("启动异常")
                    console.log(e);
                }
            }
        });
    },
    onReady: function () {
        console.log(" on onReady userInfo begin")
    },
    onShow: function () {
        // 设置用户信息
        console.log(" on show userInfo begin")
        const userInfoDetail = JSON.parse(wx.getStorageSync('userInfo'));
        console.log(" on show userInfo")
        console.log(userInfoDetail)
        this.setData({
            userInfo: userInfoDetail
        });
    },
    onHide: function () {
        // 页面隐藏

    },
    onUnload: function () {
        // 页面关闭
    },

    onUserInfoClick: function () {
        if (wx.getStorageSync('token')) {

        } else {
            this.showLoginDialog();
        }
    },

    showLoginDialog() {
        this.setData({
            showLoginDialog: true
        })
    },

    onCloseLoginDialog() {
        this.setData({
            showLoginDialog: false
        })
    },

    onDialogBody() {
        // 阻止冒泡
    },

    onOrderInfoClick: function (event) {
        wx.navigateTo({
            url: '/pages/ucenter/order/order',
        })
    },
    onSectionItemClick: function (event) {
    },

})
