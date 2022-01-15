package com.vik1ang.rabbitmq.seven;

import com.rabbitmq.client.BuiltinExchangeType;
import com.rabbitmq.client.Channel;
import com.vik1ang.rabbitmq.utils.RabbitMQUtils;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.concurrent.TimeoutException;

public class EmitLogTopic {
    public static final String EXCHANGE_NAME = "topic_logs";

    public static void main(String[] args) throws IOException, TimeoutException {
        Channel channel = RabbitMQUtils.getChannel();
        channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.TOPIC);

        Map<String, String> bindingKeyMap = new HashMap<>();
        bindingKeyMap.put("quick.orange.rabbit", "0");
        bindingKeyMap.put("lazy.orange.elephant", "1");
        bindingKeyMap.put("quick.orange.fox", "2");
        bindingKeyMap.put("lazy.brown.fox", "3");
        bindingKeyMap.put("lazy.pink.rabbit", "4");
        bindingKeyMap.put("quick.brown.fox", "5");
        bindingKeyMap.put("quick.orange.male.rabbit", "6");
        bindingKeyMap.put("lazy.orange.male.rabbit", "7");

        for (Map.Entry<String, String> bindingKeyEntry : bindingKeyMap.entrySet()) {
            String routingKey = bindingKeyEntry.getKey();
            String message = bindingKeyEntry.getValue();
            channel.basicPublish(EXCHANGE_NAME, routingKey, null, message.getBytes(StandardCharsets.UTF_8));
            System.out.println("生产者发出消息: " + message);
        }

    }
}
