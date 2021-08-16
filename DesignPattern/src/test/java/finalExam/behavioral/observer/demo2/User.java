package finalExam.behavioral.observer.demo2;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class User {
    private String name;

    public void subscribeTo(Producer producer) {
        producer.addSubscriber(this);
    }

    public void alertNewVideo(Video video) {
        System.out.println(name + ": A new video " + video.getName() + " was just posted from "
                + video.getProducer() + "!");
    }
}
