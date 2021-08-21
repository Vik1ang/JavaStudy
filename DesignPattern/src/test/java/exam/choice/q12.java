package exam.choice;

public class q12 {
}

class Flight {
    public boolean book(int age, String name) {
        return false;
    }
}

class GoldFlight extends Flight {
    @Override
    public boolean book(int age, String name) {
        return false;
    }
}