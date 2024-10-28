package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopComment;
import tech.wetech.weshop.wechat.dal.po.WeshopCommentExample;

public interface WeshopCommentMapper {
    long countByExample(WeshopCommentExample example);

    int deleteByExample(WeshopCommentExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopComment record);

    int insertSelective(WeshopComment record);

    List<WeshopComment> selectByExample(WeshopCommentExample example);

    WeshopComment selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopComment record, @Param("example") WeshopCommentExample example);

    int updateByExample(@Param("record") WeshopComment record, @Param("example") WeshopCommentExample example);

    int updateByPrimaryKeySelective(WeshopComment record);

    int updateByPrimaryKey(WeshopComment record);
}