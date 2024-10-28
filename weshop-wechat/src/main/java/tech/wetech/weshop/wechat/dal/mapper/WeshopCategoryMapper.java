package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopCategory;
import tech.wetech.weshop.wechat.dal.po.WeshopCategoryExample;

public interface WeshopCategoryMapper {
    long countByExample(WeshopCategoryExample example);

    int deleteByExample(WeshopCategoryExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopCategory record);

    int insertSelective(WeshopCategory record);

    List<WeshopCategory> selectByExample(WeshopCategoryExample example);

    WeshopCategory selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopCategory record, @Param("example") WeshopCategoryExample example);

    int updateByExample(@Param("record") WeshopCategory record, @Param("example") WeshopCategoryExample example);

    int updateByPrimaryKeySelective(WeshopCategory record);

    int updateByPrimaryKey(WeshopCategory record);
}