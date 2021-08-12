package generics.genericsInterface;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GenericPair<T, E> implements GenericInterface<T> {

    private T key;
    private E value;

}
