package com.vik1ang.rabbitmq.two;

import com.rabbitmq.client.Channel;
import com.vik1ang.rabbitmq.utils.RabbitMQUtils;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class Worker01 {
    public static final String QUEUE_NAME = "hello";

    public static void main(String[] args) throws IOException, TimeoutException {
        Channel channel = RabbitMQUtils.getChannel();

        System.out.println("等待接收消息");

        // 消息的接收
        channel.basicConsume(
                QUEUE_NAME,
                true,
                (consumerTag, message) -> {
                    System.out.println(new String(message.getBody()));
                },
                consumerTag -> {
                    System.out.println(consumerTag + "消息者取消消费接口回调逻辑");
                }
        );
    }

}
