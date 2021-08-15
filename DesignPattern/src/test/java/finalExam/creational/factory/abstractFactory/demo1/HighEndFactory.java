package finalExam.creational.factory.abstractFactory.demo1;

public class HighEndFactory implements IFactory{
    @Override
    public IMask createMask() {
        return new HighEndMask();
    }

    @Override
    public IProtectiveSuit createSuit() {
        return new HighEndProtectiveSuit();
    }
}
