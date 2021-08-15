package finalExam.structural.decorator.demo1;

public class ArmEquip implements IEquip{
    @Override
    public int calculateAttack() {
        return 20;
    }

    @Override
    public String description() {
        return "屠龙刀";
    }
}
