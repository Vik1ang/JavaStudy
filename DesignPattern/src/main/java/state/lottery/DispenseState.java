package state.lottery;

public class DispenseState extends State {

    RaffleActivity activity;

    public DispenseState(RaffleActivity activity) {
        this.activity = activity;
    }
    
    //

    @Override
    public void deductMoney() {
        System.out.println("canot");
    }

    @Override
    public boolean raffle() {
        System.out.println("can not");
        return false;
    }

    @Override
    public void dispensePrize() {
        if (activity.getCount() > 0) {
            System.out.println("中奖");
            activity.setState(activity.getNoRafflleState());
        } else {
            System.out.println("没有了");
            activity.setState(activity.getDispensOutState());
        }

    }
}
