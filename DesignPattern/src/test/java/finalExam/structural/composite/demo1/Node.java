package finalExam.structural.composite.demo1;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public abstract class Node {
    protected String name;

    public abstract void addNode(Node node);

    public abstract void display();
}
