package code.factory.simplefactory.pizzaStore.order;

public class PizzaStore {

    public static void main(String[] args) {
        new OrderPizza(new SimpleFactory());
        System.out.println("quit");
    }

}
