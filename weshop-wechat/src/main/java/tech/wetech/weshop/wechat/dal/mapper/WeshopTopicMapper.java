package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopTopic;
import tech.wetech.weshop.wechat.dal.po.WeshopTopicExample;

public interface WeshopTopicMapper {
    long countByExample(WeshopTopicExample example);

    int deleteByExample(WeshopTopicExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopTopic record);

    int insertSelective(WeshopTopic record);

    List<WeshopTopic> selectByExampleWithBLOBs(WeshopTopicExample example);

    List<WeshopTopic> selectByExample(WeshopTopicExample example);

    WeshopTopic selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopTopic record, @Param("example") WeshopTopicExample example);

    int updateByExampleWithBLOBs(@Param("record") WeshopTopic record, @Param("example") WeshopTopicExample example);

    int updateByExample(@Param("record") WeshopTopic record, @Param("example") WeshopTopicExample example);

    int updateByPrimaryKeySelective(WeshopTopic record);

    int updateByPrimaryKeyWithBLOBs(WeshopTopic record);

    int updateByPrimaryKey(WeshopTopic record);
}