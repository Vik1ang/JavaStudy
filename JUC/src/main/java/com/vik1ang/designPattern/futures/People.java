package com.vik1ang.designPattern.futures;

import com.vik1ang.designPattern.GuardedObject;
import lombok.extern.slf4j.Slf4j;

@Slf4j(topic = "c.People")
public class People extends Thread {
    @Override
    public void run() {
        GuardedObject guardedObject = Mailboxes.createGuardedObject();
        log.debug("收信id{}", guardedObject.getId());
        Object mail = guardedObject.get(5000);
    }
}
