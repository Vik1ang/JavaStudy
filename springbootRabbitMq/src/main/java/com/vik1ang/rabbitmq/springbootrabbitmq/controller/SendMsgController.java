package com.vik1ang.rabbitmq.springbootrabbitmq.controller;

import com.vik1ang.rabbitmq.springbootrabbitmq.config.DelayedQueueConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.MessagePostProcessor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Date;

@Slf4j
@RestController
@RequestMapping("/ttl")
public class SendMsgController {

    @Resource
    private RabbitTemplate rabbitTemplate;

    @GetMapping("/sendMsg/{message}")
    public void sendMessage(@PathVariable String message) {
        log.info("当前时间: {}, 发送一条信息给两个TTL队列: {}", new Date().toString(), message);

        rabbitTemplate.convertAndSend("X", "XA", "消息来自TTL为10s的队列: " + message);
        rabbitTemplate.convertAndSend("X", "XB", "消息来自TTL为40s的队列: " + message);
    }

    @GetMapping("/sendExpirationMsg/{message}/{ttlTime}")
    public void sendMessageTTL(@PathVariable String message, @PathVariable String ttlTime) {
        log.info("当前时间: {}, 发送一条信息给一个{}TTL队列QC: {}", new Date().toString(), ttlTime, message);
        MessagePostProcessor messagePostProcessor = msg -> {
            msg.getMessageProperties().setExpiration(ttlTime);
            return msg;
        };
        rabbitTemplate.convertAndSend("X", "XC", message, messagePostProcessor);
    }

    @GetMapping("/sendDelayedMsg/{message}/{delayTime}")
    public void sendMessageTTLCustom(@PathVariable String message, @PathVariable Integer delayTime) {
        log.info("当前时间: {}, 发送一条信息给一个{}延迟队列QC: {}", new Date().toString(), delayTime, message);
        MessagePostProcessor messagePostProcessor = msg -> {
            msg.getMessageProperties().setDelay(delayTime);
            return msg;
        };
        rabbitTemplate.convertAndSend(DelayedQueueConfig.DELAYED_EXCHANGE_NAME, DelayedQueueConfig.DELAYED_ROUTING_KEY, message, messagePostProcessor);
    }
}
