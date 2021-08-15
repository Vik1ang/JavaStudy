package finalExam.structural.singleton.demo1;

public class Main {
    public static void main(String[] args) {
        President president1 = President.getInstance();
        President president2 = President.getInstance();
        System.out.println(president1 == president2);
    }
}
