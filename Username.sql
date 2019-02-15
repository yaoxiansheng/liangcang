/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : liangcang

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-02-15 17:28:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `username`
-- ----------------------------
DROP TABLE IF EXISTS `username`;
CREATE TABLE `username` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of username
-- ----------------------------
INSERT INTO `username` VALUES ('1', '1', 'c4ca4238a0b923820dcc509a6f75849b');
