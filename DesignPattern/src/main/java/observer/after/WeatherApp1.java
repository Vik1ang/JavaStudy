package observer.after;

public class WeatherApp1 implements Observer{
    private float temperature;
    private float pressure;
    private float humidity;

    @Override
    public void update(float temperature, float pressure, float humidity) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        display();
    }

    public void display() {
        System.out.println("***WeatherApp1 Temperature" + temperature + "***");
        System.out.println("***WeatherApp2 pressure" + pressure + "***");
        System.out.println("***WeatherApp3 humidity" + humidity + "***");
    }
}
