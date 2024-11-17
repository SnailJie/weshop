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
        navlist: ["同城", "森系", "历史", "国外", "自然", "亲子"],
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
        cities: ['成都', '北京', '上海', '广州', '深圳', '杭州'], // 城市列表
        currentCity: '成都' // 当前选中的城市
    },
    tabSelect(e) {
        let list = this.data.postsList;
        let categoryId = e.currentTarget.dataset.id;
        this.initData()
        this.setData({
            TabCur: e.currentTarget.dataset.id,
        })
        this.getPageData(categoryId)
    },
    initData() {
        this.setData({
            page: 1, // 当前页数
            pageSize: 10, // 每页大小
            postsList: [],
            fallList: []
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
        this.getPageData(0)
    },
    getPageData(type) {
        let that = this;
        const queryCondition = {
            pageNum: this.data.page,
            pageSize: this.data.pageSize,
            category: type
        }
        util.request(api.PostsList, queryCondition).then(function (res) {
            if (res.success) {
                console.log("res.data")
                console.log(res.data)
                const newPosts = res.data;
                const hasMore = newPosts.length === that.data.pageSize;
                that.setData({
                    page: that.data.page + 1,
                    isLoading: false,
                    hasMore: hasMore
                });
                let total = res.data.map(item => {
                    const picList = item.picList || '';
                    const headURL = picList.split(';')[0].trim();
                    return {
                        ...item,
                        headURL: headURL // 默认头像
                    };
                });
                that.setData({
                    postsList: that.data.postsList.concat(total),
                    fallList: that.data.postsList.concat(total)
                });
                // let newList = []
                // for (let index = 0; index < total.length; index++) {
                //     if (!(total[index].category.indexOf(0) == -1)) {
                //         newList.push(total[index])
                //     }
                // }

            }
        });
    },
    onLoad: function (options) {
        if (this.data.isLoading || !this.data.hasMore) {
            return;
        }
        this.setData({
            isLoading: true
        });
        this.getIndexData();
        // this.getLocation();
    },
    // //获得地理位置
    // getLocation: function () {
    //     const that = this;
    //     if (that.data.hasLocation) {
    //         return
    //     }
    //     wx.getLocation({
    //         type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
    //         success: function (res) {
    //             const latitude = res.latitude;
    //             const longitude = res.longitude;
    //             that.setData({
    //                 hasLocation: true,
    //                 latitude: latitude,
    //                 longitude: longitude
    //             });
    //             that.sendLoginLog(latitude, longitude)
    //         },
    //         fail: function (res) {
    //             console.log(res)
    //             if (res.errMsg === 'getLocation:fail auth deny') {
    //                 wx.showModal({
    //                     title: '提示',
    //                     content: '您拒绝了授权，无法获取地理位置信息',
    //                     showCancel: false,
    //                     confirmText: '确定',
    //                     success: function (res) {
    //                         if (res.confirm) {
    //                             // 用户点击确定后，可以引导用户去设置页面重新授权
    //                             wx.openSetting({
    //                                 success: function (res) {
    //                                     if (res.authSetting['scope.userLocation']) {
    //                                         // 用户重新授权后，再次尝试获取地理位置
    //                                         that.getLocation();
    //                                     }
    //                                 }
    //                             });
    //                         }
    //                     }
    //                 });
    //             } else {
    //                 wx.showToast({
    //                     title: '获取位置失败',
    //                     icon: 'none'
    //                 });
    //             }
    //         }
    //     });
    // },
    // sendLoginLog(latitude, longitude) {
    //     console.log("获取地理位置")
    //     console.log(latitude)
    //     console.log(longitude)
    // },

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
    navigateToDetailPage: function (e) {
        const item = e.currentTarget;
        const postCode = item.dataset.item.code
        wx.navigateTo({
            url: '/pages/postDetail/postDetail?item=' + postCode
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
            keyword: searchText
        }
        util.request(api.PostsList, conditon).then(function (res) {
            if (res.success) {
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
    },
    loadMore: function () {

        this.setData({
            isLoading: true
        });
        this.getIndexData();
    },

    onScrollLeft: function (e) {
        this.setData({
            scrollTop: e.detail.scrollTop
        });
        this.syncScroll('right');
    },

    onScrollRight: function (e) {
        this.setData({
            scrollTop: e.detail.scrollTop
        });
        this.syncScroll('left');
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
