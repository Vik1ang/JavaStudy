package code.adapter.objectAdapter;

import code.adapter.adapterClass.Voltage220;

public class VoltageAdapter implements Voltage5 {
    private Voltage220 voltage220;

    public VoltageAdapter(Voltage220 voltage220) {
        this.voltage220 = voltage220;
    }

    @Override
    public int output5() {
        int dest = 0;
        if (voltage220 != null) {
            int src = voltage220.output220();
            System.out.println("adapting");
            dest = src / 44;
            System.out.println("output: " + dest);
        }
        return dest;
    }
}
