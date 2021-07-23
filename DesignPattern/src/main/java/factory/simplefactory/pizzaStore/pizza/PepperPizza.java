package factory.simplefactory.pizzaStore.pizza;

public class PepperPizza extends Pizza {

	@Override
	public void prepare() {
		System.out.println("Pepper pizza prepare material");
	}

}
