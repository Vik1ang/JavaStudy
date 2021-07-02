package example.encouter;

import javafx.application.Application;
import javafx.stage.Stage;

public class CountingApplication extends Application {
    @Override
    public void start(Stage stage) throws Exception {
        StartScreen startScreen = new StartScreen(stage);
        CountScreen countScreen = new CountScreen(stage);

        startScreen.getController().setCountScreen(countScreen);
        countScreen.getController().setStartScreen(startScreen);

        startScreen.start();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
