package finalExam.creational.factory.factoryMethod.demo1;

public class AudiFactory implements IFactory{
    @Override
    public ICar create() {
        return new Audi();
    }
}
