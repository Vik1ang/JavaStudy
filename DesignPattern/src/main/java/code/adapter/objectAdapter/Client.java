package code.adapter.objectAdapter;

import code.adapter.adapterClass.Voltage220;

public class Client {
    public static void main(String[] args) {
        Phone phone = new Phone();
        phone.charging(new VoltageAdapter(new Voltage220()));
    }
}
