package tech.wetech.weshop.wechat.config;

import org.apache.ibatis.datasource.pooled.PooledDataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import javax.sql.DataSource;
import org.springframework.core.env.Environment;

@Configuration
@MapperScan("tech.wetech.weshop.wechat.dal.mapper") // 指定 Mapper 接口所在的包
public class DalConfig {

    @Autowired
    private Environment environment;
    @Bean
    public DataSource dataSource() {
        // mybatis自带的一个简易数据库连接池，只是为了debug代码，这个就不关心了
        PooledDataSource pooledDataSource = new PooledDataSource();
        pooledDataSource.setDriver(environment.getProperty("spring.datasource.driver-class-name"));
        pooledDataSource.setUsername(environment.getProperty("spring.datasource.username"));
        pooledDataSource.setPassword(environment.getProperty("spring.datasource.password"));
        pooledDataSource.setUrl(environment.getProperty("spring.datasource.url"));
        return pooledDataSource;
    }



    @Bean
    public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
        org.apache.ibatis.session.Configuration configuration = new org.apache.ibatis.session.Configuration();
        configuration.setMapUnderscoreToCamelCase(true); // 开启驼峰命名转换
        org.mybatis.spring.SqlSessionFactoryBean factoryBean = new org.mybatis.spring.SqlSessionFactoryBean();
        factoryBean.setDataSource(dataSource);
        factoryBean.setConfiguration(configuration);
        return factoryBean.getObject();
    }

    @Bean
    public DataSourceTransactionManager transactionManager(DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }
}
