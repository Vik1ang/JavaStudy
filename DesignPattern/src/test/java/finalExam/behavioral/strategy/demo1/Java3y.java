package finalExam.behavioral.strategy.demo1;

public class Java3y {
    private IncreaseFansStrategy strategy;

    public Java3y(IncreaseFansStrategy strategy) {
        this.strategy = strategy;
    }

    public void exec() {
        strategy.action();
    }
}
