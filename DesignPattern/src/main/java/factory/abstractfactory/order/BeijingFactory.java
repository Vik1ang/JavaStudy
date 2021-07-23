package factory.abstractfactory.order;

import factory.abstractfactory.pizza.BeijingCheesePizza;
import factory.abstractfactory.pizza.BeijingPepperPizza;
import factory.abstractfactory.pizza.Pizza;

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
