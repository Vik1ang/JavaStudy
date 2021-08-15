package code.strategy.afterApplyDuck;

public class GoodFlyBehavior implements FlyBehavior {
    @Override
    public void fly() {
        System.out.println("good fly");
    }
}
