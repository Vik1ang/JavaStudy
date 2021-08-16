package finalExam.behavioral.visitor.demo2;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Mouse implements ComputerComponent {
    private String name;

    @Override
    public void accept(ComputerVisitor computerVisitor) {
        if (computerVisitor.validated()) {
            computerVisitor.visit(this);
        }
    }
}
