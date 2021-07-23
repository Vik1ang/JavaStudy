package factory.simplefactory.pizzaStore.pizza;

public class CheesePizza extends Pizza {

    @Override
    public void prepare() {
        System.out.println("cheese pizza prepare material");
    }

}
