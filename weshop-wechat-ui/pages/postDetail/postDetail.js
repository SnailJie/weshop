Page({
  data: {
    title: '详情页',
    postDetail: {
      imageUrl: "/image/疯狂暗黑圈.webp",
      title: "玫瑰的故事🌹再次被刘亦菲的颜值所震撼❗",
      content: "刘亦菲确实是不老女神",
      headUrl: "/image/疯狂暗黑圈-head.webp",
      userName: "疯狂暗黑圈",
      likeNum: 9,
      isLike: 1,
      gmtCreate: "09-11",
      commentList: [
        { id: 1,
          content: "你说的都对",
          createTime: "09-11",
          userInfo:{
            nickname: "疯狂暗黑圈",
            avatar: "/image/疯狂暗黑圈-head.webp",
          },
         
        },
        { id: 2,
          content: "这个帖子是我以前看过的",
          createTime: "09-13",
          userInfo:{
            nickname: "巴啦啦小魔仙",
            avatar: "/image/疯狂暗黑圈-head.webp",
          },
          
        }
      ]
    }
  },
  likePost() {  
    console.log('------xxxlikePostxxx')
   
  } ,

   }
);