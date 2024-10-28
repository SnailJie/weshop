package tech.wetech.weshop.wechat.service;

import tech.wetech.weshop.wechat.dto.PostsSearchQuery;
import tech.wetech.weshop.wechat.vo.PostsVO;

import java.util.List;

public interface WechatPostService {

    PostsVO queryPostDetail(Integer id);

    List<PostsVO> queryList(PostsSearchQuery postsSearchQuery);

    Boolean submitPost(PostsVO posts);
}
