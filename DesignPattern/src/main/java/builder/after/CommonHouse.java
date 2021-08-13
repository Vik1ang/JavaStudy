package builder.after;


public class CommonHouse extends HouseBuilder{

    @Override
    public void buildBasic() {
        System.out.println("common build basic");
    }

    @Override
    public void buildWalls() {
        System.out.println("common build wall");
    }

    @Override
    public void roofed() {
        System.out.println("common roof");
    }
}
