package com.vik1ang.rabbitmq.three;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.DeliverCallback;
import com.vik1ang.rabbitmq.utils.RabbitMQUtils;
import com.vik1ang.rabbitmq.utils.SleepUtils;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.TimeoutException;

public class Work04 {
    public static final String TASK_QUEUE_NAME = "ack_queue";

    public static void main(String[] args) throws IOException, TimeoutException {
        Channel channel = RabbitMQUtils.getChannel();
        System.out.println("C2等待接收消息处理时间较长");

        DeliverCallback deliverCallback = (consumerTag, message) -> {
            SleepUtils.sleep(30);
            System.out.println("接收的消息: " + new String(message.getBody(), StandardCharsets.UTF_8));
            channel.basicAck(message.getEnvelope().getDeliveryTag(), false);
        };

        int prefetchCount = 5;
        channel.basicQos(prefetchCount);
        boolean autoAck = false;
        channel.basicConsume(TASK_QUEUE_NAME, autoAck, deliverCallback, consumerTag -> {
            System.out.println(consumerTag + "消费者取消消费");
        });
    }
}
