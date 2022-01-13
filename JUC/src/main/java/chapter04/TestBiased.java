package chapter04;

import lombok.extern.slf4j.Slf4j;
import org.openjdk.jol.info.ClassLayout;

@Slf4j(topic = "c.TestBiased")
public class TestBiased {
    public static void main(String[] args) {
        Dog d = new Dog();
        log.debug(ClassLayout.parseInstance(d).toPrintable());
    }
}

class Dog {

}
