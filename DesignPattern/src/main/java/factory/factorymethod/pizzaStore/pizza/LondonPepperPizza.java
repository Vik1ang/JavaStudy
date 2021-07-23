package factory.factorymethod.pizzaStore.pizza;

public class LondonPepperPizza extends Pizza{
    @Override
    public void prepare() {
        System.out.println("London Pepper Pizza prepare material");
    }
}
