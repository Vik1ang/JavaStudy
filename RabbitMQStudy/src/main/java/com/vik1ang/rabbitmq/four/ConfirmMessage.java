package com.vik1ang.rabbitmq.four;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.ConfirmCallback;
import com.vik1ang.rabbitmq.utils.RabbitMQUtils;

import java.io.IOException;
import java.util.UUID;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.ConcurrentNavigableMap;
import java.util.concurrent.ConcurrentSkipListMap;
import java.util.concurrent.TimeoutException;

public class ConfirmMessage {
    // 批量发消息的个数
    public static final int MESSAGE_COUNT = 1000;

    public static void main(String[] args) throws IOException, InterruptedException, TimeoutException {
        // 单个确认
        // publishMessageIndividually(); // 2248ms
        // 批量确认
        // publishMessageBatch(); // 274ms
        // 异步批量确认
        publishMessageAsync(); // 101ms
    }

    public static void publishMessageIndividually() throws IOException, TimeoutException, InterruptedException {
        Channel channel = RabbitMQUtils.getChannel();
        String queueName = UUID.randomUUID().toString();
        channel.queueDeclare(queueName, true, false, false, null);

        // 开启确认
        channel.confirmSelect();
        // 开始时间
        long begin = System.currentTimeMillis();

        // 批量发消息
        for (int i = 0; i < MESSAGE_COUNT; i++) {
            String message = i + "";
            channel.basicPublish("", queueName, null, message.getBytes());
            // 单个消息就马上进行发布确认
            boolean flag = channel.waitForConfirms();
            if (flag) {
                System.out.println("消息发送成功");
            }
        }

        // 结束时间
        long end = System.currentTimeMillis();
        System.out.println("发布" + MESSAGE_COUNT + "单独耗时" + (end - begin) + "ms");
    }

    public static void publishMessageBatch() throws IOException, TimeoutException, InterruptedException {
        Channel channel = RabbitMQUtils.getChannel();
        String queueName = UUID.randomUUID().toString();
        channel.queueDeclare(queueName, true, false, false, null);

        // 开启确认
        channel.confirmSelect();
        // 开始时间
        long begin = System.currentTimeMillis();

        int batchSize = 100;
        // 批量
        for (int i = 0; i < MESSAGE_COUNT; i++) {
            String message = i + "";
            channel.basicPublish("", queueName, null, message.getBytes());
            if (i % batchSize == 0) {
                channel.waitForConfirms();
            }
        }

        // 结束时间
        long end = System.currentTimeMillis();
        System.out.println("发布" + MESSAGE_COUNT + "单独耗时" + (end - begin) + "ms");
    }

    public static void publishMessageAsync() throws IOException, TimeoutException {
        Channel channel = RabbitMQUtils.getChannel();
        String queueName = UUID.randomUUID().toString();
        channel.queueDeclare(queueName, true, false, false, null);

        // 开启确认
        channel.confirmSelect();

        ConcurrentSkipListMap<Long, String> outStandingConfirms = new ConcurrentSkipListMap<>();

        // 消息监听器
        ConfirmCallback ackCallBack = (deliveryTag, multiple) -> {
            if (multiple) {
                ConcurrentNavigableMap<Long, String> confirmed = outStandingConfirms.headMap(deliveryTag);
                confirmed.clear();
            } else {
                outStandingConfirms.remove(deliveryTag);
            }
            System.out.println("确认消息: " + deliveryTag);
        };
        ConfirmCallback nackCallBack = (deliveryTag, multiple) -> {
            String message = outStandingConfirms.get(deliveryTag);
            System.out.println("未确认消息: " + deliveryTag + "内容: " + message);
        };
        channel.addConfirmListener(ackCallBack, nackCallBack);

        // 开始时间
        long begin = System.currentTimeMillis();
        for (int i = 0; i < MESSAGE_COUNT; i++) {
            String message = i + "";
            channel.basicPublish("", queueName, null, message.getBytes());
            outStandingConfirms.put(channel.getNextPublishSeqNo(), message);
        }

        // 结束时间
        long end = System.currentTimeMillis();
        System.out.println("发布" + MESSAGE_COUNT + "异步耗时" + (end - begin) + "ms");
    }
}
