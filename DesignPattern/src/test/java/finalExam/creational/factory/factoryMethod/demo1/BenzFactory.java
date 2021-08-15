package finalExam.creational.factory.factoryMethod.demo1;

public class BenzFactory implements IFactory {

    @Override
    public ICar create() {
        return new Benz();
    }
}
