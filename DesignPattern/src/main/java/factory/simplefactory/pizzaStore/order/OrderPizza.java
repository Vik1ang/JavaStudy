package factory.simplefactory.pizzaStore.order;

import factory.simplefactory.pizzaStore.pizza.CheesePizza;
import factory.simplefactory.pizzaStore.pizza.GreekPizza;
import factory.simplefactory.pizzaStore.pizza.PepperPizza;
import factory.simplefactory.pizzaStore.pizza.Pizza;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class OrderPizza {

    // public OrderPizza() {
    //     Pizza pizza = null;
    //     String orderType;
    //     do {
    //         orderType = getType();
    //         if (orderType.equals("greek")) {
    //             pizza = new GreekPizza();
    //             pizza.setName("greek pizza");
    //         } else if (orderType.equals("cheese")) {
    //             pizza = new CheesePizza();
    //             pizza.setName("cheese pizza");
    //         } else if (orderType.equals("pepper")) {
    //             pizza = new PepperPizza();
    //             pizza.setName("pepper pizza");
    //         } else {
    //             break;
    //         }
    //         pizza.prepare();
    //         pizza.bake();
    //         pizza.cut();
    //         pizza.box();
    //
    //     } while (true);
    // }

    SimpleFactory simpleFactory;
    Pizza pizza = null;

    public OrderPizza(SimpleFactory simpleFactory) {
        setFactory(simpleFactory);
    }

    public void setFactory(SimpleFactory simpleFactory) {
        String orderType = "";

        this.simpleFactory = simpleFactory;

        do {
            orderType = getType();
            pizza = this.simpleFactory.createPizza(orderType);

            if (pizza != null) {
                pizza.prepare();
                pizza.bake();
                pizza.cut();
                pizza.box();
            } else {
                System.out.println("fail");
                break;
            }
        } while (true);
    }

    private String getType() {
        try {
            BufferedReader strin = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("input pizza 种类:");
            String str = strin.readLine();
            return str;
        } catch (IOException e) {
            e.printStackTrace();
            return "";
        }
    }

}
