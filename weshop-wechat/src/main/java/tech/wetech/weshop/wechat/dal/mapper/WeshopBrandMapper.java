package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopBrand;
import tech.wetech.weshop.wechat.dal.po.WeshopBrandExample;

public interface WeshopBrandMapper {
    long countByExample(WeshopBrandExample example);

    int deleteByExample(WeshopBrandExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopBrand record);

    int insertSelective(WeshopBrand record);

    List<WeshopBrand> selectByExample(WeshopBrandExample example);

    WeshopBrand selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopBrand record, @Param("example") WeshopBrandExample example);

    int updateByExample(@Param("record") WeshopBrand record, @Param("example") WeshopBrandExample example);

    int updateByPrimaryKeySelective(WeshopBrand record);

    int updateByPrimaryKey(WeshopBrand record);
}