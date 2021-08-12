package generics.genericsClass.extend;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class Parent<E> {
    private E value;
}
