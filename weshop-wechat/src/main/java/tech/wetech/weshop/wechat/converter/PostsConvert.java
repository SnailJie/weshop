package tech.wetech.weshop.wechat.converter;

import com.google.common.collect.Lists;
import tech.wetech.weshop.goods.po.Posts;
import tech.wetech.weshop.wechat.dal.po.QuanerPostWithBLOBs;
import tech.wetech.weshop.wechat.vo.PostsVO;

import java.util.List;

public class PostsConvert {

    public static PostsVO convert(Posts data) {
        PostsVO to = new PostsVO();
        to.setCode(data.getCode());
        to.setCollectCnt(data.getCollectCnt());
        to.setLikeCnt(data.getLikeCnt());
        to.setTitle(data.getTitle());
        String[] fileList = data.getPicList().split(";");
        to.setPicList(fileList[0]);
        to.setGmtCreate(data.getGmtCreate());
        to.setGmtModify(data.getGmtModify());
        to.setCreatorId(data.getCreatorId());
        return to;
    }

    public static PostsVO convert(QuanerPostWithBLOBs data) {
        PostsVO to = new PostsVO();
        to.setCode(data.getCode());
        to.setCollectCnt(data.getCollectCnt());
        to.setLikeCnt(data.getLikeCnt());
        to.setTitle(data.getTitle());
        String[] fileList = data.getPicList().split(";");
        to.setPicList(fileList[0]);
        to.setGmtCreate(data.getGmtCreate());
        to.setGmtModify(data.getGmtModify());
        to.setCreatorId(data.getCreatorId());
        return to;
    }

    public static List<PostsVO> convertList(List<QuanerPostWithBLOBs> data) {
        List<PostsVO> toList = Lists.newArrayList();
        data.forEach(item -> toList.add(convert(item)));
        return toList;
    }



}
