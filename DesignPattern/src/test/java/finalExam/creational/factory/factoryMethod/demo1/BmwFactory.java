package finalExam.creational.factory.factoryMethod.demo1;

public class BmwFactory implements IFactory{
    @Override
    public ICar create() {
        return new Bmw();
    }
}
