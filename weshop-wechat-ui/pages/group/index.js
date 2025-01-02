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
        navlist: ["天府七中", "加入小组"],
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
        cities: ['成都', '北京', '上海', '广州', '深圳', '杭州'], // 城市列表
        currentCity: '成都' // 当前选中的城市
    },
    tabSelect(e) {
        let categoryId = e.currentTarget.dataset.id;
        let groupId = e.currentTarget.dataset.group;
         
        this.initData()
        this.setData({
            TabCur: e.currentTarget.dataset.id,
        })
        this.getGroupPostListData(groupId)
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
       
    },
    getGroupPostListData(groupId) {
        let that = this;
        const queryCondition = {
            pageNum: this.data.page,
            pageSize: this.data.pageSize,
            groupId: groupId.toString(),
            status:'ONLINE'
        }
        console.log("queryCondition")
        console.log(queryCondition)
        util.post(api.GroupPostList, queryCondition).then(function (res) {
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
                let total = res.data;
                that.setData({
                    postsList: that.data.postsList.concat(total),
                });
            }
        });
    },
    getJoinGroupList() {
        let that = this;
        let firstGroupId = '';
        util.request(api.GroupJoinList).then(function (res) {
            if (res.success) {
                console.log("res.data")
                console.log(res.data)
                const groupList = res.data.map(item => ({
                    ...item,
                    groupName: item.groupName.replace(/^(?:.*省)?(?:.*市)?/, '')
                }));
                that.setData({
                    groupList: groupList
                });
                firstGroupId = res.data[0].id;
                console.log("firstGroupId")
                console.log(firstGroupId)
                that.getGroupPostListData(firstGroupId)
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
        this.getJoinGroupList();
       
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
    navigateToDetailPage: function (e) {
        const item = e.currentTarget;
        console.log("item")
        console.log(item)
        const postCode =item.dataset.item.code
        wx.navigateTo({
            url: '/pages/groupPostDetail/groupPostDetail?item=' + postCode
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
    
    loadMore: function () {

        this.setData({
            isLoading: true
        });
        this.getGroupPostListData(groupId);
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
