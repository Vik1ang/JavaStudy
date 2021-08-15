package finalExam.behavioral.strategy.demo1;

public class Main {
    public static void main(String[] args) {
        // 今天2018年12月24日
        Java3y java3y = new Java3y(new WaterArmy());
        java3y.exec();

        // 明天2018年12月25日
        Java3y java4y = new Java3y(new OriginalArticle());
        java4y.exec();
    }
}
