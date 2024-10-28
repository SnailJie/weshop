package tech.wetech.weshop.wechat.vo;

import lombok.Getter;
import lombok.Setter;
import tech.wetech.weshop.order.enums.OrderStatusEnum;
import tech.wetech.weshop.order.enums.PayStatusEnum;
import tech.wetech.weshop.order.po.Order;
import tech.wetech.weshop.order.po.OrderGoods;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class PostsVO {

    private Integer id;

    private Date gmtCreate;

    private Date gmtModify;

    private String code;

    private String title;

    private String content;

    private String creatorId;

    private String picList;

    /**
     * 收藏数量
     */
    private Integer collectCnt;

    /**
     * 点赞数量
     */
    private Integer likeCnt;


    private Integer isDelete;

}
