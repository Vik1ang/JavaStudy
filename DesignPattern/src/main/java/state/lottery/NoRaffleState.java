package state.lottery;


public class NoRaffleState extends State {

    RaffleActivity activity;

    public NoRaffleState(RaffleActivity activity) {
        this.activity = activity;
    }

    // 扣除后可以抽奖
    @Override
    public void deductMoney() {
        activity.setState(activity.getCanRaffleState());
    }

    @Override
    public boolean raffle() {
        System.out.println("can not raffle");
        return false;
    }

    @Override
    public void dispensePrize() {

    }
}
