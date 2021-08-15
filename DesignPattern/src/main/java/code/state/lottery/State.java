package code.state.lottery;

public abstract class State {

    // -50 抽奖
    public abstract void deductMoney();

    // 是否抽中奖品
    public abstract boolean raffle();

    // 发放奖品
    public abstract  void dispensePrize();

}
