package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopSpecification;
import tech.wetech.weshop.wechat.dal.po.WeshopSpecificationExample;

public interface WeshopSpecificationMapper {
    long countByExample(WeshopSpecificationExample example);

    int deleteByExample(WeshopSpecificationExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopSpecification record);

    int insertSelective(WeshopSpecification record);

    List<WeshopSpecification> selectByExample(WeshopSpecificationExample example);

    WeshopSpecification selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopSpecification record, @Param("example") WeshopSpecificationExample example);

    int updateByExample(@Param("record") WeshopSpecification record, @Param("example") WeshopSpecificationExample example);

    int updateByPrimaryKeySelective(WeshopSpecification record);

    int updateByPrimaryKey(WeshopSpecification record);
}