package finalExam.structural.adapter.demo1;

public class TFCardImpl implements TFCard{
    @Override
    public String readTF() {
        return "tf card reade msg : hello word tf card";
    }

    @Override
    public int writeTF(String msg) {
        System.out.println("tf card write a msg : " + msg);
        return 1;
    }
}
