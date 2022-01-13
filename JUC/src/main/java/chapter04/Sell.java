package chapter04;

import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Vector;

@Slf4j(topic = "c.Sell")
public class Sell {

    static Random random = new Random();

    public static int randomAmount(int n) {
        return random.nextInt(n) + 1;
    }

    public static void main(String[] args) throws InterruptedException {
        TicketWindow ticketWindow = new TicketWindow(1000);

        List<Thread> threadList = new ArrayList<>();
        List<Integer> amountList = new Vector<>();
        for (int i = 0; i < 2000; i++) {
            Thread thread = new Thread(() -> {
                int amount = ticketWindow.sell(randomAmount(5));
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                amountList.add(amount);
            });
            threadList.add(thread);
            thread.start();
        }

        for (Thread thread : threadList) {
            thread.join();
        }

        log.debug("{}", ticketWindow.getCount());
        log.debug("{}", amountList.stream().mapToInt(i -> i).sum());
    }

}

class TicketWindow {
    private int count;

    public TicketWindow(int count) {
        this.count = count;
    }

    public int getCount() {
        return count;
    }

    public int sell(int amount) {
        if (this.count >= amount) {
            this.count -= amount;
            return amount;
        } else {
            return 0;
        }
    }
}
