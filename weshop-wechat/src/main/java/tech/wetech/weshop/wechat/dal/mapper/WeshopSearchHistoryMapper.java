package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopSearchHistory;
import tech.wetech.weshop.wechat.dal.po.WeshopSearchHistoryExample;

public interface WeshopSearchHistoryMapper {
    long countByExample(WeshopSearchHistoryExample example);

    int deleteByExample(WeshopSearchHistoryExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopSearchHistory record);

    int insertSelective(WeshopSearchHistory record);

    List<WeshopSearchHistory> selectByExample(WeshopSearchHistoryExample example);

    WeshopSearchHistory selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopSearchHistory record, @Param("example") WeshopSearchHistoryExample example);

    int updateByExample(@Param("record") WeshopSearchHistory record, @Param("example") WeshopSearchHistoryExample example);

    int updateByPrimaryKeySelective(WeshopSearchHistory record);

    int updateByPrimaryKey(WeshopSearchHistory record);
}