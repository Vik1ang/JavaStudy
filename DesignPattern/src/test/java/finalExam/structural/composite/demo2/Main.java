package finalExam.structural.composite.demo2;

public class Main {
    public static void main(String[] args) {
        final Expression e1 = new AdditionalExpression(new Number(1), new Number(2));
        System.out.println(e1.compute());
    }
}
