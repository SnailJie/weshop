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
      console.log( e.detail.value)
      this.setData({
        nickName: e.detail.value
      });
    },
    setChildSchool: function (e) {
      this.setData({
        childSchool: e.detail.value
      });
    },
    setinputWechat: function (e) {
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
                  nickName: res.data.nickName,
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
          familyRole: this.data.familyRole,
          childAge: this.data.childAge,
          childSchool: this.data.childSchool,
          nickName: this.data.nickName,
          wechat: this.data.wechat,
          familyRole: this.data.familyRoleIndex
        }
        console.log(submitdata)
        // let address = this.data.userInfo;
        // if (nickName == '') {
        //     util.showErrorToast('请输入昵称');
        //     return false;
        // }
        // if (familyRole == '') {
        //     util.showErrorToast('请输入家庭角色');
        //     return false;
        // }
        // if (address.childAge == '') {
        //     util.showErrorToast('请输入孩子年龄');
        //     return false;
        // }
        // if (address.childSchool == 0) {
        //     util.showErrorToast('请输入小孩学校');
        //     return false;
        // }
        // if (address.wechat == '') {
        //     util.showErrorToast('请输入微信号');
        //     return false;
        // }
        let that = this;
        util.request(api.UserInfoModify, submitdata, 'POST').then(function (res) {
            if (res.success) {
                wx.navigateTo({
                    url: '/pages/ucenter/index/index',
                })
            }
        });
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
