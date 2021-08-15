package finalExam.behavioral.state.demo1;

import lombok.Setter;

@Setter
public abstract class CourseVideoState {
    protected CourseVideoContext courseVideoContext;

    public abstract void play();

    public abstract void speed();

    public abstract void pause();

    public abstract void stop();
}
