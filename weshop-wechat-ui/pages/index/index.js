const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');

//获取应用实例
const app = getApp()
Page({
    data: {
        PageCur: 'basics',
        TabCur: 0,
        scrollLeft: 0,
        navlist: ["推荐", "森系", "历史", "国外", "自然", "亲子"],
        postsList: [],
        searchText:''
    },
    tabSelect(e) {
        let list = this.data.postsList;
        let categoryId = e.currentTarget.dataset.id;
        let newList = [];
        for (let index = 0; index < list.length; index++) {
            if (!(list[index].category.indexOf(categoryId) == -1)) {
                newList.push(list[index])
            }
        }

        this.setData({
            TabCur: e.currentTarget.dataset.id,
            scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
            fallList: newList
        })
    },
    NavChange(e) {
        this.setData({
            PageCur: e.currentTarget.dataset.cur
        })
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
        util.request(api.PostsList).then(function (res) {
            if (res.success) {
                console.log("res.data")
                console.log(res.data)
                let total = res.data.map(item => {
                  const picList = item.picList || '';
                  const headURL = picList.split(';')[0].trim();
                  return {
                    ...item,
                    headURL: headURL  // 默认头像
                  };
                });
                that.setData({
                    postsList: total,
                });
                let newList = []
                for (let index = 0; index < total.length; index++) {
                    if (!(total[index].category.indexOf(0) == -1)) {
                        newList.push(total[index])
                    }
                }
                that.setData({
                    fallList: newList
                })
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
        
        wx.navigateTo({
            url: '/pages/newPost/newPost'
        });
    },
    navigateToDetailPage: function(e) {
      const item = e.currentTarget;
      console.log('------xxxxxx')
      const postCode = item.dataset.item.code
      wx.navigateTo({
        url: '/pages/postDetail/postDetail?item=' +postCode
      });
    },
     
    getPostsList() {
        let that = this;
        let tempPostsList = [];

        return tempPostsList;
    },
    onSearchInput: function (e) {
      this.setData({
        searchText: e.detail.value
      });
    },
    doSearch: function (e) {
      const searchText = this.data.searchText;
      wx.showLoading({
        title: '搜索中...',
        mask: true 
      });
      this.searchPosts(searchText);
    },
    searchPosts: function (searchText) {
      let that = this;
      const conditon = {
        keyword:searchText
      }
      util.request(api.PostsList,conditon).then(function (res) {
          if (res.success) {

              console.log("res.data")
              console.log(res.data)
              let total = res.data
              that.setData({
                  postsList: total,
              });
              let newList = []
              for (let index = 0; index < total.length; index++) {
                  if (!(total[index].category.indexOf(0) == -1)) {
                      newList.push(total[index])
                  }
              }
              that.setData({
                  fallList: newList
              })
              wx.hideLoading();
          }
      });
    }
})
