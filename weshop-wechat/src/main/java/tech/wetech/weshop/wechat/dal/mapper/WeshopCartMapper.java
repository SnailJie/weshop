package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopCart;
import tech.wetech.weshop.wechat.dal.po.WeshopCartExample;

public interface WeshopCartMapper {
    long countByExample(WeshopCartExample example);

    int deleteByExample(WeshopCartExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopCart record);

    int insertSelective(WeshopCart record);

    List<WeshopCart> selectByExampleWithBLOBs(WeshopCartExample example);

    List<WeshopCart> selectByExample(WeshopCartExample example);

    WeshopCart selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopCart record, @Param("example") WeshopCartExample example);

    int updateByExampleWithBLOBs(@Param("record") WeshopCart record, @Param("example") WeshopCartExample example);

    int updateByExample(@Param("record") WeshopCart record, @Param("example") WeshopCartExample example);

    int updateByPrimaryKeySelective(WeshopCart record);

    int updateByPrimaryKeyWithBLOBs(WeshopCart record);

    int updateByPrimaryKey(WeshopCart record);
}