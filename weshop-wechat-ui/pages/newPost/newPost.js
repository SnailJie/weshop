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
  
  chooseImage() {  
    wx.chooseImage({  
      count: 1, // 允许选择图片的数量，这里设为1表示只能上传一张图片  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机  
      success(res) {  
        const tempFilePaths = res.tempFilePaths;  
        this.setData({  
          images: [...this.data.images, tempFilePaths[0]] // 将选中的图片添加到数组中  
        });  
      },  
      fail(err) {  
        console.error('选择图片失败', err);  
      }  
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
      }.bind(this) // 注意：需要绑定this，以便在回调中访问页面的setData方法  
    });  
  }  
});