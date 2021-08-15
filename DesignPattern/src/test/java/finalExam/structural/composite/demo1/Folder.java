package finalExam.structural.composite.demo1;

import java.util.ArrayList;
import java.util.List;

public class Folder extends Node {

    List<Node> nodeList = new ArrayList<>();

    public Folder(String name) {
        super(name);
    }

    @Override
    public void addNode(Node node) {
        nodeList.add(node);
    }

    @Override
    public void display() {
        System.out.println(name);
        for (Node node : nodeList) {
            node.display();
        }
    }
}
