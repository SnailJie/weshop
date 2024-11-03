const util = require('../../../utils/util.js');
const api = require('../../../config/api.js');
const user = require('../../../services/user.js');
const app = getApp();

Page({
    data: {
        userInfo: {},
        showLoginDialog: false
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        // 查看是否授权
        wx.getSetting({
          success: (res) => {  // 使用箭头函数
              if (res.authSetting['scope.userInfo']) {
                  console.log("已授权获得用户信息");
                  // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                  this.getUserInfo();
              } else {
                  this.requestAuthorization();
              }
          }
      });
    },
    requestAuthorization() {
      wx.authorize({
        scope: 'scope.userInfo',
        success: () => {
          // 用户已授权，可以直接获取用户信息
          this.getUserInfo();
        },
        fail: () => {
          // 用户拒绝授权，可以引导用户去设置页面授权
          this.showAuthModal();
        }
      });
    },
    showAuthModal() {
      wx.showModal({
        title: '授权提示',
        content: '需要您的授权才能正常使用功能',
        confirmText: '去授权',
        cancelText: '取消',
        success: (res) => {
          if (res.confirm) {
            wx.openSetting({
              success: (res) => {
                if (res.authSetting['scope.userInfo']) {
                  // 用户已授权，可以直接获取用户信息
                  this.getUserInfo()
                } else {
                  // 用户仍然拒绝授权，可以再次提示或记录日志
                  console.log('用户拒绝授权');
                }
              }
            });
          }
        }
      });
    },
    getUserInfo() {
      wx.getUserInfo({
        success: (res) => {
          console.log('用户信息', res.userInfo);
          // 处理用户信息，例如保存到本地或发送到服务器
          this.setData({
            userInfo: res.userInfo
          });
        },
        fail: (err) => {
          console.error('获取用户信息失败', err);
        }
      });
    },
    onReady: function () {

    },
    onShow: function () {
        this.setData({
            userInfo: app.globalData.userInfo,
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

    onWechatLogin(e) {
        if (e.detail.errMsg !== 'getUserInfo:ok') {
            if (e.detail.errMsg === 'getUserInfo:fail auth deny') {
                return false
            }
            wx.showToast({
                title: '微信登录失败',
            })
            return false
        }
        util.login().then((res) => {
            return util.request(api.AuthLoginByWeixin, {
                code: res,
                userInfo: e.detail
            }, 'POST');
        }).then((res) => {
            console.log(res)
            if (res.success == false) {
                wx.showToast({
                    title: '微信登录失败',
                })
                return false;
            }
            // 设置用户信息
            this.setData({
                userInfo: res.data.userInfo,
                showLoginDialog: false
            });
            app.globalData.userInfo = res.data.userInfo;
            app.globalData.token = res.data.token;
            wx.setStorageSync('userInfo', JSON.stringify(res.data.userInfo));
            wx.setStorageSync('token', res.data.token);
        }).catch((err) => {
            console.log(err)
        })
    },

    onOrderInfoClick: function (event) {
        wx.navigateTo({
            url: '/pages/ucenter/order/order',
        })
    },

    onSectionItemClick: function (event) {

    },

    // TODO 移到个人信息页面
    exitLogin: function () {
        wx.showModal({
            title: '',
            confirmColor: '#b4282d',
            content: '退出登录？',
            success: function (res) {
                if (res.confirm) {
                    wx.removeStorageSync('token');
                    wx.removeStorageSync('userInfo');
                    wx.switchTab({
                        url: '/pages/index/index'
                    });
                }
            }
        })

    }
})
