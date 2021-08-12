package generics.genericsClass;

import java.util.ArrayList;
import java.util.Random;

public class Product<T> {
    private T product;

    ArrayList<T> list = new ArrayList<>();
    Random random = new Random();

    public void addProduct(T product) {
        list.add(product);
    }

    public T getProduct() {
        return list.get(random.nextInt(list.size()));
    }
}
