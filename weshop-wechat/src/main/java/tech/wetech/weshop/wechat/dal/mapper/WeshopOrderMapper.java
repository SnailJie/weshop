package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopOrder;
import tech.wetech.weshop.wechat.dal.po.WeshopOrderExample;

public interface WeshopOrderMapper {
    long countByExample(WeshopOrderExample example);

    int deleteByExample(WeshopOrderExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopOrder record);

    int insertSelective(WeshopOrder record);

    List<WeshopOrder> selectByExample(WeshopOrderExample example);

    WeshopOrder selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopOrder record, @Param("example") WeshopOrderExample example);

    int updateByExample(@Param("record") WeshopOrder record, @Param("example") WeshopOrderExample example);

    int updateByPrimaryKeySelective(WeshopOrder record);

    int updateByPrimaryKey(WeshopOrder record);
}