package finalExam.creational.builder.demo1;

public class Main {
    public static void main(String[] args) {
        ComputerDirector computerDirector = new ComputerDirector();

        MacComputerBuilder macComputerBuilder = new MacComputerBuilder("I%", "125");
        computerDirector.makeComputer(macComputerBuilder);
        Computer mac = macComputerBuilder.getComputer();
        System.out.println(mac.toString());

        LenovoComputerBuilder lenovoComputerBuilder = new LenovoComputerBuilder("I7", "256");
        computerDirector.makeComputer(lenovoComputerBuilder);
        Computer lenovoComputer = lenovoComputerBuilder.getComputer();
        System.out.println(lenovoComputer.toString());
    }
}
