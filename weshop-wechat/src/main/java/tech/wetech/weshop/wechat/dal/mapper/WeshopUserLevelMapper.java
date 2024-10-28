package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopUserLevel;
import tech.wetech.weshop.wechat.dal.po.WeshopUserLevelExample;

public interface WeshopUserLevelMapper {
    long countByExample(WeshopUserLevelExample example);

    int deleteByExample(WeshopUserLevelExample example);

    int deleteByPrimaryKey(Byte id);

    int insert(WeshopUserLevel record);

    int insertSelective(WeshopUserLevel record);

    List<WeshopUserLevel> selectByExample(WeshopUserLevelExample example);

    WeshopUserLevel selectByPrimaryKey(Byte id);

    int updateByExampleSelective(@Param("record") WeshopUserLevel record, @Param("example") WeshopUserLevelExample example);

    int updateByExample(@Param("record") WeshopUserLevel record, @Param("example") WeshopUserLevelExample example);

    int updateByPrimaryKeySelective(WeshopUserLevel record);

    int updateByPrimaryKey(WeshopUserLevel record);
}