package tech.wetech.weshop.goods.api;

import org.springframework.cloud.openfeign.FeignClient;
import tech.wetech.weshop.common.api.Api;
import tech.wetech.weshop.goods.fallback.GoodsApiFallback;
import tech.wetech.weshop.goods.fallback.PostsApiFallback;
import tech.wetech.weshop.goods.po.Goods;
import tech.wetech.weshop.goods.po.post.Posts;

/**
 * @author cjbi@outlook.com
 */
@FeignClient(value = "weshop-goods", path = "posts", fallback = PostsApiFallback.class)
public interface PostsApi extends Api<Posts> {
}
