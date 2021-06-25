package strategy.afterApplyDuck;

import org.junit.Test;

public class TestDuck {
    @Test
    public void test1() {
        WildDuck wildDuck = new WildDuck();
        wildDuck.fly();

        ToyDuck toyDuck = new ToyDuck();
        toyDuck.fly();

        BeijingDuck beijingDuck = new BeijingDuck();
        beijingDuck.fly();
    }
}
