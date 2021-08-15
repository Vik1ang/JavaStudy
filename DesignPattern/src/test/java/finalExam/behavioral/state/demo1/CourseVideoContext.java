package finalExam.behavioral.state.demo1;

import lombok.Setter;

public class CourseVideoContext {
    private CourseVideoState courseVideoState;

    //播放
    public final static PlayState PLAY_STATE = new PlayState();

    //停止
    public final static StopState STOP_STATE = new StopState();

    //快进
    public final static SpeedState SPEED_STATE = new SpeedState();

    //暂停
    public final static PauseState PAUSE_STATE = new PauseState();

    public void setCourseVideoState(CourseVideoState courseVideoState) {
        this.courseVideoState = courseVideoState;
        this.courseVideoState.setCourseVideoContext(this);
    }

    public CourseVideoState getCourseVideoState() {
        return courseVideoState;
    }

    public void play() {
        this.courseVideoState.play();
    }

    public void speed() {
        this.courseVideoState.speed();
    }

    public void pause() {
        this.courseVideoState.pause();
    }

    public void stop() {
        this.courseVideoState.stop();
    }
}
