package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopUserCoupon;
import tech.wetech.weshop.wechat.dal.po.WeshopUserCouponExample;

public interface WeshopUserCouponMapper {
    long countByExample(WeshopUserCouponExample example);

    int deleteByExample(WeshopUserCouponExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopUserCoupon record);

    int insertSelective(WeshopUserCoupon record);

    List<WeshopUserCoupon> selectByExample(WeshopUserCouponExample example);

    WeshopUserCoupon selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopUserCoupon record, @Param("example") WeshopUserCouponExample example);

    int updateByExample(@Param("record") WeshopUserCoupon record, @Param("example") WeshopUserCouponExample example);

    int updateByPrimaryKeySelective(WeshopUserCoupon record);

    int updateByPrimaryKey(WeshopUserCoupon record);
}