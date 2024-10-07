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
        bad_brandList:[
{
  id:'1',
  name:'兔子研学',
  newPicUrl:"http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg"
},{
  id:'2',
  name:'天府乐学',
  newPicUrl:"http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg"
},{
  id:'3',
  name:'外研U学',
  newPicUrl:"http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg"
},{
  id:'4',
  name:'三毛研学',
  newPicUrl:"http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg"
}

        ],

        floorGoods: [],
        bannerList: [],
        channelList: []
    },
    onShareAppMessage: function () {
        return {
            title: 'FREE CAMP',
            desc: '天府乐学门户',
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
                    channelList: res.data.channelList
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
})