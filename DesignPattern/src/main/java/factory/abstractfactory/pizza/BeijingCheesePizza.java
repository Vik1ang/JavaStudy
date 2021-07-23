package factory.abstractfactory.pizza;

public class BeijingCheesePizza extends Pizza {
    @Override
    public void prepare() {
        System.out.println("Beijing Cheese prepare material");
    }
}
