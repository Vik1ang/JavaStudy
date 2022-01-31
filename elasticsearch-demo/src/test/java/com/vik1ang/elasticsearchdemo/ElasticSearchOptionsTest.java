package com.vik1ang.elasticsearchdemo;


import com.vik1ang.elasticsearchdemo.entity.Product;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;

public class ElasticSearchOptionsTest extends ElasticsearchDemoApplicationTests {
    private final ElasticsearchOperations elasticsearchOperations;

    @Autowired
    public ElasticSearchOptionsTest(ElasticsearchOperations elasticsearchOperations) {
        this.elasticsearchOperations = elasticsearchOperations;
    }

    @Test
    public void testIndex() {
        Product product = new Product();
        product.setId(1);
        product.setTitle("小浣熊干吃面");
        product.setPrice(1.5);
        product.setDescription("小浣熊干吃面真好吃，曾经非常爱吃!");
        elasticsearchOperations.save(product);
    }

    @Test
    public void testSearch() {
        Product product = elasticsearchOperations.get("1", Product.class);
        System.out.println(product);
    }

    @Test
    public void testDelete() {
        Product product = new Product();
        product.setId(1);
        elasticsearchOperations.delete(product);
    }


}
