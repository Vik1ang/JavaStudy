package factory.simplefactory.pizzaStore.pizza;

public class GreekPizza extends Pizza {

	@Override
	public void prepare() {
		System.out.println("Greek pizza prepare material");
	}

}
