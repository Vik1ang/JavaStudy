package code.factory.abstractfactory.pizza;

public class BeijingPepperPizza extends Pizza {
    @Override
    public void prepare() {
        System.out.println("Beijing Pepper prepare material");
    }
}
