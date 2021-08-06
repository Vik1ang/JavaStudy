package adapter.interfaceAdapter;

public class Client {
    public static void main(String[] args) {
        AbsAdapter absAdapter = new AbsAdapter() {
            @Override
            public void operation1() {
                System.out.println("operation1");
            }
        };
        absAdapter.operation1();
    }
}
