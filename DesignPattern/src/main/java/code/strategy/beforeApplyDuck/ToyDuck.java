package code.strategy.beforeApplyDuck;

public class ToyDuck extends Duck {

    @Override
    public void display() {
        System.out.println("this is a toy duck");
    }

    @Override
    public void quack() {
        System.out.println("can not");
    }

    @Override
    public void swim() {
        System.out.println("can not");
    }

    @Override
    public void fly() {
        System.out.println("can not");
    }
}
