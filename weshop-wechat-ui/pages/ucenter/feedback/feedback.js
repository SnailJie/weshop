var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');


var app = getApp();

Page({
    data: {
        array: ['请选择反馈类型', '产品投诉', '业务合作', '功能建议', '其他'],
        index: 0,
        feedbackType: '',
        feedbackContent: '',
        concat: ""
    },
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            feedbackType: this.data.array[e.detail.value],
            index: e.detail.value
        })
    },
    onLoad: function (options) {},
    onReady: function () {},
    onShow: function () {},
    onHide: function () {
        // 页面隐藏
    },
    setFeedBackContent(e) {
        this.setData({
            feedbackContent: e.detail.value
        })
    },
    setConcat(e) {
        this.setData({
            concat: e.detail.value
        })
    },
    setFeedbackType(e) {
        this.setData({
            feedbackType: e.detail.value
        })
    },
    submit: function () {
    
        const submitDate = {
            msgType: this.data.feedbackType,
            msgContent: this.data.feedbackContent,
            userConcat: this.data.concat ==='' ? 'DEFAULT':this.data.concat
        }
        util.post(api.FeedBack, submitDate).then(function (res) {
            wx.showToast({
                title: '我们收到啦～',
                icon: 'success',
                duration: 2000
            });
        });
        this.navigateToPostPage()
    },
    navigateToPostPage() {
        wx.reLaunch({
            url: '/pages/ucenter/index/index',
        })
    },
    onUnload: function () {
        // 页面关闭
    }
})
