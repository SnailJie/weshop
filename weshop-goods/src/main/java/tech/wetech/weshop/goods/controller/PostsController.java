package tech.wetech.weshop.goods.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.wetech.weshop.common.api.BaseApi;
import tech.wetech.weshop.goods.api.PostsApi;
import tech.wetech.weshop.goods.po.Posts;

@RestController
@RequestMapping("/posts")
public class PostsController extends BaseApi<Posts> implements PostsApi {
}
