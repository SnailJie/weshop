package tech.wetech.weshop.wechat.utils;

import tech.wetech.weshop.user.enums.GenderEnum;
import tech.wetech.weshop.user.po.User;

import java.util.Date;

public class MockData {

   public static User getMockUser() {
       User user = new User();
       user.setUsername("testUser");
       user.setPassword("password123");
       user.setGender(GenderEnum.MALE);
       user.setBirthday(new Date(System.currentTimeMillis() - 1000L * 60 * 60 * 24 * 365 * 20)); // 假设用户20岁
       user.setRegisterTime( new Date());
       user.setLastLoginTime(new Date(System.currentTimeMillis() - 1000L * 60 * 60 * 24)); // 假设用户昨天登录过
       user.setLastLoginIp("192.168.1.1");
       user.setUserLevelId(Byte.valueOf("1")); // 假设用户等级为1
       user.setNickname("Test Nickname");
       user.setMobile("12345678901");
       user.setRegisterIp("192.168.1.1");
       user.setAvatar("http://127.0.0.1:9000/head.jpg");
       user.setWechatOpenId("oUpF8uMuAJO_M2pxb1Q9zNjWeS6o");

        return new User();
    }


    public static String getMockToken() {
        String token = "eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI5OTk5OTk5OTkiLCJzdWIiOiJ7IFwiaWRcIjo5OTk5OTk5OTksXCJ1c2VySWRcIjogOTk5OTk5OTk5LFwidXNlcm5hbWVcIjogXCLlvIDlj5HkurrlkZjmtYvor5XotKblj7dcIixcInNvdXJjZVwiOlwiZHJfYWRtaW5cIn0iLCJpYXQiOjE1MzA1MDAwNjIsImp0aSI6Ijk5OTk5OTk5OSJ9.4eViEHgXyDHmvxXsxIYJouz_fOCIAwT4jTfdp-R-HSs";
        return token;
    }

}
