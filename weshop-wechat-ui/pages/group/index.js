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
        currentCity: '成都', // 当前选中的城市
        showModal: false,
        schools: [],
        filteredSchools: [],
        images: [],
        selectedSchool: '',
        searchQuery: '',
        showDropdown: false
    },
    methods: {
        onSchoolChange(e) {
            const index = e.detail.value;
            this.setData({
                selectedSchool: this.data.filteredSchools[index]
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

    },
    hideModal() {
      this.setData({
        showModal: false
      });
    },
    confirmJoin() {
        if (!this.data.selectedSchool) {
            wx.showToast({
                title: '请选择学校',
                icon: 'none'
            });
            return;
        }
        let uploadPromises = this.uploadImages(this.data.images);
        // Prepare data to send
        const submitData = {
            groupId: this.data.selectedSchool,
            schoolName: this.data.searchQuery
        };

        // 使用 Promise.all 处理所有上传请求
        Promise.all(uploadPromises)
            .then(results => {
                console.log('所有文件上传成功:', results);
                submitData.authPic = results
                this.sendToServer(submitData)
            })
            .catch(error => {
                console.error('部分文件上传失败:', error);
                wx.showToast({
                    title: '部分文件上传失败',
                    icon: 'none',
                    duration: 2000
                });
            });
    },
    sendToServer(submitData) {
        console.log('submitData')
        console.log(submitData)
        // 发送请求
        const that = this;
        util.post(api.GroupAuth, submitData).then(function (res) {
            wx.hideLoading();
            that.hideModal(); // {{ edit_1 }}
            if (res.success) {
                wx.showToast({
                    title: '提交成功',
                    icon: 'success',
                    duration: 1000
                });
                setTimeout(() => {
                    wx.showToast({
                        title: '预计1个工作日内完成审核认证',
                        icon: 'none',
                        duration: 2500
                    });
                }, 2000);

            } else {
                wx.showToast({
                    title: '提交失败',
                    icon: 'none',
                    duration: 2000
                });
            }
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
        console.log("school", school)
        const id = e.currentTarget.dataset.id;
        console.log('selectSchool--', id)
        this.setData({
            selectedSchool: id,
            searchQuery: school,
            showDropdown: false
        });
    },
    onSearchInput(e) {
        let that = this
        const query = e.detail.value.toLowerCase();
        console.log("scholol query:", query)
        if (query === "") {
            return
        }
        util.post(api.GroupInfoQuery, query).then(function (res) {
            const filtered = res.data;
            console.log("filtered: ", filtered)
            that.setData({
                searchQuery: query,
                filteredSchools: filtered,
                showDropdown: true,
                selectedSchool: query
            });

        });
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
            title: '放学去哪呀',
            desc: '同学们,放学去哪呀',
            path: '/pages/index/index'
        }
    },
    getIndexData: function () {
        let that = this;

    },
    onJoinButtonClick() {
        this.setData({
            showModal: true
        });
    },
    hideJoinModal() {
        this.setData({
            showModal: false
        });
    },
    getGroupPostListData(groupId) {
        let that = this;
        const queryCondition = {
            pageNum: this.data.page,
            pageSize: this.data.pageSize,
            groupId: groupId.toString(),
            status: 'ONLINE'
        }

        util.post(api.GroupPostList, queryCondition).then(function (res) {
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
    getJoinGroupList() {
        let that = this;
        let firstGroupId = '';
        util.request(api.GroupJoinList).then(function (res) {
            if (res.success) {
                const groupList = res.data.map(item => ({
                    ...item,
                    groupName: item.groupName.replace(/^(?:.*省|.*市)+/, '')
                }));
                that.setData({
                    groupList: groupList,
                    TabCur: 0 // 重置当前选中的tab
                });
                firstGroupId = res.data[0].id;
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
        const postCode = item.dataset.item.code
        wx.navigateTo({
            url: '/pages/groupPostDetail/groupPostDetail?item=' + postCode
        });
    },
    getPostsList() {
        let that = this;
        let tempPostsList = [];
        return tempPostsList;
    },
    // onSearchInput: function (e) {
    //     this.setData({
    //         searchText: e.detail.value
    //     });
    // },
    doSearch: function (e) {
        const searchText = this.data.searchText;
        wx.showLoading({
            title: '搜索中...',
            mask: true
        });
        this.searchPosts(searchText);
    },

    loadMore: function () {
        if (this.data.isLoading || !this.data.hasMore) {
            return;
        }

        // 获取当前选中群组的id
        const currentGroupId = this.data.groupList[this.data.TabCur].id;

        this.setData({
            isLoading: true
        });
        this.getGroupPostListData(currentGroupId);
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
    },
    onPullDownRefresh: function () {
        // 重置页面数据
        this.setData({
            page: 1,
            pageSize: 10,
            postsList: [],
            isLoading: false,
            hasMore: true
        });
        
        // 重新获取群组列表和帖子数据
        this.getJoinGroupList();
        
        // 延迟停止下拉刷新动画，给用户更好的视觉反馈
        setTimeout(() => {
            wx.stopPullDownRefresh();
        }, 1000);
    }
})
