package finalExam.structural.composite.demo1;

public class File extends Node{
    public File(String name) {
        super(name);
    }

    @Override
    public void addNode(Node node) {

    }

    @Override
    public void display() {
        System.out.println(name);
    }
}
