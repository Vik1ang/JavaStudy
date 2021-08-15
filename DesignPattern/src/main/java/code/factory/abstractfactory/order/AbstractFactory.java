package code.factory.abstractfactory.order;

import code.factory.abstractfactory.pizza.Pizza;

public interface AbstractFactory {
    Pizza createPizza(String orderType);
}
