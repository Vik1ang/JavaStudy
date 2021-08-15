package code.strategy.afterApplyDuck;

public class BadFlyBehavior implements FlyBehavior{
    @Override
    public void fly() {
        System.out.println("bad fly");
    }
}
