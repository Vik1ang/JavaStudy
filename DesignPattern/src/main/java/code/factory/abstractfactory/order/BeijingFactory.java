package code.factory.abstractfactory.order;

import code.factory.abstractfactory.pizza.BeijingCheesePizza;
import code.factory.abstractfactory.pizza.BeijingPepperPizza;
import code.factory.abstractfactory.pizza.Pizza;

public class BeijingFactory implements AbstractFactory {

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
