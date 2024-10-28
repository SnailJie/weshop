package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopFeedback;
import tech.wetech.weshop.wechat.dal.po.WeshopFeedbackExample;

public interface WeshopFeedbackMapper {
    long countByExample(WeshopFeedbackExample example);

    int deleteByExample(WeshopFeedbackExample example);

    int deleteByPrimaryKey(Integer msgId);

    int insert(WeshopFeedback record);

    int insertSelective(WeshopFeedback record);

    List<WeshopFeedback> selectByExampleWithBLOBs(WeshopFeedbackExample example);

    List<WeshopFeedback> selectByExample(WeshopFeedbackExample example);

    WeshopFeedback selectByPrimaryKey(Integer msgId);

    int updateByExampleSelective(@Param("record") WeshopFeedback record, @Param("example") WeshopFeedbackExample example);

    int updateByExampleWithBLOBs(@Param("record") WeshopFeedback record, @Param("example") WeshopFeedbackExample example);

    int updateByExample(@Param("record") WeshopFeedback record, @Param("example") WeshopFeedbackExample example);

    int updateByPrimaryKeySelective(WeshopFeedback record);

    int updateByPrimaryKeyWithBLOBs(WeshopFeedback record);

    int updateByPrimaryKey(WeshopFeedback record);
}