package code.decorator;

public class CoffeeBar {
    public static void main(String[] args) {
        Drink longBlack = new LongBlack();
        System.out.println("cost1=" + longBlack.cost());
        System.out.println("desc=" + longBlack.getDescription());

        Milk milk = new Milk(longBlack);
        System.out.println("cost2=" + milk.cost());
        System.out.println("desc=" + milk.getDescription());

        Chocolate chocolate1 = new Chocolate(milk);
        System.out.println("cost3=" + chocolate1.cost());
        System.out.println("desc=" + chocolate1.getDescription());
    }
}
