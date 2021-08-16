package finalExam.behavioral.observer.demo2;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class Producer {
    private String name;
    private List<User> subscribers;
    private List<Video> videos;

    public Producer(String name) {
        this.name = name;
        subscribers = new ArrayList<>();
        videos = new ArrayList<>();
    }

    public void addSubscriber(User user) {
        subscribers.add(user);
    }

    public void postVideo(String name, int length) {
        Video video = new Video(name, length, this);
        for (User subscriber : subscribers) {
            subscriber.alertNewVideo(video);
        }
    }
}
