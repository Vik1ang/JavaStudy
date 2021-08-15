package finalExam.behavioral.template.demo1;

public class ITWorker extends Worker {
    public ITWorker(String name) {
        super(name);
    }

    @Override
    protected void work() {
        System.out.println(name + "写程序-测bug-fix bug");
    }
}
