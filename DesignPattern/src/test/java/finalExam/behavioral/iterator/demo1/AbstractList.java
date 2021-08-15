package finalExam.behavioral.iterator.demo1;

public interface AbstractList<E> {
    void add(E e);

    Iterator<E> createIterator();
}
