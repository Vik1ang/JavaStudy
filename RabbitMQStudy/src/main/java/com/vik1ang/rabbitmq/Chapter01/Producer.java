package com.vik1ang.rabbitmq.Chapter01;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class Producer {
    public static final String QUEUE_NAME = "hello";

    // 发消息
    public static void main(String[] args) throws IOException, TimeoutException {
        // 创建连接工厂
        ConnectionFactory connectionFactory = new ConnectionFactory();
        // 工厂IP
        connectionFactory.setHost("localhost");

        // 用户名
        connectionFactory.setUsername("admin");
        // 密码
        connectionFactory.setPassword("admin");

        // 创建连接
        Connection connection = connectionFactory.newConnection();
        // 获取信道
        Channel channel = connection.createChannel();
        /**
         * 生成一个队列
         * 1. 队列名称
         * 2. 队列里面的消息是否持久化(磁盘) 默认情况下存储在内存中
         * 3. 该队列是否只提供一个消费者，是否进行消息共享
         * 4. 是否自动删除
         */
        channel.queueDeclare(QUEUE_NAME, false, false, false, null);
        // 发消息
        String message = "Hello world";
        /**
         * 发送消息
         * 1. 交换机
         * 2. 路由的key
         * 3.
         * 4. 发送的消息
         */
        channel.basicPublish("", QUEUE_NAME, null, message.getBytes());
        System.out.println("Done");
    }
}
