package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopCollect;
import tech.wetech.weshop.wechat.dal.po.WeshopCollectExample;

public interface WeshopCollectMapper {
    long countByExample(WeshopCollectExample example);

    int deleteByExample(WeshopCollectExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopCollect record);

    int insertSelective(WeshopCollect record);

    List<WeshopCollect> selectByExample(WeshopCollectExample example);

    WeshopCollect selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopCollect record, @Param("example") WeshopCollectExample example);

    int updateByExample(@Param("record") WeshopCollect record, @Param("example") WeshopCollectExample example);

    int updateByPrimaryKeySelective(WeshopCollect record);

    int updateByPrimaryKey(WeshopCollect record);
}