package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopAddress;
import tech.wetech.weshop.wechat.dal.po.WeshopAddressExample;

public interface WeshopAddressMapper {
    long countByExample(WeshopAddressExample example);

    int deleteByExample(WeshopAddressExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopAddress record);

    int insertSelective(WeshopAddress record);

    List<WeshopAddress> selectByExample(WeshopAddressExample example);

    WeshopAddress selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopAddress record, @Param("example") WeshopAddressExample example);

    int updateByExample(@Param("record") WeshopAddress record, @Param("example") WeshopAddressExample example);

    int updateByPrimaryKeySelective(WeshopAddress record);

    int updateByPrimaryKey(WeshopAddress record);
}