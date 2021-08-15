package finalExam.structural.decorator.demo1;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class RedGemDecorator implements IEquipDecorator {

    private IEquip equip;

    @Override
    public int calculateAttack() {
        return 15 + equip.calculateAttack();
    }

    @Override
    public String description() {
        return equip.description() + "+ 红宝石";
    }
}
