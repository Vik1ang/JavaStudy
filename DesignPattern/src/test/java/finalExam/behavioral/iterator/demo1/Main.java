package finalExam.behavioral.iterator.demo1;

public class Main {
    public static void main(String[] args) {
        AbstractList<String> list = new MusicList();
        list.add("凉凉");
        list.add("奇谈");
        list.add("红颜");
        list.add("伴虎");
        list.add("在人间");
        Iterator<String> iterator = list.createIterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
