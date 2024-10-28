package tech.wetech.weshop.wechat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tech.wetech.weshop.common.controller.BaseController;
import tech.wetech.weshop.common.utils.Result;
import tech.wetech.weshop.wechat.dto.PostsSearchQuery;
import tech.wetech.weshop.wechat.service.WechatPostService;
import tech.wetech.weshop.wechat.vo.*;

import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * 帖子服务
 */
@RestController
@RequestMapping("/wechat/posts")
@Validated
public class WechatPostsController extends BaseController {


    @Autowired
    private WechatPostService postService;


    /**
     * @return
     */
    @PostMapping("/submit")
    public Result<Boolean> newPost(@Validated @RequestBody PostsVO posts) {
        return Result.success(postService.submitPost(posts));
    }


    /**
     * 查询帖子列表
     *
     * @param postsSearchQuery
     * @return
     */
    @GetMapping("/list")
    public Result<List<PostsVO>> queryPostPageInfoList(PostsSearchQuery postsSearchQuery) {
        return Result.success(postService.queryList(postsSearchQuery));
    }

    @GetMapping("/detail")
    public Result<PostsVO> queryPostDetail(@RequestParam("id") @NotNull Integer id) {
        return Result.success(postService.queryPostDetail(id));
    }


}
