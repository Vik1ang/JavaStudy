package com.vik1ang.rabbitmq.utils;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.ConnectionFactory;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class RabbitMqUtils {

    private static final ConnectionFactory connectionFactory = new ConnectionFactory();

    public static Channel getChannel() throws IOException, TimeoutException {
        // ConnectionFactory connectionFactory = new ConnectionFactory();
        connectionFactory.setHost("localhost");
        connectionFactory.setUsername("admin");
        connectionFactory.setPassword("seulgi");
        return connectionFactory.newConnection().createChannel();
    }
}
