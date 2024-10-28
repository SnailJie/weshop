package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopAd;
import tech.wetech.weshop.wechat.dal.po.WeshopAdExample;

public interface WeshopAdMapper {
    long countByExample(WeshopAdExample example);

    int deleteByExample(WeshopAdExample example);

    int deleteByPrimaryKey(Short id);

    int insert(WeshopAd record);

    int insertSelective(WeshopAd record);

    List<WeshopAd> selectByExampleWithBLOBs(WeshopAdExample example);

    List<WeshopAd> selectByExample(WeshopAdExample example);

    WeshopAd selectByPrimaryKey(Short id);

    int updateByExampleSelective(@Param("record") WeshopAd record, @Param("example") WeshopAdExample example);

    int updateByExampleWithBLOBs(@Param("record") WeshopAd record, @Param("example") WeshopAdExample example);

    int updateByExample(@Param("record") WeshopAd record, @Param("example") WeshopAdExample example);

    int updateByPrimaryKeySelective(WeshopAd record);

    int updateByPrimaryKeyWithBLOBs(WeshopAd record);

    int updateByPrimaryKey(WeshopAd record);
}