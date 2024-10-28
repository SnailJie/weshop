package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopRegion;
import tech.wetech.weshop.wechat.dal.po.WeshopRegionExample;

public interface WeshopRegionMapper {
    long countByExample(WeshopRegionExample example);

    int deleteByExample(WeshopRegionExample example);

    int deleteByPrimaryKey(Short id);

    int insert(WeshopRegion record);

    int insertSelective(WeshopRegion record);

    List<WeshopRegion> selectByExample(WeshopRegionExample example);

    WeshopRegion selectByPrimaryKey(Short id);

    int updateByExampleSelective(@Param("record") WeshopRegion record, @Param("example") WeshopRegionExample example);

    int updateByExample(@Param("record") WeshopRegion record, @Param("example") WeshopRegionExample example);

    int updateByPrimaryKeySelective(WeshopRegion record);

    int updateByPrimaryKey(WeshopRegion record);
}