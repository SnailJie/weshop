const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');
Page({
    data: {
        downloadImgs: [],
        title: '详情页',
        postDetail: {},
        commentList: [],
        createTime:'',
        inputContent:'',
        postCode:''
    },
    likePost() {
        console.log('------xxxlikePostxxx')
    },
    commentPost(){
      const inputContent = this.data.inputContent;
      console.log('------inputContent')
      console.log(inputContent)
      
    },
    handleInput: function(e) {
      this.setData({
        inputContent: e.detail.value
      });
    },
    onLoad: function (options) {
      const item = decodeURIComponent(options.item);
      console.log("--postCode----")
      console.log(item)
      this.setData({
        postCode: item
      });
        this.getPostDetailData(item);
        this.getCommentsData(item);
        console.log(this.commentList)
    },
    getPostDetailData(postCode) {
        let that = this;
        let data = null;
        util.request(api.PostsDetail, {
            code: postCode
        }).then((res)  =>{
            if (res.success) {
                console.log("res.data")
                console.log(res.data)
                let detail = res.data
                let formateTime = this.formatISODate(detail.gmtCreate)
                that.setData({
                    postDetail: detail,
                    createTime:formateTime
                });
                data = detail;
                that.downloadFiles(data.imageURL.split(';'))
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
    getCommentsData() {
        let that = this;
        util.request(api.PostsComments, {
          postCode: "e08eaf746d9c9d40"
        }).then((res)=> {
            if (res.success) {
                console.log("comments")
                console.log(res.data)
                that.setData({
                  commentList: this.processComments(res.data),
                });
            }
        });
    },
    processComments: function(comments) {
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
