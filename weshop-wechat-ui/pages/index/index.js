const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');

//获取应用实例
const app = getApp()
Page({
    data: {
        newGoodsList: [],
        hotGoodsList: [],
        topicList: [],
        brandList: [],
        floorGoods: [],
        bannerList: [],
        channelList: [],
        postsList: []
    },
    onShareAppMessage: function () {
        return {
            title: '放学去哪儿',
            desc: '同学们,放学去哪儿',
            path: '/pages/index/index'
        }
    },

    getIndexData: function () {
        let that = this;
        util.request(api.IndexUrl).then(function (res) {
            if (res.success) {
                that.setData({
                    newGoodsList: res.data.newGoodsList,
                    hotGoods: res.data.hotGoodsList,
                    topicList: res.data.topicList,
                    brandList: res.data.brandList,
                    floorGoods: res.data.categoryList,
                    bannerList: res.data.bannerList,
                    channelList: res.data.channelList,
                    postsList: res.data.postsList
                });
            }
        });
    },
    onLoad: function (options) {
        this.getIndexData();
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },
    navigateToPostPage() {  
      console.log('------xxxxxx')
      wx.navigateTo({  
        url: '/pages/newPost/newPost'  
      });  
    }  
})