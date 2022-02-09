package com.vik1ang.designPattern.wait;

import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.util.List;

@Slf4j(topic = "c.Test20")
public class Test20 {
    public static void main(String[] args) {
        GuardedObject guardedObject = new GuardedObject();
        new Thread(() -> {
            log.debug("等待结果");
            List<String> list = (List<String>) guardedObject.get(2000);
            log.debug("{}", list);
        }, "t1").start();

        new Thread(() -> {
            log.debug("执行下载");
            try {
                List<String> download = Downloader.download();
                guardedObject.complete(download);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }, "t2").start();
    }
}
