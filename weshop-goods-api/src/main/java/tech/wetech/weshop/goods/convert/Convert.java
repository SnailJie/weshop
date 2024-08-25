package tech.wetech.weshop.goods.convert;

import tech.wetech.weshop.goods.po.post.PostIndexModel;
import tech.wetech.weshop.goods.po.post.Posts;

public class Convert {

    public static PostIndexModel convert(Posts from) {
        PostIndexModel to = new PostIndexModel();
        to.setCode(from.getCode());
        to.setCollectCnt(from.getCollectCnt());
        to.setLikeCnt(from.getLikeCnt());
        to.setSupplierId(from.getSupplierId());
        to.setTitle(from.getTitle());

        String[] fileList = from.getPicList().split(";");
        to.setIndexPicURL(fileList[0]);
        to.setGmtCreate(from.getGmtCreate());
        to.setGmtModify(from.getGmtModify());
        to.setCreatorId(from.getCreatorId());
        return to;

    }
}
