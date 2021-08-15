package finalExam.behavioral.template.demo1;

public class Main {
    public static void main(String[] args) {
        Worker it1 = new ITWorker("鸿洋");
        it1.workOneDay();
        Worker it2 = new ITWorker("老张");
        it2.workOneDay();
        Worker hr = new HRWorker("迪迪");
        hr.workOneDay();
        Worker qa = new QAWorker("老李");
        qa.workOneDay();
        Worker pm = new ManagerWorker("坑货");
        pm.workOneDay();

    }
}
