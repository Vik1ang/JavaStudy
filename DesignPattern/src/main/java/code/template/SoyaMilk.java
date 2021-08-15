package code.template;

public abstract class SoyaMilk {
    final void make() {
        select();
        add();
        soak();
        beat();
    }

    void select() {
        System.out.println("1: select");
    }

    abstract void add();

    void soak() {
        System.out.println("3: soak");
    }

    void beat() {
        System.out.println("4: beat");
    }

}
