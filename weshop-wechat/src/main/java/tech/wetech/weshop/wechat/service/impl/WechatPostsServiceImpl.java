package tech.wetech.weshop.wechat.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.wetech.weshop.common.utils.Result;
import tech.wetech.weshop.goods.api.PostsApi;
import tech.wetech.weshop.goods.po.Posts;
import tech.wetech.weshop.wechat.converter.PostsConvert;
import tech.wetech.weshop.wechat.dal.mapper.QuanerPostMapper;
import tech.wetech.weshop.wechat.dal.po.QuanerPostExample;
import tech.wetech.weshop.wechat.dal.po.QuanerPostWithBLOBs;
import tech.wetech.weshop.wechat.dto.PostsSearchQuery;
import tech.wetech.weshop.wechat.service.WechatPostService;
import tech.wetech.weshop.wechat.vo.PostsVO;

import java.util.List;

@Service
public class WechatPostsServiceImpl implements WechatPostService {

    private static final Logger LOG = LoggerFactory.getLogger(WechatPostsServiceImpl.class);

    @Autowired
    private PostsApi postsApi;

    @Autowired
    private QuanerPostMapper mapper;

    @Override
    public PostsVO queryPostDetail(Integer id) {
        Result<Posts> postDetail = postsApi.queryById(id);
        LOG.info("query detail :{}", postDetail);
        if (postDetail.isSuccess()) {
            return PostsConvert.convert(postDetail.getData());
        }
        return null;
    }

    @Override
    public List<PostsVO> queryList(PostsSearchQuery postsSearchQuery) {
        QuanerPostExample example =new QuanerPostExample();
        Short id = 1;
        QuanerPostWithBLOBs result = mapper.selectByPrimaryKey(id);
return null;
//        return PostsConvert.convertList(result);

    }

    @Override
    public Boolean submitPost(PostsVO posts) {
        System.out.println("xxxxx");
        return null;
    }
}
