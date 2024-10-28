package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopAttributeCategory;
import tech.wetech.weshop.wechat.dal.po.WeshopAttributeCategoryExample;

public interface WeshopAttributeCategoryMapper {
    long countByExample(WeshopAttributeCategoryExample example);

    int deleteByExample(WeshopAttributeCategoryExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopAttributeCategory record);

    int insertSelective(WeshopAttributeCategory record);

    List<WeshopAttributeCategory> selectByExample(WeshopAttributeCategoryExample example);

    WeshopAttributeCategory selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopAttributeCategory record, @Param("example") WeshopAttributeCategoryExample example);

    int updateByExample(@Param("record") WeshopAttributeCategory record, @Param("example") WeshopAttributeCategoryExample example);

    int updateByPrimaryKeySelective(WeshopAttributeCategory record);

    int updateByPrimaryKey(WeshopAttributeCategory record);
}