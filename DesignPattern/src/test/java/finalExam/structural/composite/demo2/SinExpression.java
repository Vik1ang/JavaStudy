package finalExam.structural.composite.demo2;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class SinExpression implements Expression{
    private Expression angle;

    @Override
    public double compute() {
        return Math.sin(angle.compute());
    }

}
