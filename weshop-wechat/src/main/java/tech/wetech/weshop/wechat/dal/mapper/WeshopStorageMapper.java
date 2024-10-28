package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopStorage;
import tech.wetech.weshop.wechat.dal.po.WeshopStorageExample;

public interface WeshopStorageMapper {
    long countByExample(WeshopStorageExample example);

    int deleteByExample(WeshopStorageExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopStorage record);

    int insertSelective(WeshopStorage record);

    List<WeshopStorage> selectByExample(WeshopStorageExample example);

    WeshopStorage selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopStorage record, @Param("example") WeshopStorageExample example);

    int updateByExample(@Param("record") WeshopStorage record, @Param("example") WeshopStorageExample example);

    int updateByPrimaryKeySelective(WeshopStorage record);

    int updateByPrimaryKey(WeshopStorage record);
}