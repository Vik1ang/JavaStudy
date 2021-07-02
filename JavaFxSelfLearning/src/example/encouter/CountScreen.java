package example.encouter;

import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

public class CountScreen {
    private Stage stage;
    private String title;
    private CountController controller;
    private Scene scene;

    public CountScreen(Stage stage) throws IOException {
        this.stage = stage;
        title = "Count Screen";

        controller = new CountController();
        FXMLLoader loader = new FXMLLoader(getClass().getResource("count.fxml"));
        loader.setController(controller);

        Parent root = loader.load();
        scene = new Scene(root, 500, 300);
    }

    public void start() {
        stage.setTitle(title);
        stage.setScene(scene);
        stage.show();
    }

    public CountController getController() {
        return controller;
    }
}
