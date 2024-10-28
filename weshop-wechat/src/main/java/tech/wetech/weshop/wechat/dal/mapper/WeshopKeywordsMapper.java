package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopKeywords;
import tech.wetech.weshop.wechat.dal.po.WeshopKeywordsExample;

public interface WeshopKeywordsMapper {
    long countByExample(WeshopKeywordsExample example);

    int deleteByExample(WeshopKeywordsExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopKeywords record);

    int insertSelective(WeshopKeywords record);

    List<WeshopKeywords> selectByExample(WeshopKeywordsExample example);

    WeshopKeywords selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopKeywords record, @Param("example") WeshopKeywordsExample example);

    int updateByExample(@Param("record") WeshopKeywords record, @Param("example") WeshopKeywordsExample example);

    int updateByPrimaryKeySelective(WeshopKeywords record);

    int updateByPrimaryKey(WeshopKeywords record);
}