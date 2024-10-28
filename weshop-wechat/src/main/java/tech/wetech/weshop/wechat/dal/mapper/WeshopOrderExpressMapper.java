package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopOrderExpress;
import tech.wetech.weshop.wechat.dal.po.WeshopOrderExpressExample;

public interface WeshopOrderExpressMapper {
    long countByExample(WeshopOrderExpressExample example);

    int deleteByExample(WeshopOrderExpressExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopOrderExpress record);

    int insertSelective(WeshopOrderExpress record);

    List<WeshopOrderExpress> selectByExample(WeshopOrderExpressExample example);

    WeshopOrderExpress selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopOrderExpress record, @Param("example") WeshopOrderExpressExample example);

    int updateByExample(@Param("record") WeshopOrderExpress record, @Param("example") WeshopOrderExpressExample example);

    int updateByPrimaryKeySelective(WeshopOrderExpress record);

    int updateByPrimaryKey(WeshopOrderExpress record);
}