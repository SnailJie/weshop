const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');

Component({
  data: {
    showModal: false,
    schools: [],
    filteredSchools: [],
    images: [],
    selectedSchool: '',
    searchQuery: '',
    showDropdown: false
  },
  lifetimes: {
    attached() {
      this.initializeSchools();
    }
  },
  methods: {
    initializeSchools() {
      console.log('initializeSchools')
      const that = this;
      wx.cloud.downloadFile({
        fileID: 'cloud://prod-1gizsfg5ac036f2a.7072-prod-1gizsfg5ac036f2a-1332718886/system/school.json',
        success: function (res) {
          wx.getFileSystemManager().readFile({
            filePath: res.tempFilePath,
            encoding: 'utf8',
            success: function (data) {
              console.log(data)
              // const schools = JSON.parse(data.data).map(school => school.name);
              const schools = JSON.parse(data.data);
              that.setData({
                schools: schools,
                filteredSchools: schools
              });
            },
            fail: function (error) {
              console.error('读取学校数据失败:', error);
              wx.showToast({
                title: '读取学校数据失败',
                icon: 'none'
              });
            }
          });
        },
        fail: function (error) {
          console.error('下载学校数据文件失败:', error);
          wx.showToast({
            title: '下载学校数据文件失败',
            icon: 'none'
          });
        }
      });
      console.log('initializeSchools end')
    },
    onButtonClick() {
      this.setData({
        showModal: true
      });
    },
    hideModal() {
      this.setData({
        showModal: false
      });
    },
    onSchoolChange(e) {
      const index = e.detail.value;
      this.setData({
        selectedSchool: this.data.filteredSchools[index]
      });
    },
    onSearchInput(e) {
      const query = e.detail.value.toLowerCase();
      const filtered = this.data.schools.filter(school => school.name.toLowerCase().includes(query));
      this.setData({
        searchQuery: query,
        filteredSchools: filtered,
        showDropdown: true,
        selectedSchool: query
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
    selectSchool(e) {
      const school = e.currentTarget.dataset.school;
      const id = e.currentTarget.dataset.id;
      console.log('selectSchool--', id)
      this.setData({
        selectedSchool: id,
        searchQuery: school,
        showDropdown: false
      });
    },
    onFocus() {
      this.setData({
        showDropdown: true
      });
    },
    onBlur() {
      setTimeout(() => {
        this.setData({
          showDropdown: false
        });
      }, 200);
    },
    confirmJoin() {
      if (!this.data.selectedSchool) {
        wx.showToast({
          title: '请选择学校',
          icon: 'none'
        });
        return;
      }

      let uploadPromises = this.uploadImages(this.data.images);
       // Prepare data to send
       const submitData = {
        groupId: this.data.selectedSchool,
        schoolName: this.data.searchQuery
      };
 
      // 使用 Promise.all 处理所有上传请求
      Promise.all(uploadPromises)
        .then(results => {
          console.log('所有文件上传成功:', results);
          submitData.authPic = results
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
    },
    sendToServer(submitData) {
      console.log('submitData')
      console.log(submitData)
      // 发送请求
      const that = this;
      util.post(api.GroupAuth, submitData).then(function (res) {
          wx.hideLoading();
          that.hideModal(); // {{ edit_1 }}
          if (res.success) {
              wx.showToast({
                  title: '提交成功',
                  icon: 'success',
                  duration: 1000
              });
              setTimeout(() => {
                wx.showToast({
                  title: '预计1个工作日内完成审核认证',
                  icon: 'none', 
                  duration: 2500
                });
              }, 2000);
              
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
        let cloudPath = 'authGroup' + '/' + uniqueRandom + '/' + fileName
        
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
    }
  }
});