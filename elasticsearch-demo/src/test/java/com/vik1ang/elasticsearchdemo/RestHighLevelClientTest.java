package com.vik1ang.elasticsearchdemo;

import org.elasticsearch.action.admin.indices.create.CreateIndexRequest;
import org.elasticsearch.action.admin.indices.create.CreateIndexResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.common.xcontent.XContentType;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;

public class RestHighLevelClientTest extends ElasticsearchDemoApplicationTests {
    private final RestHighLevelClient restHighLevelClient;

    @Autowired
    public RestHighLevelClientTest(RestHighLevelClient restHighLevelClient) {
        this.restHighLevelClient = restHighLevelClient;
    }

    @Test
    public void testIndexAndMapping() throws IOException {
        CreateIndexRequest createIndexRequest = new CreateIndexRequest("products");
        createIndexRequest.mapping("{\n" +
                "    \"properties\": {\n" +
                "      \"title\":{\n" +
                "        \"type\": \"keyword\"\n" +
                "      },\n" +
                "      \"price\":{\n" +
                "        \"type\": \"double\"\n" +
                "      },\n" +
                "      \"created_at\":{\n" +
                "        \"type\": \"date\"\n" +
                "      },\n" +
                "      \"description\": {\n" +
                "        \"type\": \"text\",\n" +
                "        \"analyzer\": \"ik_max_word\"\n" +
                "      }\n" +
                "    }", XContentType.JSON);
        CreateIndexResponse createIndexResponse = restHighLevelClient.indices().create(createIndexRequest, RequestOptions.DEFAULT);
        System.out.println("创建状态: " + createIndexResponse.isAcknowledged());
    }
}
