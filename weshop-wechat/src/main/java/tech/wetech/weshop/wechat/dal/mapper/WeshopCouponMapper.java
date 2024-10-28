package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopCoupon;
import tech.wetech.weshop.wechat.dal.po.WeshopCouponExample;

public interface WeshopCouponMapper {
    long countByExample(WeshopCouponExample example);

    int deleteByExample(WeshopCouponExample example);

    int deleteByPrimaryKey(Short id);

    int insert(WeshopCoupon record);

    int insertSelective(WeshopCoupon record);

    List<WeshopCoupon> selectByExample(WeshopCouponExample example);

    WeshopCoupon selectByPrimaryKey(Short id);

    int updateByExampleSelective(@Param("record") WeshopCoupon record, @Param("example") WeshopCouponExample example);

    int updateByExample(@Param("record") WeshopCoupon record, @Param("example") WeshopCouponExample example);

    int updateByPrimaryKeySelective(WeshopCoupon record);

    int updateByPrimaryKey(WeshopCoupon record);
}