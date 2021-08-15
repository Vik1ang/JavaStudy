package finalExam.creational.factory.abstractFactory.demo1;

public class Main {
    public static void main(String[] args) {
        IFactory lowEndFactory = new LowEndFactory();
        IFactory highEndFactory = new HighEndFactory();

        IMask maskA = lowEndFactory.createMask();
        IMask maskB = highEndFactory.createMask();

        maskA.showMask();
        maskB.showMask();

        IProtectiveSuit suitA = lowEndFactory.createSuit();
        IProtectiveSuit suitB = highEndFactory.createSuit();

        suitA.showSuit();
        suitB.showSuit();
    }
}
