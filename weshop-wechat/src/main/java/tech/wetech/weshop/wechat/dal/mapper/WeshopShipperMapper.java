package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopShipper;
import tech.wetech.weshop.wechat.dal.po.WeshopShipperExample;

public interface WeshopShipperMapper {
    long countByExample(WeshopShipperExample example);

    int deleteByExample(WeshopShipperExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopShipper record);

    int insertSelective(WeshopShipper record);

    List<WeshopShipper> selectByExample(WeshopShipperExample example);

    WeshopShipper selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopShipper record, @Param("example") WeshopShipperExample example);

    int updateByExample(@Param("record") WeshopShipper record, @Param("example") WeshopShipperExample example);

    int updateByPrimaryKeySelective(WeshopShipper record);

    int updateByPrimaryKey(WeshopShipper record);
}