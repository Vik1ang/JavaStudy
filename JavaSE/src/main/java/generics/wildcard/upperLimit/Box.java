package generics.wildcard.upperLimit;

import lombok.Data;

@Data
public class Box<E> {
    private E first;
}
