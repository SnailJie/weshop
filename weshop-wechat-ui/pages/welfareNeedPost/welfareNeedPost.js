const api = require('../../config/api.js');
const util = require('../../utils/util.js');
const app = getApp();
Page({
    data: {
        title: '',
        images: [],
        fileIDs: [],
        userInfo: {},
        showLoginDialog: false,
        categories: ['文具', '运动器材', '衣物', '药品', '物资', '书籍', '其他'],
        items: [],
        getCategories: ['邮寄（包邮）', '邮寄(量大包邮)','邮寄(不包邮)', '线下收取点','其他'],
        getMethods: [],
        onReceiverName: '',
        contact: ''
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
    onReceiverNameInput(e) {
        this.setData({
            onReceiverName: e.detail.value
        });
    },
    onContactInput(e) {
        this.setData({
            contact: e.detail.value
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
    
    addItem() {
        const items = this.data.items;
        items.push({
            categoryIndex: -1,
            detail: ''
        });
        this.setData({
            items: items
        });
    },

    deleteItem(e) {
        const index = e.currentTarget.dataset.index;
        const items = this.data.items;
        items.splice(index, 1);
        this.setData({
            items: items
        });
    },

    bindPickerChange(e) {
        const index = e.currentTarget.dataset.index;
        const items = this.data.items;
        items[index].categoryIndex = parseInt(e.detail.value);
        this.setData({
            items: items
        });
    },

    onItemDetailInput(e) {
        const index = e.currentTarget.dataset.index;
        const items = this.data.items;
        items[index].detail = e.detail.value;
        this.setData({
            items: items
        });
    },
    bindStartDateChange(e) {
        this.setData({
            startDate: e.detail.value
        });
    },
    bindEndDateChange(e) {
        this.setData({
            endDate: e.detail.value
        });
    },

    addGetMethod() {
        const getMethods = this.data.getMethods;
        getMethods.push({
            categoryIndex: -1,
            detail: ''
        });
        this.setData({
            getMethods: getMethods
        });
    },

    deleteGetMethod(e) {
        const index = e.currentTarget.dataset.index;
        const getMethods = this.data.getMethods;
        getMethods.splice(index, 1);
        this.setData({
            getMethods: getMethods
        });
    },

    bindGetMethodPickerChange(e) {
        const index = e.currentTarget.dataset.index;
        const getMethods = this.data.getMethods;
        getMethods[index].categoryIndex = parseInt(e.detail.value);
        this.setData({
            getMethods: getMethods
        });
    },

    onGetMethodDetailInput(e) {
        const index = e.currentTarget.dataset.index;
        const getMethods = this.data.getMethods;
        getMethods[index].detail = e.detail.value;
        this.setData({
            getMethods: getMethods
        });
    },

    formSubmit(e) {
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
        submitData.memo = submitData.content;

        if (this.data.images.length === 0) {
            wx.showToast({
                title: '请上传图片',
                icon: 'none'
            });
            return;
        }
        
        submitData.startTime = this.data.startDate
        submitData.endTime = this.data.endDate
        submitData.contact = this.data.contact
        submitData.receiverName = this.data.onReceiverName
        submitData.needType = "NEED"
        if (this.data.items.length === 0) {
            wx.showToast({
                title: '请添加需要的物品',
                icon: 'none'
            });
            return;
        }
        for (let item of this.data.items) {
            if (item.categoryIndex === -1 || !item.detail) {
                wx.showToast({
                    title: '请完整填写物品信息',
                    icon: 'none'
                });
                return;
            }
        }
        submitData.needDetailConf = JSON.stringify(this.data.items.map(item => ({
            category: this.data.categories[item.categoryIndex],
            detail: item.detail
        })));

        if (this.data.getMethods.length === 0) {
            wx.showToast({
                title: '请添加获取方式',
                icon: 'none'
            });
            return;
        }

        for (let method of this.data.getMethods) {
            if (method.categoryIndex === -1 || !method.detail) {
                wx.showToast({
                    title: '请完整填写获取方式信息',
                    icon: 'none'
                });
                return;
            }
        }
        submitData.revConf = JSON.stringify(this.data.getMethods.map(method => ({
            category: this.data.getCategories[method.categoryIndex],
            detail: method.detail
        })));
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
                submitData.picConf = JSON.stringify(results)
                console.log("准备上传的数据:",submitData)
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
        util.post(api.WelfareAddNeed, submitData).then(function (res) {
            wx.hideLoading();
            console.log("xxx")
            console.log(res)
            if (res.success) {
                if(res.data==='SUCCESS'){
                    wx.showToast({
                        title: '提交成功',
                        icon: 'success',
                    duration: 2000
                });
                    that.modifyPoint();
                }else{
                    wx.showToast({
                        title: '内容不合规，请修改内容重新提交',
                        icon: 'none',
                        duration: 2000
                    });
                }
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
            let fileName_split = filePath.split('/');
            let fileName = fileName_split[fileName_split.length - 1]
            let cloudPath = 'welfarePic' + '/' + uniqueRandom + '/' + fileName
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
     
});
