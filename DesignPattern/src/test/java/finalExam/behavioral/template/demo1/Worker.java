package finalExam.behavioral.template.demo1;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public abstract class Worker {
    protected String name;

    public final void workOneDay() {
        System.out.println("-----------------work start ---------------");
        enterCompany();
        computerOn();
        work();
        computerOff();
        exitCompany();
        System.out.println("-----------------work end ---------------");

    }

    private void exitCompany() {
        System.out.println(name + "离开公司");
    }

    private void computerOff() {
        System.out.println(name + "关闭电脑");
    }

    protected abstract void work();

    private void computerOn() {
        System.out.println(name + "打开电脑");
    }

    private void enterCompany() {
        System.out.println(name + "进入公司");
    }

}
