package code.factory.jdk;


import java.util.Calendar;

public class Factory {
    public static void main(String[] args) {
        Calendar calendar = Calendar.getInstance();
        System.out.println("year:" + calendar.get(Calendar.YEAR));
        System.out.println("month:" + calendar.get(Calendar.MONTH) + 1);
        System.out.println("day:" + calendar.get(Calendar.DAY_OF_MONTH));
        System.out.println("hour:" + calendar.get(Calendar.HOUR_OF_DAY));
        System.out.println("minutes:" + calendar.get(Calendar.MINUTE));
        System.out.println("seconds:" + calendar.get(Calendar.SECOND));
    }


}
