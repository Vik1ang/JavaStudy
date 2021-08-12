package generics.genericsClass;

public class Main {
    public static void main(String[] args) {
        Generic<String> stringGeneric = new Generic<>("test");
        System.out.println(stringGeneric.getKey());

        Generic<Integer> integerGeneric = new Generic<>(100);
        System.out.println(stringGeneric.getKey());

        Product<String> stringProduct = new Product<>();
        String[] products = {"a", "b", "c"};
        for (String product : products) {
            stringProduct.addProduct(product);
        }
        System.out.println(stringProduct.getProduct());
    }
}
