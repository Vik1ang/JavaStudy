package code.strategy.beforeApplyDuck;

public class BeijingDuck extends Duck {

    @Override
    public void display() {
        System.out.println("this is Beijing duck");
    }

    // 北京鸭不能飞
    @Override
    public void fly() {
        System.out.println("beijing duck cannot fly");
    }
}
