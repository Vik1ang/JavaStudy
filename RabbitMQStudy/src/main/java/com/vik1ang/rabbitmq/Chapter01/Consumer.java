package com.vik1ang.rabbitmq.Chapter01;

import com.rabbitmq.client.*;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class Consumer {
    public static final String QUEUE_NAME = "mirror_hello";

    public static void main(String[] args) throws IOException, TimeoutException {
        ConnectionFactory connectionFactory = new ConnectionFactory();
        connectionFactory.setHost("localhost");
        connectionFactory.setPort(5673);
        connectionFactory.setUsername("admin");
        connectionFactory.setPassword("admin");

        Connection connection = connectionFactory.newConnection();
        Channel channel = connection.createChannel();

        DeliverCallback deliverCallback = (consumerTag, message) -> {
            System.out.println(new String(message.getBody()));
        };

        CancelCallback cancelCallback = consumerTag -> {
            System.out.println("消息消费被中断");
        };

        /**
         * 消费消息
         * 1. 队列名
         * 2. 消费成功后是否自动应答
         * 3. 消费者成功消费的回调
         * 4. 消费者取消消费的回调
         *
         */
        channel.basicConsume(QUEUE_NAME, true, deliverCallback, cancelCallback);
    }
}
