package tech.wetech.weshop.wechat.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PageQuery {

    private String sort;

    private String order;

    /**
     * 页码，从1开始
     */
    private int pageNum;
    /**
     * 页面大小
     */
    private int pageSize;



}
