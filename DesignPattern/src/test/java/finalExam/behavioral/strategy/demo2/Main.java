package finalExam.behavioral.strategy.demo2;

public class Main {
    public static void main(String[] args) {
        Role roleA = new RoleA("A");

        roleA.setAttackBehavior(new AttackJY())//
                .setDefendBehavior(new DefendTBS())//
                .setRunBehavior(new RunJCTQ());
        System.out.println(roleA.name + ":");
        roleA.run();
        roleA.attack();
        roleA.defend();
        roleA.display();

    }
}
