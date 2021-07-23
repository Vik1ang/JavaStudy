package factory.abstractfactory.order;

import factory.abstractfactory.pizza.*;

public class LondonFactory implements AbstractFactory {

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
