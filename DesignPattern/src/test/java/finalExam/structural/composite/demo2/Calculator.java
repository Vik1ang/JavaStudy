package finalExam.structural.composite.demo2;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
public class Calculator {
    private Expression expression;

    public double calculate() {
        return expression.compute();
    }
}
