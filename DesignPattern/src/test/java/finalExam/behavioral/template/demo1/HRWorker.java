package finalExam.behavioral.template.demo1;

public class HRWorker extends Worker {
    public HRWorker(String name) {
        super(name);
    }

    @Override
    protected void work() {
        System.out.println(name + "看简历-打电话-接电话");
    }
}
