package com.vik1ang.rabbitmq.springbootrabbitmq.config;

import org.springframework.amqp.core.*;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class TTLQueueConfig {
    // 普通交换机
    public static final String X_EXCHANGE = "X";
    // 死信交换机
    public static final String Y_DEAD_EXCHANGE = "Y";
    // 普通队列
    public static final String QUEUE_A = "QA";
    public static final String QUEUE_B = "QB";
    // 死信队列
    public static final String DEAD_QUEUE = "QD";

    public static final String QUEUE_C = "QC";


    @Bean("xExchange")
    public DirectExchange xExchange() {
        return new DirectExchange(X_EXCHANGE);
    }

    @Bean("yExchange")
    public DirectExchange yExchange() {
        return new DirectExchange(Y_DEAD_EXCHANGE);
    }

    @Bean("queueA")
    public Queue queueA() {
        Map<String, Object> arguments = new HashMap<>(3);
        arguments.put("x-dead-letter-exchange", Y_DEAD_EXCHANGE);
        arguments.put("x-dead-letter-routing-key", "YD");
        arguments.put("x-message-ttl", 10000);

        return QueueBuilder
                .durable(QUEUE_A)
                .withArguments(arguments)
                .build();
    }

    @Bean("queueB")
    public Queue queueB() {
        Map<String, Object> arguments = new HashMap<>(3);
        arguments.put("x-dead-letter-exchange", Y_DEAD_EXCHANGE);
        arguments.put("x-dead-letter-routing-key", "YD");
        arguments.put("x-message-ttl", 40000);

        return QueueBuilder
                .durable(QUEUE_B)
                .withArguments(arguments)
                .build();
    }

    @Bean("queueC")
    public Queue queueC() {
        Map<String, Object> arguments = new HashMap<>(2);
        arguments.put("x-dead-letter-exchange", Y_DEAD_EXCHANGE);
        arguments.put("x-dead-letter-routing-key", "YD");
        // arguments.put("x-message-ttl", 40000);

        return QueueBuilder
                .durable(QUEUE_C)
                .withArguments(arguments)
                .build();
    }

    @Bean("queueD")
    public Queue queueD() {
        return QueueBuilder
                .durable(DEAD_QUEUE)
                .build();
    }

    @Bean
    public Binding queueABindingX(@Qualifier("queueA") Queue queueA, @Qualifier("xExchange") DirectExchange xExchange) {
        return BindingBuilder
                .bind(queueA)
                .to(xExchange)
                .with("XA");
    }

    @Bean
    public Binding queueBBindingX(@Qualifier("queueB") Queue queueB, @Qualifier("xExchange") DirectExchange xExchange) {
        return BindingBuilder
                .bind(queueB)
                .to(xExchange)
                .with("XB");
    }

    @Bean
    public Binding queueDBindingY(@Qualifier("queueD") Queue queueD, @Qualifier("yExchange") DirectExchange yExchange) {
        return BindingBuilder
                .bind(queueD)
                .to(yExchange)
                .with("YD");
    }

    @Bean
    public Binding queueCBindingX(@Qualifier("queueC") Queue queueC, @Qualifier("xExchange") DirectExchange xExchange) {
        return BindingBuilder
                .bind(queueC)
                .to(xExchange)
                .with("XC");
    }
}
