SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for weshop_ad
-- ----------------------------
DROP TABLE IF EXISTS `quaner_post`;
CREATE TABLE `quaner_post` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `gmt_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modify` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `code` varchar(16)  NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `creator_id` varchar(16) NOT NULL,
  `pic_list` text NOT NULL,
  `supplier_id` text NOT NULL,
  `collect_cnt` int(32) NOT NULL DEFAULT 0,
  `like_cnt` int(32) NULL DEFAULT NULL,
  `is_delete` tinyint(3) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of weshop_ad
-- ----------------------------
BEGIN;
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('000001','千万别去北京看升旗','研学老师不会给家长看的，每个地方都很多人','USER_001','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('000002','四川大学','研学老师不会给家长看的，每个地方都很多人','USER_003','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('000003','冬天的带娃地方','研学老师不会给家长看的，每个地方都很多人','USER_001','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('000004','成都周边','研学老师不会给家长看的，每个地方都很多人','USER_002','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('000005','千万别去成都看升旗','研学老师不会给家长看的，每个地方都很多人','USER_001','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('000006','这是一个不好的地方','研学老师不会给家长看的，每个地方都很多人','USER_008','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('000007','千万别去多少啊北京看升旗','研学老师不会给家长看的，每个地方都很多人','USER_001','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('000008','哈哈哈','研学老师不会给家长看的，每个地方都很多人','USER_001','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('000009','千万别去北京看升旗','研学老师不会给家长看的，每个地方都很多人','USER_010','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('0000010','千万多少啊别去北京看升旗','研学老师不会给家长看的，每个地方都很多人','USER_011','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('0000011','多少啊d千万别去北京看升旗','研学老师不会给家长看的，每个地方都很多人','USER_021','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('0000012','千的万别去多少啊北京看升旗','研学老师不会给家长看的，每个地方都很多人','USER_001','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('0000013','多少分多少千万别去北京看升旗','研学老师不会给家长看的，每个地方都很多人','USER_001','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('0000014','千多少啊俄武器万别去北京看升旗','研学老师不会给家长看的，每个地方都很多人','USER_001','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('0000015','额外千万嗷嗷别去北京看升旗','研学老师不会给家长看的，每个地方都很多人','USER_001','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('0000016','额外千万别去北京看升旗','研学老师不会给家长看的，每个地方都很多人','USER_001','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('0000017','热千万别去擦北京看升旗','研学老师不会给家长看的，每个地方都很多人','USER_001','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('0000018','也千万别去北京看升旗','研学老师不会给家长看的，每个地方都很多人','USER_001','[a;b;c]','SUP_001',100,111,1);
INSERT INTO `quaner_post` (code,title,content,creator_id,pic_list,supplier_id,collect_cnt,like_cnt,is_delete) VALUES ('0000019','欧意千万别去北京看升旗','研学老师不会给家长看的，每个地方都很多人','USER_001','[a;b;c]','SUP_001',100,111,1);
 
COMMIT;
 