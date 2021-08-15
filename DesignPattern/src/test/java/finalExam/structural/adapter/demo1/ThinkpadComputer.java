package finalExam.structural.adapter.demo1;

public class ThinkpadComputer implements Computer {
    @Override
    public String readSD(SDCard sdCard) {
        if (sdCard == null) throw new NullPointerException("sd card null");
        return sdCard.readSD();
    }
}
