Page({  
  data: {  
    title: '',  
    images: []  
  },  
  
  onTitleInput(e) {  
    this.setData({  
      title: e.detail.value  
    });  
  },  
  data: {  
    images: []  
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
  
  submitPost() {  
    if (!this.data.title) {  
      wx.showToast({  
        title: '请输入标题',  
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
  
    // 这里应该添加将帖子数据发送到服务器的逻辑  
    // 例如：wx.request({...})  
  
    // 假设发送成功，显示提示并重置表单（或导航到其他页面）  
    wx.showToast({  
      title: '发布成功',  
      icon: 'success',  
      duration: 2000,  
      success() {  
        // 重置表单（可选）  
        this.setData({  
          title: '',  
          images: []  
        });  
        // 或者导航到其他页面（可选）  
        // wx.navigateTo({ url: '/pages/someOtherPage/someOtherPage' });  
      }
    });  
  }  
});