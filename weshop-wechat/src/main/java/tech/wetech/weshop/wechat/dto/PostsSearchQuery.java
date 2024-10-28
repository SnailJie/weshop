package tech.wetech.weshop.wechat.dto;




public class PostsSearchQuery extends PageQuery {

    private String code;


    private String keyword;

    private Boolean newly;

    private Boolean hot;

    private String sort;

    private String order;


    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public Boolean getNewly() {
        return newly;
    }

    public void setNewly(Boolean newly) {
        this.newly = newly;
    }

    public Boolean getHot() {
        return hot;
    }

    public void setHot(Boolean hot) {
        this.hot = hot;
    }

    public String getSort() {
        return sort;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

}
