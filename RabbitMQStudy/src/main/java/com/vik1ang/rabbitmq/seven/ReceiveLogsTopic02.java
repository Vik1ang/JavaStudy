package com.vik1ang.rabbitmq.seven;

import com.rabbitmq.client.BuiltinExchangeType;
import com.rabbitmq.client.CancelCallback;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.DeliverCallback;
import com.vik1ang.rabbitmq.utils.RabbitMQUtils;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.TimeoutException;

public class ReceiveLogsTopic02 {
    public static final String EXCHANGE_NAME = "topic_logs";

    public static void main(String[] args) throws IOException, TimeoutException {
        Channel channel = RabbitMQUtils.getChannel();
        channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.TOPIC);
        String queueName = "Q2";
        channel.queueDeclare(queueName, false, false, false, null);
        channel.queueBind(queueName, EXCHANGE_NAME, "*.*.rabbit");
        channel.queueBind(queueName, EXCHANGE_NAME, "lazy.#");
        System.out.println("等待接收消息");

        DeliverCallback deliverCallback = (consumerTag, message) -> {
            System.out.println("02控制台打印接收到的消息: " + new String(message.getBody(), StandardCharsets.UTF_8));
            System.out.println("接收队列: " + queueName + " 绑定键: " + message.getEnvelope().getRoutingKey());
        };

        CancelCallback cancelCallback = consumerTag -> {

        };

        channel.basicConsume(queueName, true, deliverCallback, cancelCallback);

    }
}
