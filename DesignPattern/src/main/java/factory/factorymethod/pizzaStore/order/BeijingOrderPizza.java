package factory.factorymethod.pizzaStore.order;

import factory.factorymethod.pizzaStore.pizza.BeijingCheesePizza;
import factory.factorymethod.pizzaStore.pizza.BeijingPepperPizza;
import factory.factorymethod.pizzaStore.pizza.Pizza;

public class BeijingOrderPizza extends OrderPizza {
    @Override
    public Pizza createPizza(String orderType) {
        Pizza pizza = null;
        if (orderType.equals("cheese")) {
            pizza = new BeijingCheesePizza();
        } else if (orderType.equals("pepper")) {
            pizza = new BeijingPepperPizza();
        }
        return pizza;
    }
}
