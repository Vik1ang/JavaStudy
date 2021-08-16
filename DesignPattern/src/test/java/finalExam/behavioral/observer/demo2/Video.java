package finalExam.behavioral.observer.demo2;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.concurrent.Flow;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Video {
    private String name;
    private int length;
    private Producer producer;

}
