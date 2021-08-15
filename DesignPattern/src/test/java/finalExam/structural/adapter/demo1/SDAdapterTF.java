package finalExam.structural.adapter.demo1;


import lombok.AllArgsConstructor;

@AllArgsConstructor
public class SDAdapterTF implements SDCard {

    private TFCard tfCard;

    @Override
    public String readSD() {
        System.out.println("adapter read tf card ");
        return tfCard.readTF();
    }

    @Override
    public int writeSD(String msg) {
        System.out.println("adapter write tf card");
        return tfCard.writeTF(msg);
    }
}
