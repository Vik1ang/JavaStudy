package finalExam.structural.composite.demo2;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class MultiplicationExpression implements Expression{
    private Expression e1;
    private Expression e2;

    @Override
    public double compute() {
        return e1.compute() * e2.compute();
    }

}
