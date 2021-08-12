package generics.genericsInterface;

public class Main {
    public static void main(String[] args) {
        GenericPair<String, Integer> pair = new GenericPair<>("count", 100);
        System.out.println(pair.getKey());
        System.out.println(pair.getValue());

    }
}
