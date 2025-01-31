const util = require('../../../utils/util.js');
const api = require('../../../config/api.js');
const user = require('../../../services/user.js');

//获取应用实例
const app = getApp()
Page({
    data: {
        PageCur: 'basics',
        TabCur: 0,
        scrollLeft: 0, 
        groupList: [],
        postsList: [],
        searchText: '',
        hasLocation: false,
        longitude: '',
        latitude: '',
        page: 1, // 当前页数
        pageSize: 10, // 每页大小
        isLoading: false, // 是否正在加载
        hasMore: true, // 是否还有更多数据
        scrollTop: 0, // 当前滚动位置
    },
    initData() {
        this.setData({
            page: 1, // 当前页数
            pageSize: 10, // 每页大小
            postsList: [], 
        })
    },
    onShareAppMessage: function () {
        return {
            title: '放学去哪儿',
            desc: '同学们,放学去哪儿',
            path: '/pages/index/index'
        }
    },
    getMyPostListData() {
        let that = this;
        const queryCondition = {
            pageNum: this.data.page,
            pageSize: this.data.pageSize
        }
        util.post(api.GroupMyPostList, queryCondition).then(function (res) {
            if (res.success) {
                const newPosts = res.data;
                const hasMore = newPosts.length === that.data.pageSize;
                that.setData({
                    page: that.data.page + 1,
                    isLoading: false,
                    hasMore: hasMore
                });
                let total = res.data;
                that.setData({
                    postsList: that.data.postsList.concat(total),
                });
            }
        });
    },
    
    onLoad: function (options) {
      console.log("开始获取数据")
        if (this.data.isLoading || !this.data.hasMore) {
            return;
        }
        this.setData({
            isLoading: true
        });
        this.getMyPostListData()
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
    navigateToDetailPage: function (e) {
        const item = e.currentTarget;
        console.log("item")
        console.log(item)
        const postCode =item.dataset.item.code
        wx.navigateTo({
            url: '/pages/postDetail/postDetail?item=' + postCode
        });
    },
    onSearchInput: function (e) {
        this.setData({
            searchText: e.detail.value
        });
    },
     
    loadMore: function () {
        this.setData({
            isLoading: true
        });
        this.getMyPostListData();
    },
    syncScroll: function (direction) {
        const targetId = direction === 'left' ? '#fall-left' : '#fall-right';
        const targetScrollView = this.selectComponent(targetId);
        if (targetScrollView) {
            targetScrollView.scrollTo({
                scrollTop: this.data.scrollTop,
                duration: 0
            });
        }
    }
})
