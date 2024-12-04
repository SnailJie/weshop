const api = require('../../config/api.js');
const util = require('../../utils/util.js');
const app = getApp();
Page({
    data: {
        title: '',
        images: [],
        fileIDs: [],
        userInfo: {},
        showLoginDialog: false
    },
    onShow: function () {
        // 页面显示
        if (wx.getStorageSync('token')) {} else {
            this.showLoginDialog();
        }
    },
    showLoginDialog() {
        this.setData({
            showLoginDialog: true
        })
    },
    onTitleInput(e) {
        this.setData({
            title: e.detail.value
        });
    },
    onWechatLogin(e) {
        console.log("开始微信登陆")
        console.log(e.detail)
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
    chooseImage() {
        const that = this;
        wx.chooseImage({
            count: 6, // 允许选择图片的数量  
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
            success(res) {
                const tempFilePaths = res.tempFilePaths;
                that.setData({
                    images: [...that.data.images, ...tempFilePaths]
                });
            },
            fail(err) {
                console.error(err);
            }
        });
    },

    previewImage(e) {
        const current = e.currentTarget.dataset.index;
        const urls = this.data.images;
        wx.previewImage({
            current: urls[current],
            urls: urls
        });
    },

    deleteImage(e) {
        const index = e.currentTarget.dataset.index;
        const images = this.data.images;
        images.splice(index, 1);
        this.setData({
            images: images
        });
    },

    formSubmit(e) {
        console.log(e)
        let submitData = e.detail.value;
        if (!submitData.title) {
            wx.showToast({
                title: '请输入标题哦',
                icon: 'none'
            });
            return;
        }
        if (!submitData.content) {
            wx.showToast({
                title: '请输入内容哦',
                icon: 'none'
            });
            return;
        }

        if (this.data.images.length === 0) {
            wx.showToast({
                title: '请上传图片',
                icon: 'none'
            });
            return;
        }
        // 显示加载提示
        wx.showLoading({
            title: '发布中...',
        });
        let uploadPromises = this.uploadImages(this.data.images);
        console.log('submitData')
        console.log(submitData)
        // 使用 Promise.all 处理所有上传请求
        Promise.all(uploadPromises)
            .then(results => {
                console.log('所有文件上传成功:', results);
                submitData.picList = results
                // submitData.userInfo = app.globalData.userInfo,
                this.sendToServer(submitData)
            })
            .catch(error => {
                console.error('部分文件上传失败:', error);
                wx.showToast({
                    title: '部分文件上传失败',
                    icon: 'none',
                    duration: 2000
                });
            });
        this.navigateToPostPage()
    },
    sendToServer(submitData) {
        // 发送请求
        const that = this;
        util.post(api.PostsNew, submitData).then(function (res) {
            wx.hideLoading();
            console.log("xxx")
            console.log(res)
            if (res.success) {
                wx.showToast({
                    title: '提交成功',
                    icon: 'success',
                    duration: 2000
                });
                that.modifyPoint();
            } else {
                wx.showToast({
                    title: '提交失败',
                    icon: 'none',
                    duration: 2000
                });
            }
        });

    },
    uploadImages(filePaths) {
        const that = this;
        const uploadPromises = filePaths.map(filePath => {
            let uniqueRandom = this.generateUniqueRandom();
            console.log("uniqueRandom")
            console.log(uniqueRandom)
            let fileName_split = filePath.split('/');
            let fileName = fileName_split[fileName_split.length - 1]
            let cloudPath = 'postPic' + '/' + uniqueRandom + '/' + fileName
            console.log("cloudPath")
            console.log(cloudPath)
            return new Promise((resolve, reject) => {
                wx.cloud.uploadFile({
                    cloudPath: cloudPath, // 对象存储路径，根路径直接填文件名，文件夹例子 test/文件名，不要 / 开头
                    filePath: filePath, // 微信本地文件，通过选择图片，聊天文件等接口获取
                    config: {
                        env: 'prod-1gizsfg5ac036f2a' // 需要替换成自己的微信云托管环境ID
                    }
                }).then(res => {
                    resolve(res.fileID);
                }).catch(error => {
                    console.error(err)
                });
            });
        });
        return uploadPromises;
    },
    generateUniqueRandom() {
        const uniqueId = new Date().getTime().toString(36) + '-' + Math.random().toString(36).substr(2, 9);
        console.log(uniqueId);
        return uniqueId;
    },
    navigateToPostPage() {
        wx.reLaunch({
            url: '/pages/index/index',
        })
    },
    modifyPoint() {
      // 发送请求
      const points = {
          actionType: "ADD",
          targetPoints: 10
      }
      util.post(api.ModifyPoints, points).then(function (res) {
          wx.hideLoading();
          if (res.data) {
              wx.showToast({
                  title: '恭喜获得 10 积分！',
                  icon: 'success',
                  duration: 1500
              });
          }  
      });
  },
});
