package finalExam.behavioral.visitor.demo2;

public class ComputerVisitor {

    private boolean validated = false;

    public void visit(Keyboard keyboard) {
        System.out.println("Looking at keyboard " + keyboard + " which has " + keyboard.getNumKeys() + " keys.");
    }

    public void visit(Mouse mouse) {
        System.out.println("Looking at mouse " + mouse);
    }

    public void visit(Computer computer) {
        System.out.println("Looking at computer " + computer + " with memory " + computer.getMemory() + " GB.");
    }

    public void validate() {
        validated = true;
    }

    public boolean validated() {
        return validated;
    }
}
