package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopGoods;
import tech.wetech.weshop.wechat.dal.po.WeshopGoodsExample;

public interface WeshopGoodsMapper {
    long countByExample(WeshopGoodsExample example);

    int deleteByExample(WeshopGoodsExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopGoods record);

    int insertSelective(WeshopGoods record);

    List<WeshopGoods> selectByExampleWithBLOBs(WeshopGoodsExample example);

    List<WeshopGoods> selectByExample(WeshopGoodsExample example);

    WeshopGoods selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopGoods record, @Param("example") WeshopGoodsExample example);

    int updateByExampleWithBLOBs(@Param("record") WeshopGoods record, @Param("example") WeshopGoodsExample example);

    int updateByExample(@Param("record") WeshopGoods record, @Param("example") WeshopGoodsExample example);

    int updateByPrimaryKeySelective(WeshopGoods record);

    int updateByPrimaryKeyWithBLOBs(WeshopGoods record);

    int updateByPrimaryKey(WeshopGoods record);
}