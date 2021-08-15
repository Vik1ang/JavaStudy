package finalExam.structural.decorator.demo1;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class YellowGemDecorator implements IEquipDecorator {

    private IEquip equip;

    @Override
    public int calculateAttack() {
        return 10 + equip.calculateAttack();
    }

    @Override
    public String description() {
        return equip.description() + "+ 黄宝石";
    }
}
