const util = require('../../../utils/util.js');
const api = require('../../../config/api.js');
const user = require('../../../services/user.js');
const app = getApp();

Page({
    data: {
        userInfo: {},
        showLoginDialog: false,
        isModalVisible: false,
        avataImagePath: '',
    },
    onLoad: function (options) {
        let that = this;
        util.request(api.UserInfoQueryDetail).then((res) => {
            if (res.success) {
                console.log("UserInfoQueryDetail")
                console.log(res.data)
                this.setData({
                    userInfo: res.data,
                    avataImagePath: res.data.avatar
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
            userInfo: userInfoDetail,
            avataImagePath: userInfoDetail.avatar
        });
    },
    onHide: function () {
        // 页面隐藏

    },
    onUnload: function () {
        // 页面关闭
    },
    showModal(){
      
      this.setData({
  isModalVisible:true
})
    },
    hideModal(){
      this.setData({
        isModalVisible:false
      })
    }, 
    chooseAvatar() {
        const that = this;
        wx.chooseImage({
            count: 1, // 允许选择图片的数量  
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
            success(res) {
                const tempFilePaths = res.tempFilePaths;
                console.log("选择头像上传")
                console.log(tempFilePaths)
                that.uploadFile(tempFilePaths[0])
            },
            fail(err) {
                console.error(err);
            }
        });

    },
    uploadFile(filePath) {
        const that = this;
        let uniqueRandom = this.generateUniqueRandom();
        let fileName_split = filePath.split('/');
        let fileName = fileName_split[fileName_split.length - 1]
        let cloudPath = 'avatar' + '/' + uniqueRandom + '/' + fileName
      
        wx.cloud.uploadFile({
            cloudPath: cloudPath, // 对象存储路径，根路径直接填文件名，文件夹例子 test/文件名，不要 / 开头
            filePath: filePath, // 微信本地文件，通过选择图片，聊天文件等接口获取
            config: {
                env: 'prod-1gizsfg5ac036f2a' // 需要替换成自己的微信云托管环境ID
            }
        }).then(res => {
            that.setData({
                avataImagePath: res.fileID
            });
            that.updateAvatar(res.fileID)
        }).catch(error => {
            console.error(error)
        });
    },
    updateAvatar(avatarFilePath){
      const submitdata={
        avatar:avatarFilePath
      }
      util.request(api.UserInfoModify, submitdata, 'POST').then((res)=> {
        if(res.success){
            let newUserInfo =  app.globalData.userInfo;
            newUserInfo.avatar= avatarFilePath;
            app.globalData.userInfo= newUserInfo;
        }
      });
    },
    generateUniqueRandom() {
        const uniqueId = new Date().getTime().toString(36) + '-' + Math.random().toString(36).substr(2, 9);
        console.log(uniqueId);
        return uniqueId;
    }
})
