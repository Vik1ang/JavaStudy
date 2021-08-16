package finalExam.structural.composite.demo2;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Number implements Expression {
    private double number;

    @Override
    public double compute() {
        return number;
    }
}
