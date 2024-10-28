package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopFootprint;
import tech.wetech.weshop.wechat.dal.po.WeshopFootprintExample;

public interface WeshopFootprintMapper {
    long countByExample(WeshopFootprintExample example);

    int deleteByExample(WeshopFootprintExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopFootprint record);

    int insertSelective(WeshopFootprint record);

    List<WeshopFootprint> selectByExample(WeshopFootprintExample example);

    WeshopFootprint selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopFootprint record, @Param("example") WeshopFootprintExample example);

    int updateByExample(@Param("record") WeshopFootprint record, @Param("example") WeshopFootprintExample example);

    int updateByPrimaryKeySelective(WeshopFootprint record);

    int updateByPrimaryKey(WeshopFootprint record);
}