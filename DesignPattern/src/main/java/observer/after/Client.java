package observer.after;


public class Client {
    public static void main(String[] args) {
        WeatherData weatherData = new WeatherData();
        CurrentConditions currentConditions = new CurrentConditions();
        WeatherApp1 weatherApp1 = new WeatherApp1();
        weatherData.registerObserver(currentConditions);
        weatherData.registerObserver(weatherApp1);
        weatherData.setData(10f, 100f, 30.3f);

    }
}
