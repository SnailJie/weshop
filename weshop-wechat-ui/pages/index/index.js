const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');

//获取应用实例
const app = getApp()
Page({
    // data: {
    //     newGoodsList: [],
    //     hotGoodsList: [],
    //     topicList: [],
    //     brandList: [],
    //     floorGoods: [],
    //     bannerList: [],
    //     channelList: [],
    //     postsList: []
    // },
    /**
   * 页面的初始数据
   */
  data: {
    PageCur: 'basics',
    TabCur: 0,
    scrollLeft: 0,
    navlist: ["推荐", "旅游", "穿搭", "影视", "动漫", "游戏"],
    allfallList: [
      {
        imgUrl:"/image/疯狂暗黑圈.webp",
        title:"玫瑰的故事🌹再次被刘亦菲的颜值所震撼❗",
        headUrl:"/image/疯狂暗黑圈-head.webp",
        userName:"疯狂暗黑圈",
        likeNum:9,
        isLike:1,
        category:[0,2,3]
      },
      {
        imgUrl:"/image/阳光真好_1_章若楠_来自小红书网页版.jpg",
        title:"阳光真好☀️",
        headUrl:"/image/章若楠.jpg",
        userName:"章若楠",
        likeNum:9,
        isLike:1,
        category:[2,3]
      },
      {
        imgUrl:"/image/角色介绍——「龙女妙变」·希格雯_1_原神_来自小红书网页版.jpg",
        title:"角色介绍——「龙女妙变」·希格雯_1_原神",
        headUrl:"/image/原神.webp",
        userName:"原神",
        likeNum:'2.3w',
        isLike:0,
        category:[4,5]
      },
      {
        imgUrl:"/image/比起景德镇，我更爱这个上榜国家地理的小城_1_热爱生活的高高_来自小红书网页版.jpg",
        title:"比起景德镇，我更爱这个上榜国家地理的小城",
        headUrl:"/image/热爱生活的高高.jpg",
        userName:"热爱生活的高高",
        likeNum:2365,
        isLike:0,
        category:[1]
      },
      {
        imgUrl:"/image/适合穷游的9大热门城市姐妹们想去_1_樱桃丸子_来自小红书网页版.jpg",
        title:"适合穷游的9⃣️大热门城市✈️姐妹们想去",
        headUrl:"/image/樱桃丸子.jpg",
        userName:"樱桃丸子",
        likeNum:9864,
        isLike:0,
        category:[1]
      },
      {
        imgUrl:"/image/_1_啊三年高考（冲刺版_来自小红书网页版.jpg",
        title:"",
        headUrl:"/image/啊三年高考（冲刺版.jpg",
        userName:"啊三年高考（冲刺版",
        likeNum:986,
        isLike:0,
        category:[1]
      },
      {
        imgUrl:"/image/我的梦中情岛，现实版塞尔达！！！_1_董北北_来自小红书网页版.jpg",
        title:"我的梦中情岛，现实版塞尔达！！！",
        headUrl:"/image/董北北.jpg",
        userName:"董北北",
        likeNum:'1.2w',
        isLike:1,
        category:[0,1]
      },
      {
        imgUrl:"/image/_1_芙芙家的狗_来自小红书网页版.jpg",
        title:"",
        headUrl:"/image/芙芙家的狗.jpg",
        userName:"芙芙家的狗",
        likeNum:666,
        isLike:1,
        category:[2]
      },
      {
        imgUrl:"/image/165-180男生夏季穿搭_阳光干净少年感_1_GT穿搭_来自小红书网页版.jpg",
        title:"165-180男生夏季穿搭_阳光干净少年感",
        headUrl:"/image/GT穿搭.jpg",
        userName:"GT穿搭",
        likeNum:4578,
        isLike:0,
        category:[0,2]
      },
      {
        imgUrl:"/image/情侣对镜拍，520穿搭_1_小酷酷嘚安可_来自小红书网页版.jpg",
        title:"情侣对镜拍，520穿搭",
        headUrl:"/image/小酷酷嘚安可.jpg",
        userName:"小酷酷嘚安可",
        likeNum:7584,
        isLike:1,
        category:[2]
      },
      {
        imgUrl:"/image/甜妹夏季甜美穿搭1_发呆小萌_来自小红书网页版.jpg",
        title:"4️⃣0️⃣套🧼｜甜妹夏季甜美穿搭🌊",
        headUrl:"/image/发呆小萌.jpg",
        userName:"发呆小萌",
        likeNum:6558,
        isLike:0,
        category:[2]
      },
      {
        imgUrl:"/image/壁纸_时透无一郎_霞之呼吸_1_MacArthur｜五星壁纸_来自小红书网页版.jpg",
        title:"壁纸_时透无一郎_霞之呼吸",
        headUrl:"/image/MacArthur｜五星壁纸.jpg",
        userName:"MacArthur｜五星壁纸",
        likeNum:7643,
        isLike:0,
        category:[4]
      },
      {
        imgUrl:"/image/真的很喜欢一些西装利_1_口水巾_来自小红书网页版.jpg",
        title:"陪伴了我十年 真的很喜欢一些西装利",
        headUrl:"/image/口水巾.jpg",
        userName:"口水巾",
        likeNum:'2.6w',
        isLike:1,
        category:[0,4]
      },
      {
        imgUrl:"/image/哥几个又来照镜子了？_1_你到底懂不懂什么叫青春啊_来自小红书网页版.jpg",
        title:"哥几个又来照镜子了？",
        headUrl:"/image/你到底懂不懂什么叫青春啊.jpg",
        userName:"你到底懂不懂什么叫青春啊",
        likeNum:'4372',
        isLike:0,
        category:[0,4]
      },
      {
        imgUrl:"/image/六花生日快乐_1_酢乙女爱_来自小红书网页版.jpg",
        title:"陪伴了我十年 六花生日快乐",
        headUrl:"/image/酢乙女爱.jpg",
        userName:"酢乙女爱",
        likeNum:'8473',
        isLike:1,
        category:[4]
      },
      {
        imgUrl:"/image/陪伴了我十年 此片是否能算满意答卷_1_月杉_来自小红书网页版.jpg",
        title:"陪伴了我十年 此片是否能算满意答卷",
        headUrl:"/image/月杉.jpg",
        userName:"月杉",
        likeNum:'6.6w',
        isLike:1,
        category:[0,4]
      },
    ]
  },
  tabSelect(e) {
    let list = this.data.allfallList;
    let categoryId = e.currentTarget.dataset.id;
    let newList = [];
    for(let index = 0;index < list.length;index++){
      if(!(list[index].category.indexOf(categoryId) == -1)){
          newList.push(list[index])
      }
  }

    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
      fallList:newList
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
        // this.getIndexData();
        let list = this.data.allfallList;
        let newList = []
        for(let index = 0;index < list.length;index++){
            if(!(list[index].category.indexOf(0) == -1)){
                newList.push(list[index])
            }
        }
        this.setData({
          fallList:newList
        })
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