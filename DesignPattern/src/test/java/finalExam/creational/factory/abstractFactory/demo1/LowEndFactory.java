package finalExam.creational.factory.abstractFactory.demo1;

public class LowEndFactory implements IFactory{
    @Override
    public IMask createMask() {
        return new LowEndMask();
    }

    @Override
    public IProtectiveSuit createSuit() {
        return new LowEndProtectiveSuit();
    }
}
