package builder.after;

import lombok.AllArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Setter
public class HouseDirector {
    HouseBuilder houseBuilder;

    public House constructHouse() {
        houseBuilder.buildBasic();
        houseBuilder.buildWalls();
        houseBuilder.roofed();
        return houseBuilder.buildHouse();
    }
}
