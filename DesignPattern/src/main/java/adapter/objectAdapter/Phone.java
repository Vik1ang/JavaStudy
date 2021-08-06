package adapter.objectAdapter;

public class Phone {
    public void charging(Voltage5 voltage5) {
        if (voltage5.output5() == 5) {
            System.out.println("voltage = 5, can be charging");
        } else if (voltage5.output5() > 5) {
            System.out.println("voltage > 5, can not be charging");
        }
    }
}
