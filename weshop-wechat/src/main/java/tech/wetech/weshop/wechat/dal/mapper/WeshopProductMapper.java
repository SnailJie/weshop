package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopProduct;
import tech.wetech.weshop.wechat.dal.po.WeshopProductExample;

public interface WeshopProductMapper {
    long countByExample(WeshopProductExample example);

    int deleteByExample(WeshopProductExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopProduct record);

    int insertSelective(WeshopProduct record);

    List<WeshopProduct> selectByExample(WeshopProductExample example);

    WeshopProduct selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopProduct record, @Param("example") WeshopProductExample example);

    int updateByExample(@Param("record") WeshopProduct record, @Param("example") WeshopProductExample example);

    int updateByPrimaryKeySelective(WeshopProduct record);

    int updateByPrimaryKey(WeshopProduct record);
}