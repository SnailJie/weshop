package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopCommentPicture;
import tech.wetech.weshop.wechat.dal.po.WeshopCommentPictureExample;

public interface WeshopCommentPictureMapper {
    long countByExample(WeshopCommentPictureExample example);

    int deleteByExample(WeshopCommentPictureExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopCommentPicture record);

    int insertSelective(WeshopCommentPicture record);

    List<WeshopCommentPicture> selectByExample(WeshopCommentPictureExample example);

    WeshopCommentPicture selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopCommentPicture record, @Param("example") WeshopCommentPictureExample example);

    int updateByExample(@Param("record") WeshopCommentPicture record, @Param("example") WeshopCommentPictureExample example);

    int updateByPrimaryKeySelective(WeshopCommentPicture record);

    int updateByPrimaryKey(WeshopCommentPicture record);
}