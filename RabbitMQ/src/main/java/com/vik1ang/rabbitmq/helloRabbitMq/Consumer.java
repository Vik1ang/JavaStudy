package com.vik1ang.rabbitmq.helloRabbitMq;

import com.rabbitmq.client.*;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class Consumer {
    // 队列的名称
    public static final String QUEUE_NAME = "Hello";

    public static void main(String[] args) throws IOException, TimeoutException {
        // 创建连接工厂
        ConnectionFactory connectionFactory = new ConnectionFactory();
        connectionFactory.setHost("localhost");
        connectionFactory.setUsername("admin");
        connectionFactory.setPassword("seulgi");
        Connection connection = connectionFactory.newConnection();
        Channel channel = connection.createChannel();

        // 声明接收消息
        DeliverCallback deliverCallback = (consumerTag, message) -> {
            System.out.println(new String(message.getBody()));
        };
        // 声明取消消息
        CancelCallback cancelCallback = consumerTag -> {
            System.out.println("消息消费被中断");
        };

        /*
          消费者接受消息
          1. 消费哪个队列
          2. 消费成功之后是否要自动应答 true代表自动应答
          3. 消费者未成功消费的回应
          4. 消费者取消消费的回调
         */
        // channel.basicConsume(QUEUE_NAME, true, deliverCallback, cancelCallback);
        channel.basicConsume(QUEUE_NAME, true,
                ((consumerTag, message) -> {
                    System.out.println(new String(message.getBody()));
                }), consumerTag -> {
                    System.out.println("消息消费被中断");
                });
    }

}
