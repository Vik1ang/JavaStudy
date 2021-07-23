package factory.abstractfactory.order;

import factory.abstractfactory.pizza.Pizza;

public interface AbstractFactory {
    Pizza createPizza(String orderType);
}
