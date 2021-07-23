package factory.abstractfactory.order;

import factory.abstractfactory.pizza.Pizza;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class OrderPizza {
    private AbstractFactory abstractFactory;

    public OrderPizza(AbstractFactory abstractFactory) {
        this.abstractFactory = abstractFactory;
    }

    public AbstractFactory getAbstractFactory() {
        return abstractFactory;
    }

    public void setAbstractFactory(AbstractFactory abstractFactory) {
        this.abstractFactory = abstractFactory;
    }

    public void setFactory(AbstractFactory factory) {
        Pizza pizza = null;
        String orderType = "";
        this.abstractFactory = factory;
        do {
            orderType = getType();
            pizza = factory.createPizza(orderType);
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
