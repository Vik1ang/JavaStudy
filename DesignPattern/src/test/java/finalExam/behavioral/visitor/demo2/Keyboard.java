package finalExam.behavioral.visitor.demo2;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class Keyboard implements ComputerComponent {
    private String name;
    private int numKeys = 36;

    public Keyboard(String name) {
        this.name = name;
    }

    @Override
    public void accept(ComputerVisitor computerVisitor) {
        if (computerVisitor.validated()) {
            computerVisitor.visit(this);
        }
    }
}
