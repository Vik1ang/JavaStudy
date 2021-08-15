package finalExam.behavioral.visitor.demo1;

public interface Visitor {
    void visit(Engineer engineer);

    void visit(Manager manager);
}
