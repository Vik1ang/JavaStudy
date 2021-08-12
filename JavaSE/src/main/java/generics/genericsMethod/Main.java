package generics.genericsMethod;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Product<Integer> integerProduct = new Product<>();
        ArrayList<String> list = new ArrayList<>();
        list.add("a");
        list.add("b");
        list.add("c");
        System.out.println(integerProduct.getProduct(list));
    }
}
