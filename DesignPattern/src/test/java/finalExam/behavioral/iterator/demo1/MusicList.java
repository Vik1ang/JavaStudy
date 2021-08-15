package finalExam.behavioral.iterator.demo1;

public class MusicList implements AbstractList<String>{

    private String[] books = new String[5];
    private int position = 0;

    @Override
    public void add(String name) {
        books[position] = name;
        position += 1;
    }

    @Override
    public Iterator<String> createIterator() {
        return new MusicIterator<>(books);
    }
}
