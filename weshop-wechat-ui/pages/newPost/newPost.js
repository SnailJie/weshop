Page({
    data: {
        title: '',
        images: [],
        fileIDs:[]
    },

    onTitleInput(e) {
        this.setData({
            title: e.detail.value
        });
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
        console.log('hahahahha')
        console.log(this.data.images)
        if (this.data.images.length === 0) {
            wx.showToast({
                title: '请上传图片',
                icon: 'none'
            });
            return;
        }
        let imagePath = this.uploadImages(this.data.images);
        console.log('imagePath')
        console.log(imagePath)

        // 这里应该添加将帖子数据发送到服务器的逻辑  
        // 例如：wx.request({...})  

        // 假设发送成功，显示提示并重置表单（或导航到其他页面）  
        wx.navigateTo({ url: '/pages/index/index' });  
    },
    
    uploadImages(filePaths) {
        const that = this;
        const uploadPromises = filePaths.map(filePath => {
            let uniqueRandom = this.generateUniqueRandom();
            console.log("uniqueRandom")
            console.log(uniqueRandom)
            let fileName_split = filePath.split('/');
            let fileName = fileName_split[fileName_split.length - 1]
            let cloudPath = 'postPic'+'/'+uniqueRandom+'/'+fileName
            console.log("cloudPath")
            console.log(cloudPath)       
            return new Promise((resolve, reject) => {
                wx.cloud.uploadFile({
                    cloudPath: cloudPath, // 对象存储路径，根路径直接填文件名，文件夹例子 test/文件名，不要 / 开头
                    filePath: filePath, // 微信本地文件，通过选择图片，聊天文件等接口获取
                    config: {
                        env: 'prod-4gyaq2skbf5fb439' // 需要替换成自己的微信云托管环境ID
                    }
                }).then(res => { 
                    resolve(res.fileID);
                }).catch(error => {
                    console.error(err)
                });
            });
        });

        // 使用 Promise.all 处理所有上传请求
        Promise.all(uploadPromises)
            .then(results => {
                console.log('所有文件上传成功:', results);
                that.setData({fileIDs: results});
                console.log('fileIDs:', this.data.fileIDs);
                console.log(this.data.fileIDs)

                wx.showToast({
                    title: '发表成功',
                    icon: 'success',
                    duration: 2000
                });
            })
            .catch(error => {
                console.error('部分文件上传失败:', error);
                wx.showToast({
                    title: '部分文件上传失败',
                    icon: 'none',
                    duration: 2000
                });
            });
    },
    generateUniqueRandom() {
      const uniqueId = new Date().getTime().toString(36) + '-' + Math.random().toString(36).substr(2, 9);
      console.log(uniqueId);
      return uniqueId;
  },
});
