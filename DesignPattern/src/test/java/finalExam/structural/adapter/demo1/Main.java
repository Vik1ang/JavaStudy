package finalExam.structural.adapter.demo1;

public class Main {
    public static void main(String[] args) {
        Computer thinkpadComputer = new ThinkpadComputer();
        SDCard sdCard = new SDCardImpl();
        System.out.println(thinkpadComputer.readSD(sdCard));

        TFCard tfCard = new TFCardImpl();
        SDAdapterTF sdAdapterTF = new SDAdapterTF(tfCard);
        System.out.println(thinkpadComputer.readSD(sdAdapterTF));
    }
}
