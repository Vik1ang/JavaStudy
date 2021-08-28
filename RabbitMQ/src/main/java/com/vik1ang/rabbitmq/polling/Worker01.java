package com.vik1ang.rabbitmq.polling;

import com.rabbitmq.client.Channel;
import com.vik1ang.rabbitmq.utils.RabbitMqUtils;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class Worker01 {
    // 队列名称
    private static final String QUEUE_NAME = "Hello";

    public static void main(String[] args) throws IOException, TimeoutException {
        Channel channel = RabbitMqUtils.getChannel();
        System.out.println(Thread.currentThread().getName() + "等待接受消息......");
        channel.basicConsume(QUEUE_NAME,
                true,
                (consumerTag, message) -> {
                    System.out.println("接收到的消息: " + new String(message.getBody()));
                },
                consumerTag -> {
                    System.out.println("消息者取消消费接口回调逻辑");
                });


    }
}
