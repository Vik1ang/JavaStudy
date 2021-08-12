package generics.genericsClass;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Generic<T> {
    private T key;
}
