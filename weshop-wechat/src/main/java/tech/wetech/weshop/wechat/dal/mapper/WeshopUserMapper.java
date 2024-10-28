package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopUser;
import tech.wetech.weshop.wechat.dal.po.WeshopUserExample;

public interface WeshopUserMapper {
    long countByExample(WeshopUserExample example);

    int deleteByExample(WeshopUserExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopUser record);

    int insertSelective(WeshopUser record);

    List<WeshopUser> selectByExample(WeshopUserExample example);

    WeshopUser selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopUser record, @Param("example") WeshopUserExample example);

    int updateByExample(@Param("record") WeshopUser record, @Param("example") WeshopUserExample example);

    int updateByPrimaryKeySelective(WeshopUser record);

    int updateByPrimaryKey(WeshopUser record);
}