package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopAttribute;
import tech.wetech.weshop.wechat.dal.po.WeshopAttributeExample;

public interface WeshopAttributeMapper {
    long countByExample(WeshopAttributeExample example);

    int deleteByExample(WeshopAttributeExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopAttribute record);

    int insertSelective(WeshopAttribute record);

    List<WeshopAttribute> selectByExampleWithBLOBs(WeshopAttributeExample example);

    List<WeshopAttribute> selectByExample(WeshopAttributeExample example);

    WeshopAttribute selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopAttribute record, @Param("example") WeshopAttributeExample example);

    int updateByExampleWithBLOBs(@Param("record") WeshopAttribute record, @Param("example") WeshopAttributeExample example);

    int updateByExample(@Param("record") WeshopAttribute record, @Param("example") WeshopAttributeExample example);

    int updateByPrimaryKeySelective(WeshopAttribute record);

    int updateByPrimaryKeyWithBLOBs(WeshopAttribute record);

    int updateByPrimaryKey(WeshopAttribute record);
}