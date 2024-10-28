package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.QuanerPost;
import tech.wetech.weshop.wechat.dal.po.QuanerPostExample;
import tech.wetech.weshop.wechat.dal.po.QuanerPostWithBLOBs;

public interface QuanerPostMapper {
    long countByExample(QuanerPostExample example);

    int deleteByExample(QuanerPostExample example);

    int deleteByPrimaryKey(Short id);

    int insert(QuanerPostWithBLOBs record);

    int insertSelective(QuanerPostWithBLOBs record);

    List<QuanerPostWithBLOBs> selectByExampleWithBLOBs(QuanerPostExample example);

    List<QuanerPost> selectByExample(QuanerPostExample example);

    QuanerPostWithBLOBs selectByPrimaryKey(Short id);

    int updateByExampleSelective(@Param("record") QuanerPostWithBLOBs record, @Param("example") QuanerPostExample example);

    int updateByExampleWithBLOBs(@Param("record") QuanerPostWithBLOBs record, @Param("example") QuanerPostExample example);

    int updateByExample(@Param("record") QuanerPost record, @Param("example") QuanerPostExample example);

    int updateByPrimaryKeySelective(QuanerPostWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(QuanerPostWithBLOBs record);

    int updateByPrimaryKey(QuanerPost record);
}