package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopGoodsAttribute;
import tech.wetech.weshop.wechat.dal.po.WeshopGoodsAttributeExample;

public interface WeshopGoodsAttributeMapper {
    long countByExample(WeshopGoodsAttributeExample example);

    int deleteByExample(WeshopGoodsAttributeExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopGoodsAttribute record);

    int insertSelective(WeshopGoodsAttribute record);

    List<WeshopGoodsAttribute> selectByExampleWithBLOBs(WeshopGoodsAttributeExample example);

    List<WeshopGoodsAttribute> selectByExample(WeshopGoodsAttributeExample example);

    WeshopGoodsAttribute selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopGoodsAttribute record, @Param("example") WeshopGoodsAttributeExample example);

    int updateByExampleWithBLOBs(@Param("record") WeshopGoodsAttribute record, @Param("example") WeshopGoodsAttributeExample example);

    int updateByExample(@Param("record") WeshopGoodsAttribute record, @Param("example") WeshopGoodsAttributeExample example);

    int updateByPrimaryKeySelective(WeshopGoodsAttribute record);

    int updateByPrimaryKeyWithBLOBs(WeshopGoodsAttribute record);

    int updateByPrimaryKey(WeshopGoodsAttribute record);
}