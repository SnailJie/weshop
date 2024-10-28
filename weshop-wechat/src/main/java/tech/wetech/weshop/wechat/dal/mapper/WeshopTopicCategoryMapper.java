package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopTopicCategory;
import tech.wetech.weshop.wechat.dal.po.WeshopTopicCategoryExample;

public interface WeshopTopicCategoryMapper {
    long countByExample(WeshopTopicCategoryExample example);

    int deleteByExample(WeshopTopicCategoryExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopTopicCategory record);

    int insertSelective(WeshopTopicCategory record);

    List<WeshopTopicCategory> selectByExample(WeshopTopicCategoryExample example);

    WeshopTopicCategory selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopTopicCategory record, @Param("example") WeshopTopicCategoryExample example);

    int updateByExample(@Param("record") WeshopTopicCategory record, @Param("example") WeshopTopicCategoryExample example);

    int updateByPrimaryKeySelective(WeshopTopicCategory record);

    int updateByPrimaryKey(WeshopTopicCategory record);
}