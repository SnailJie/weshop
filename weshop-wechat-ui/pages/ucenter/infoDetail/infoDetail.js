var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var app = getApp();
Page({
    data: {
        id: 0,
        familyRole: '',
        childAge: '',
        childSchool: '',
        nickName: '',
        wechat: '',
        familyRoleIndex: 0,
        familyRoleOptions: ['孩子美丽的妈妈', '孩子帅气的爸爸', '孩子慈祥的爷爷', '孩子慈祥的奶奶'],
    },
    setFamilyRole: function (e) {
        this.setData({
            familyRoleIndex: e.detail.value
        });
    },
    setChildAge: function (e) {
        this.setData({
            childAge: e.detail.value
        });
    },
    setNickName: function (e) {
        console.log('---nickName-')
        console.log(e.detail.value)
        this.setData({
            nickName: e.detail.value
        });
    },
    setChildSchool: function (e) {
        this.setData({
            childSchool: e.detail.value
        });
    },
    setWechat: function (e) {
        this.setData({
            wechat: e.detail.value
        });
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        let that = this;
        let data = null;
        util.request(api.UserInfoQueryDetail).then((res) => {
            if (res.success) {
                console.log("res.data")
                console.log(res.data)
                that.setData({
                    familyRole: res.data.familyRole,
                    childAge: res.data.childAge,
                    childSchool: res.data.childSchool,
                    nickName: res.data.nickname,
                    wechat: res.data.wechat,
                    familyRoleIndex: Number(res.data.familyRole),
                })
            }
        });
    },
    onReady: function () {

    },
    saveUserInfo() {
        console.log('--submitData')
        const submitdata = {
            childAge: this.data.childAge,
            childSchool: this.data.childSchool,
            nickname: this.data.nickName,
            wechat: this.data.wechat,
            familyRole: this.data.familyRoleIndex
        }
        console.log(submitdata)
        
        let that = this;
        util.request(api.UserInfoModify, submitdata, 'POST').then((res)=> {
          console.log("res .userInfo")
          console.log(res)
          if(res.success){
              let newUserInfo =  app.globalData.userInfo;
              newUserInfo.childAge= this.data.childAge;
              newUserInfo.childSchool= this.data.childSchool;
              newUserInfo.nickname= this.data.nickName;
              newUserInfo.wechat= this.data.wechat;
              app.globalData.userInfo= newUserInfo;
              console.log("app.global.userInfo")
              console.log(app.globalData.userInfo)
          }
        });
        this.navigateToPostPage()
    },
    navigateToPostPage() {
      wx.reLaunch({
          url: '/pages/ucenter/index/index',
      })
  },
    onShow: function () {
        // 页面显示

    },
    onHide: function () {
        // 页面隐藏

    },
    onUnload: function () {
        // 页面关闭

    }
})
