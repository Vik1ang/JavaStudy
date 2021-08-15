package finalExam.behavioral.strategy.demo1;

/**
 * 请水军(ConcreteStrategy)
 */
public class WaterArmy implements IncreaseFansStrategy {
    @Override
    public void action() {
        System.out.println("3y牛逼，我要给你点赞、转发、加鸡腿！");
    }
}
