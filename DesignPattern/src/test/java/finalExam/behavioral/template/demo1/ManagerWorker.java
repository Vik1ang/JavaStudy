package finalExam.behavioral.template.demo1;

public class ManagerWorker extends Worker {
    public ManagerWorker(String name) {
        super(name);
    }

    @Override
    protected void work() {
        System.out.println(name + "打dota...");
    }
}
