package com.vik1ang.rabbitmq.six;

import com.rabbitmq.client.BuiltinExchangeType;
import com.rabbitmq.client.CancelCallback;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.DeliverCallback;
import com.vik1ang.rabbitmq.utils.RabbitMQUtils;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.TimeoutException;

public class ReceiveLogDirect02 {
    public static final String EXCHANGE_NAME = "direct_logs";

    public static void main(String[] args) throws IOException, TimeoutException {
        Channel channel = RabbitMQUtils.getChannel();
        channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.DIRECT);
        channel.queueDeclare("disk", false, false, false, null);
        channel.queueBind("disk", EXCHANGE_NAME, "error");

        DeliverCallback deliverCallback = (consumerTag, message) -> {
            System.out.println("02控制台打印接收到的消息: " + new String(message.getBody(), StandardCharsets.UTF_8));
        };

        CancelCallback cancelCallback = consumerTag -> {

        };

        channel.basicConsume("disk", true, deliverCallback, cancelCallback);
    }
}
