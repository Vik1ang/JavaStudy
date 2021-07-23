package factory.factorymethod.pizzaStore.order;

import factory.factorymethod.pizzaStore.pizza.*;

public class LondonOrderPizza extends OrderPizza {
    @Override
    public Pizza createPizza(String orderType) {
        Pizza pizza = null;
        if (orderType.equals("cheese")) {
            pizza = new LondonCheesePizza();
        } else if (orderType.equals("pepper")) {
            pizza = new LondonPepperPizza();
        }
        return pizza;
    }
}
