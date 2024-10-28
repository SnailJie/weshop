package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopRelatedGoods;
import tech.wetech.weshop.wechat.dal.po.WeshopRelatedGoodsExample;

public interface WeshopRelatedGoodsMapper {
    long countByExample(WeshopRelatedGoodsExample example);

    int deleteByExample(WeshopRelatedGoodsExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopRelatedGoods record);

    int insertSelective(WeshopRelatedGoods record);

    List<WeshopRelatedGoods> selectByExample(WeshopRelatedGoodsExample example);

    WeshopRelatedGoods selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopRelatedGoods record, @Param("example") WeshopRelatedGoodsExample example);

    int updateByExample(@Param("record") WeshopRelatedGoods record, @Param("example") WeshopRelatedGoodsExample example);

    int updateByPrimaryKeySelective(WeshopRelatedGoods record);

    int updateByPrimaryKey(WeshopRelatedGoods record);
}