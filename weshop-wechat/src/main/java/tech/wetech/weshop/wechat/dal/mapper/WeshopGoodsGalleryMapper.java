package tech.wetech.weshop.wechat.dal.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tech.wetech.weshop.wechat.dal.po.WeshopGoodsGallery;
import tech.wetech.weshop.wechat.dal.po.WeshopGoodsGalleryExample;

public interface WeshopGoodsGalleryMapper {
    long countByExample(WeshopGoodsGalleryExample example);

    int deleteByExample(WeshopGoodsGalleryExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(WeshopGoodsGallery record);

    int insertSelective(WeshopGoodsGallery record);

    List<WeshopGoodsGallery> selectByExample(WeshopGoodsGalleryExample example);

    WeshopGoodsGallery selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") WeshopGoodsGallery record, @Param("example") WeshopGoodsGalleryExample example);

    int updateByExample(@Param("record") WeshopGoodsGallery record, @Param("example") WeshopGoodsGalleryExample example);

    int updateByPrimaryKeySelective(WeshopGoodsGallery record);

    int updateByPrimaryKey(WeshopGoodsGallery record);
}