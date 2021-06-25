package strategy.beforeApplyDuck;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public abstract class Duck {

    public abstract void display();

    public void quack() {
        System.out.println("duck quack!");
    }

    public void swim() {
        System.out.println("duck swim!");
    }

    public void fly() {
        System.out.println("duck fly");
    }

}
