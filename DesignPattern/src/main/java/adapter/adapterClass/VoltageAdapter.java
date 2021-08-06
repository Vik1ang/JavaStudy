package adapter.adapterClass;

public class VoltageAdapter extends Voltage220 implements Voltage5 {
    @Override
    public int output5() {
        int original = output220();
        int dest = original / 44;
        return dest;
    }
}
