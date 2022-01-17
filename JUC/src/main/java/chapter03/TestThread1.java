package chapter03;

import lombok.extern.slf4j.Slf4j;

@Slf4j(topic = "c.Test1")
public class TestThread1 {
    public static void main(String[] args) {
        Thread t = new Thread() {
            @Override
            public void run() {
                log.debug("running");
            }
        };
        t.setName("t1");
        t.start();

        log.debug("running");
    }
}