const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');
Page({
    data: {
        downloadImgs: [],
        title: '详情页',
        postDetail: {},
        commentList: [],
        createTime: '',
        inputContent: '',
        postCode: '',
        objectType: '',
        objectCode: '',
        isLike: '0',
        isCollect: '0',
        avatar:'../../image/logo.png',
        showReportModal: false,
        reportContent: '',
        contact: '',
        showDonateModal: false,
        donateContent: '',
        donateType: '',
        showClothesInput: false,
        showApplianceInput: false,
        showSportsInput: false,
        clothesRemark: '',
        applianceRemark: '',
        sportsRemark: '',
        items: [
            {value: 'USA', name: '美国'},
            {value: 'CHN', name: '中国'},
            {value: 'BRA', name: '巴西'},
            {value: 'JPN', name: '日本'},
            {value: 'ENG', name: '英国'},
            {value: 'FRA', name: '法国'}
          ]
    },
    checkboxChange(e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
        const items = this.data.items
        const values = e.detail.value
        for (let i = 0, lenI = items.length; i < lenI; ++i) {
          items[i].checked = false
    
          for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
            if (items[i].value === values[j]) {
              items[i].checked = true
              break
            }
          }
        }
        this.setData({
          items
        })
      },
    likePost() {
       const submitData={
        actionType:this.data.isLike ==='0' ? 'LIKE':'UNLIKE',
        actionObjectType:'GROUP_POST',
        actionObjectCode:this.data.postCode
       }
         // 发送请求
         util.post(api.ActionDo, submitData).then((res) => {
           if (res.success) {
              wx.showToast({
                  title: '点赞成功',
                  icon: 'success',
                  duration: 2000
              });
              this.setData({
                isLike: this.data.isLike ==='0'?'1':'0'
            });
              // Start Generation Here
              this.onLoad(this.options);
          } else {
              wx.showToast({
                  title: '点赞',
                  icon: 'none',
                  duration: 2000
              });
          }
      });
    },
    onClothesChange(e) {
        this.setData({
            showClothesInput:true
        });
    },
    onApplianceChange(e) {
        this.setData({
            showApplianceInput:true
        });
    },
    onSportsChange(e) {
        this.setData({
            showSportsInput:true
        });
    },
    showReportModal() {
        this.setData({
            showReportModal: true
        });
    },
    hideReportModal() {
        this.setData({
            showReportModal: false
        });
    },
    showDonateModal() {
        this.setData({
            showDonateModal: true
        });
    },
    hideDonateModal() {
        this.setData({
            showDonateModal: false
        });
    },
    commentPost() {
        const inputContent = this.data.inputContent;
        const submitData = {
            content: inputContent,
            belongType: 'GROUP',
            belongCode: this.data.postCode,
            objectType: 'POST',
            objectCode: this.data.postCode
        }
        // 发送请求
        util.post(api.CommentsAdd, submitData).then((res) => {
            wx.hideLoading();
            if (res.success) {
                wx.showToast({
                    title: '提交成功',
                    icon: 'success',
                    duration: 2000
                });
                // 清空输入框
                this.setData({
                    inputContent: ''
                });
                // 重新加载评论数据
                this.getCommentsData(this.data.postCode);
            } else {
                wx.showToast({
                    title: '提交失败',
                    icon: 'none',
                    duration: 2000
                });
            }
        });

    },
    handleInput: function (e) {
        this.setData({
            inputContent: e.detail.value
        });
    },
    onLoad: function (options) {
        const item = decodeURIComponent(options.item);
        this.setData({
            postCode: item
        });
        this.getPostDetailData(item);
        this.getCommentsData(item);
        this.getActionData(item);

    },
    getActionData(postCode) {
        util.request(api.ActionQueryDetail, {
            actionObjectCode: postCode,
            actionObjectType: 'POST'
        }).then((res) => {
            if (res.success) {
                console.log("action.data")
                console.log(res.data)
                let detailList = res.data
                let isLike = 1;
                let isCollection = 1;
                if( detailList && detailList.length > 0){
                  for (let item of detailList) {
                    if (item.actionType === 'LIKE') {
                        isLike = '1';
                    }
                    if (item.actionType === 'COLLECT') {
                        isCollection = '1';
                    }
                }
                this.setData({
                    isLike: isLike,
                    isCollection: isCollection
                });
                }
            }
        });
    },
    getPostDetailData(postCode) {
        let that = this;
        let data = null;
        util.request(api.GroupPostsDetail, {
            code: postCode
        }).then((res) => {
            if (res.success) {
                console.log("res.data")
                console.log(res.data)
                let detail = res.data
                let formateTime = this.formatISODate(detail.createTime)
                that.setData({
                    postDetail: detail,
                    createTime: formateTime
                });
                data = detail;
                // that.downloadFiles(data.imageURL.split(';'))
            }
        });
    },
    formatISODate(isoTime) {
        const date = new Date(isoTime);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },
    getCommentsData(postCode) {
        let that = this;
        util.request(api.PostsComments, {
            postCode: postCode,
            belongType: 'GROUP'
        }).then((res) => {
            console.log('---------------')
            console.log(this.commentList)
            if (res.success) {
                console.log("comments")
                console.log(res.data)
                that.setData({
                    commentList: this.processComments(res.data),
                });
            }
        });
    },
    processComments: function (comments) {
        return comments.map(comment => ({
            ...comment,
            gmtCreate: this.formatISODate(comment.gmtCreate),
            commentList: comment.commentList ? comment.commentList.map(subComment => ({
                ...subComment,
                gmtCreate: this.formatISODate(subComment.gmtCreate)
            })) : []
        }));
    },

    downloadFiles(fileUrls) {
        let that = this;
        // 或如下传参
        wx.cloud.getTempFileURL({
            fileList: fileUrls, // 对象存储文件ID列表，最多50个，从上传文件接口或者控制台获取
            success: res => {
                const fileListPreview = res.fileList.map(user => user.tempFileURL);
                that.setData({
                    downloadImgs: fileListPreview
                })
            },
            fail: err => {
                console.error(err)
            }
        })

    },
    downloadFile(fileID, onCall = () => {}) {
        wx.cloud.downloadFile({
            fileID: fileID, // 对象存储文件ID，从上传文件接口或者控制台获取
        }).then(res => {
            // resolve(res.tempFilePath)
            return res.tempFilePath
        }).catch(error => {
            console.error(err)
        })
    }
});
