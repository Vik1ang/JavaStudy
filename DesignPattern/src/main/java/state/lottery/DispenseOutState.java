package state.lottery;

public class DispenseOutState extends State {

    RaffleActivity activity;

    public DispenseOutState(RaffleActivity activity) {
        this.activity = activity;
    }
    @Override
    public void deductMoney() {
        System.out.println("can not");
    }

    @Override
    public boolean raffle() {
        System.out.println("can not");
        return false;
    }

    @Override
    public void dispensePrize() {
        System.out.println("can not");
    }
}
