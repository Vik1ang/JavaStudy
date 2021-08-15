package code.factory.abstractfactory.pizza;

public class LondonCheesePizza extends Pizza {
    @Override
    public void prepare() {
        System.out.println("London Cheese Pizza prepare material");
    }
}
