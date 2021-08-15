package finalExam.structural.singleton.demo1;

public class President {
    private static President instance = null;

    public static President getInstance() {
        if (instance == null) {
            synchronized (President.class) {
                if (instance == null) {
                    instance = new President();
                }
            }
        }
        return instance;
    }

}
