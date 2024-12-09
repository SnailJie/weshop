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
    content: '',
    searchQuery: '',
    showDropdown: false
  },
  lifetimes: {
    attached() {
      // 组件加载时获取学校列表
      this.getSchoolList();
    }
  },
  methods: {
    getSchoolList() {
      const that = this;
      util.get(api.GroupJoinList).then(function(res) {
        if (res.success) {
          console.log("获取学校列表") 
          console.log(res.data)

          that.setData({
            schools: res.data,
            filteredSchools: res.data
          });
        } else {
          wx.showToast({
            title: '获取学校列表失败',
            icon: 'none'
          });
        }
      });
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
      const filtered = this.data.schools.filter(school => school.toLowerCase().includes(query));
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
      const schoolId = e.currentTarget.dataset.id;
      
      this.setData({
        selectedSchool: school,
        searchQuery: school,
        showDropdown: false,
        selectedSchoolId: schoolId
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
          title: '请选择要发布的学校圈子',
          icon: 'none'
        });
        return;
      }
      if (!this.data.content) {
        wx.showToast({
          title: '请输入内容',
          icon: 'none'
        });
        return;
      }

      // Prepare data to send
      const submitData = {
        groupName: this.data.selectedSchool,
        content: this.data.content,
        groupId: this.data.selectedSchoolId
      };
      console.log("submitData")
      console.log(submitData)
      util.post(api.GroupPost, submitData).then((res) => {
        wx.hideLoading();
         
        if (res.success) {
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 1000
          });
          this.hideModal(); // Close the modal
          wx.navigateBack();
        } else {
          wx.showToast({
            title: '提交失败', 
            icon: 'none',
            duration: 2000
          });
        }
      });

    },
    onContentInput(e) {
      this.setData({
        content: e.detail.value
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