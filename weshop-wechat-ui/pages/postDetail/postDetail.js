const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');
Page({
    data: {
        downloadImgs: [],
        title: '详情页',
        postDetail: {},
        commentList: [],
        imageUrl: 'https://7072-prod-4gyaq2skbf5fb439-1308266486.tcb.…/kGvScXxeJB87d6d92336e44e2a1cb0c7db97d87c5ea5.jpg'
    },
    likePost() {
        console.log('------xxxlikePostxxx')
    },
    onLoad: function (options) {
        this.getPostDetailData();
    },
    getPostDetailData() {
        let that = this;
        let data = null;

        util.request(api.PostsDetail, {
            code: "e08eaf746d9c9d40"
        }).then(function (res) {
            if (res.success) {
                console.log("res.data")
                console.log(res.data)
                let detail = res.data
                that.setData({
                    postDetail: detail
                });
                data = detail;
                that.downloadFiles(data.imageURL.split(';'))
            }
        });


    },
    getCommentsData() {
        let that = this;
        util.request(api.PostsDetail, {
            code: "e08eaf746d9c9d40"
        }).then(function (res) {
            if (res.success) {
                console.log("res.data")
                console.log(res.data)
                let total = res.data
                that.setData({
                    postDetail: total,
                });
            }
        });
    },
    downloadFiles(fileUrls) {
        let that = this;
        console.log("ready to go")
        console.log(fileUrls)

        // 或如下传参
        wx.cloud.getTempFileURL({
            fileList: fileUrls, // 对象存储文件ID列表，最多50个，从上传文件接口或者控制台获取
            success: res => {
              console.log(res.fileList)
              const fileListPreview = res.fileList.map(user => user.tempFileURL);
             
              console.log(fileListPreview)
             
              console.log('---------------xxxxx-----------')
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
            console.log(res)
            // resolve(res.tempFilePath)
            return res.tempFilePath
        }).catch(error => {
            console.error(err)
        })
    }
});
