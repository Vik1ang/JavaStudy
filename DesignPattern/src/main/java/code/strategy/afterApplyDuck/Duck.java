package code.strategy.afterApplyDuck;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public abstract class Duck {

    FlyBehavior flyBehavior;

    public abstract void display();

    public void fly() {
        if (flyBehavior != null) {
            flyBehavior.fly();
        }
    }
}
