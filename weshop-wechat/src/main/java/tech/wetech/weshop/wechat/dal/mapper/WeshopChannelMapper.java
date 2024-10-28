package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopChannel;
import tech.wetech.weshop.wechat.dal.po.WeshopChannelExample;

public interface WeshopChannelMapper {
    long countByExample(WeshopChannelExample example);

    int deleteByExample(WeshopChannelExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopChannel record);

    int insertSelective(WeshopChannel record);

    List<WeshopChannel> selectByExample(WeshopChannelExample example);

    WeshopChannel selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopChannel record, @Param("example") WeshopChannelExample example);

    int updateByExample(@Param("record") WeshopChannel record, @Param("example") WeshopChannelExample example);

    int updateByPrimaryKeySelective(WeshopChannel record);

    int updateByPrimaryKey(WeshopChannel record);
}