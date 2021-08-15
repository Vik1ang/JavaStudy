package finalExam.structural.decorator.demo1;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class BlueGemDecorator implements IEquipDecorator {

    private IEquip equip;

    @Override
    public int calculateAttack() {
        return 5 + equip.calculateAttack();
    }

    @Override
    public String description() {
        return equip.description() + "+ 蓝宝石";
    }
}
