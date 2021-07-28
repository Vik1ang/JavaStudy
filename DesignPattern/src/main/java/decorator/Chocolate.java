package decorator;

public class Chocolate extends Decorator{
    public Chocolate(Drink drink) {
        super(drink);
        setDescription("Chocolate");
        setPrice(3.0f);
    }
}
