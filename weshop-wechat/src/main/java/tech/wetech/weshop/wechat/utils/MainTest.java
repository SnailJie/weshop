//package tech.wetech.weshop.wechat.utils;
//
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//
//public class MainTest {
//
//    public static String generateToken(String subject, String secretKey) {
//        Map<String, Object> claims = new HashMap<>();
//        claims.put("sub", subject);
//
//        return Jwts.builder()
//            .setClaims(claims)
//            .setSubject(subject)
//            .setIssuedAt(new Date(System.currentTimeMillis()))
//            .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 hours
//            .signWith(SignatureAlgorithm.HS256, secretKey)
//            .compact();
//    }
//
//    public static void parseToken(String token, String secretKey) {
//        try {
//            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
//            System.out.println("Token is valid.");
//        } catch (Exception e) {
//            System.out.println("Error parsing token: " + e.getMessage());
//        }
//    }
//
//    public static void main(String[] args) {
//        String secretKey = "yourSecretKey";
//        String token = generateToken("user123", secretKey);
//        System.out.println("Generated Token: " + token);
//        parseToken(token, secretKey);
//        // 尝试解析一个无效的令牌（这里应该触发 MalformedJwtException）
//        parseToken("invalid.token", secretKey);
//    }
//}
