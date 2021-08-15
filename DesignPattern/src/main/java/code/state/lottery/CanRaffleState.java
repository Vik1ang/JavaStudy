package code.state.lottery;

import java.util.Random;

public class CanRaffleState extends State {

    RaffleActivity activity;

    public CanRaffleState(RaffleActivity activity) {
        this.activity = activity;
    }

    @Override
    public void deductMoney() {
        System.out.println("已经扣除过");
    }

    @Override
    public boolean raffle() {
        System.out.println("正在抽奖");
        Random r = new Random();
        int num = r.nextInt(10);
        if(num == 0){
            activity.setState(activity.getDispenseState());
            return true;
        }else{
            System.out.println("没有抽中");
            activity.setState(activity.getNoRafflleState());
            return false;
        }
    }

    @Override
    public void dispensePrize() {
        System.out.println("没有中奖");
    }
}
