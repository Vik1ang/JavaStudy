package factory.simplefactory.pizzaStore.order;


import factory.simplefactory.pizzaStore.pizza.CheesePizza;
import factory.simplefactory.pizzaStore.pizza.GreekPizza;
import factory.simplefactory.pizzaStore.pizza.PepperPizza;
import factory.simplefactory.pizzaStore.pizza.Pizza;

public class SimpleFactory {
    public Pizza createPizza(String orderType) {
        Pizza pizza = null;
        System.out.println("using simple factory");
        if (orderType.equals("greek")) {
            pizza = new GreekPizza();
            pizza.setName("greek pizza");
        } else if (orderType.equals("cheese")) {
            pizza = new CheesePizza();
            pizza.setName("cheese pizza");
        } else if (orderType.equals("pepper")) {
            pizza = new PepperPizza();
            pizza.setName("pepper pizza");
        }
        return pizza;
    }

    public static Pizza createPizza2(String orderType) {
        Pizza pizza = null;
        System.out.println("using simple factory");
        if (orderType.equals("greek")) {
            pizza = new GreekPizza();
            pizza.setName("greek pizza");
        } else if (orderType.equals("cheese")) {
            pizza = new CheesePizza();
            pizza.setName("cheese pizza");
        } else if (orderType.equals("pepper")) {
            pizza = new PepperPizza();
            pizza.setName("pepper pizza");
        }
        return pizza;
    }
}
