package strategy.afterApplyDuck;

public class BeijingDuck extends Duck {

    public BeijingDuck() {
        flyBehavior = new BadFlyBehavior();
    }

    @Override
    public void display() {
        System.out.println("this is Beijing duck");
    }


}
