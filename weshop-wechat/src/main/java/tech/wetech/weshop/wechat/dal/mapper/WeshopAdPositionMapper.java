package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopAdPosition;
import tech.wetech.weshop.wechat.dal.po.WeshopAdPositionExample;

public interface WeshopAdPositionMapper {
    long countByExample(WeshopAdPositionExample example);

    int deleteByExample(WeshopAdPositionExample example);

    int deleteByPrimaryKey(Byte id);

    int insert(WeshopAdPosition record);

    int insertSelective(WeshopAdPosition record);

    List<WeshopAdPosition> selectByExample(WeshopAdPositionExample example);

    WeshopAdPosition selectByPrimaryKey(Byte id);

    int updateByExampleSelective(@Param("record") WeshopAdPosition record, @Param("example") WeshopAdPositionExample example);

    int updateByExample(@Param("record") WeshopAdPosition record, @Param("example") WeshopAdPositionExample example);

    int updateByPrimaryKeySelective(WeshopAdPosition record);

    int updateByPrimaryKey(WeshopAdPosition record);
}