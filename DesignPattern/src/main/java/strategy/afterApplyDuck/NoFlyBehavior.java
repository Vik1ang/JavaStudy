package strategy.afterApplyDuck;

public class NoFlyBehavior implements FlyBehavior{

    @Override
    public void fly() {
        System.out.println("can not fly");
    }
}
