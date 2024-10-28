package tech.wetech.weshop.goods.fallback;

import org.springframework.stereotype.Component;
import tech.wetech.weshop.common.fallback.ApiFallback;
import tech.wetech.weshop.goods.api.PostsApi;
import tech.wetech.weshop.goods.po.Posts;

@Component
public class PostsApiFallback extends ApiFallback<Posts> implements PostsApi {
}
