package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopAdmin;
import tech.wetech.weshop.wechat.dal.po.WeshopAdminExample;

public interface WeshopAdminMapper {
    long countByExample(WeshopAdminExample example);

    int deleteByExample(WeshopAdminExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopAdmin record);

    int insertSelective(WeshopAdmin record);

    List<WeshopAdmin> selectByExample(WeshopAdminExample example);

    WeshopAdmin selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopAdmin record, @Param("example") WeshopAdminExample example);

    int updateByExample(@Param("record") WeshopAdmin record, @Param("example") WeshopAdminExample example);

    int updateByPrimaryKeySelective(WeshopAdmin record);

    int updateByPrimaryKey(WeshopAdmin record);
}