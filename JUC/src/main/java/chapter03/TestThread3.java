package chapter03;

import lombok.extern.slf4j.Slf4j;

@Slf4j(topic = "c.Test2.lambda")
public class TestThread3 {
    public static void main(String[] args) {
        Runnable r = () -> log.debug("running");

        Thread t = new Thread(r);

        t.start();

        log.debug("running");
    }
}
