App({
	onLaunch: function () {
		try {
			this.globalData.userInfo = JSON.parse(wx.getStorageSync('userInfo'));
			this.globalData.token = wx.getStorageSync('token');
		} catch (e) {
			console.log(e);
    }
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;  
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
	},

	globalData: {
		userInfo: {
			nickname: '点击登录',
			avatar: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png'
		},
		token: '',
	}
})
