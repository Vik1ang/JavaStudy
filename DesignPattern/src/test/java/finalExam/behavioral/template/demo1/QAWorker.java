package finalExam.behavioral.template.demo1;

public class QAWorker extends Worker {
    public QAWorker(String name) {
        super(name);
    }

    @Override
    protected void work() {
        System.out.println(name + "写测试用例-提交bug-写测试用例");
    }
}
