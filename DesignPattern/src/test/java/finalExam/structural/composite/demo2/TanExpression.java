package finalExam.structural.composite.demo2;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class TanExpression implements Expression{
    private Expression angle;

    @Override
    public double compute() {
        return Math.tan(angle.compute());
    }

}
