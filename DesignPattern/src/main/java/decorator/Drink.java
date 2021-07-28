package decorator;

import lombok.Data;

@Data
public abstract class Drink {
    public String description;
    private float price = 0.0f;

    public abstract float cost();
}
