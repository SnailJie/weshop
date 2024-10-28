package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopGoodsSpecification;
import tech.wetech.weshop.wechat.dal.po.WeshopGoodsSpecificationExample;

public interface WeshopGoodsSpecificationMapper {
    long countByExample(WeshopGoodsSpecificationExample example);

    int deleteByExample(WeshopGoodsSpecificationExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopGoodsSpecification record);

    int insertSelective(WeshopGoodsSpecification record);

    List<WeshopGoodsSpecification> selectByExample(WeshopGoodsSpecificationExample example);

    WeshopGoodsSpecification selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopGoodsSpecification record, @Param("example") WeshopGoodsSpecificationExample example);

    int updateByExample(@Param("record") WeshopGoodsSpecification record, @Param("example") WeshopGoodsSpecificationExample example);

    int updateByPrimaryKeySelective(WeshopGoodsSpecification record);

    int updateByPrimaryKey(WeshopGoodsSpecification record);
}