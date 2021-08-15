package code.builder.after;


public class HighHouse extends HouseBuilder{

    @Override
    public void buildBasic() {
        System.out.println("high build basic");
    }

    @Override
    public void buildWalls() {
        System.out.println("high build wall");
    }

    @Override
    public void roofed() {
        System.out.println("high roof");
    }
}
