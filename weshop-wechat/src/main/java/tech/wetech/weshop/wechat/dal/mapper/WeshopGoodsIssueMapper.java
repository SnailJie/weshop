package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopGoodsIssue;
import tech.wetech.weshop.wechat.dal.po.WeshopGoodsIssueExample;

public interface WeshopGoodsIssueMapper {
    long countByExample(WeshopGoodsIssueExample example);

    int deleteByExample(WeshopGoodsIssueExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopGoodsIssue record);

    int insertSelective(WeshopGoodsIssue record);

    List<WeshopGoodsIssue> selectByExampleWithBLOBs(WeshopGoodsIssueExample example);

    List<WeshopGoodsIssue> selectByExample(WeshopGoodsIssueExample example);

    WeshopGoodsIssue selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopGoodsIssue record, @Param("example") WeshopGoodsIssueExample example);

    int updateByExampleWithBLOBs(@Param("record") WeshopGoodsIssue record, @Param("example") WeshopGoodsIssueExample example);

    int updateByExample(@Param("record") WeshopGoodsIssue record, @Param("example") WeshopGoodsIssueExample example);

    int updateByPrimaryKeySelective(WeshopGoodsIssue record);

    int updateByPrimaryKeyWithBLOBs(WeshopGoodsIssue record);

    int updateByPrimaryKey(WeshopGoodsIssue record);
}