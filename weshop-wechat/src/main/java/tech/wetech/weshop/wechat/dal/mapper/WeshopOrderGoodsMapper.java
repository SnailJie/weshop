package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopOrderGoods;
import tech.wetech.weshop.wechat.dal.po.WeshopOrderGoodsExample;

public interface WeshopOrderGoodsMapper {
    long countByExample(WeshopOrderGoodsExample example);

    int deleteByExample(WeshopOrderGoodsExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopOrderGoods record);

    int insertSelective(WeshopOrderGoods record);

    List<WeshopOrderGoods> selectByExampleWithBLOBs(WeshopOrderGoodsExample example);

    List<WeshopOrderGoods> selectByExample(WeshopOrderGoodsExample example);

    WeshopOrderGoods selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopOrderGoods record, @Param("example") WeshopOrderGoodsExample example);

    int updateByExampleWithBLOBs(@Param("record") WeshopOrderGoods record, @Param("example") WeshopOrderGoodsExample example);

    int updateByExample(@Param("record") WeshopOrderGoods record, @Param("example") WeshopOrderGoodsExample example);

    int updateByPrimaryKeySelective(WeshopOrderGoods record);

    int updateByPrimaryKeyWithBLOBs(WeshopOrderGoods record);

    int updateByPrimaryKey(WeshopOrderGoods record);
}