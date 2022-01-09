package chapter03;

import lombok.extern.slf4j.Slf4j;

@Slf4j(topic = "c.Test2")
public class TestThread2 {
    public static void main(String[] args) {
        Runnable r = new Runnable() {
            @Override
            public void run() {
                log.debug("running");
            }
        };

        Thread t = new Thread(r, "t2");

        t.start();

        log.debug("running");
    }
}
