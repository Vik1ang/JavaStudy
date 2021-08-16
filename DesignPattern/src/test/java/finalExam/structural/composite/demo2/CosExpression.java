package finalExam.structural.composite.demo2;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CosExpression implements Expression{
    private Expression angle;

    @Override
    public double compute() {
        return Math.cos(angle.compute());
    }

}
