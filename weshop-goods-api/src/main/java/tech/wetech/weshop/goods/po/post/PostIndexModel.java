package tech.wetech.weshop.goods.po.post;


import java.util.Date;


/**
 * 首页帖子摘要模型
 */
public class PostIndexModel {


    private Date gmtCreate;

    private Date gmtModify;

    private String code;

    private String title;

    private String creatorId;


    private String indexPicURL;

    private String supplierId;

    private Integer collectCnt;

    private Integer likeCnt;

    public Date getGmtCreate() {
        return gmtCreate;
    }

    public void setGmtCreate(Date gmtCreate) {
        this.gmtCreate = gmtCreate;
    }

    public Date getGmtModify() {
        return gmtModify;
    }

    public void setGmtModify(Date gmtModify) {
        this.gmtModify = gmtModify;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(String creatorId) {
        this.creatorId = creatorId;
    }

    public String getIndexPicURL() {
        return indexPicURL;
    }

    public void setIndexPicURL(String indexPicURL) {
        this.indexPicURL = indexPicURL;
    }

    public String getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(String supplierId) {
        this.supplierId = supplierId;
    }

    public Integer getCollectCnt() {
        return collectCnt;
    }

    public void setCollectCnt(Integer collectCnt) {
        this.collectCnt = collectCnt;
    }

    public Integer getLikeCnt() {
        return likeCnt;
    }

    public void setLikeCnt(Integer likeCnt) {
        this.likeCnt = likeCnt;
    }
}
