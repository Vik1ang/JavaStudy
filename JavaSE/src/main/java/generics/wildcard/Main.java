package generics.wildcard;

import generics.wildcard.upperLimit.Animal;
import generics.wildcard.upperLimit.Box;
import generics.wildcard.upperLimit.Cat;
import generics.wildcard.upperLimit.MiniCat;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Box<Number> numberBox = new Box<>();
        numberBox.setFirst(100);
        showBox(numberBox);

        Box<Integer> integerBox = new Box<>();
        integerBox.setFirst(100);
        showBox(integerBox);

        ArrayList<Animal> animals = new ArrayList<>();
        ArrayList<Cat> cats = new ArrayList<>();
        ArrayList<MiniCat> miniCats = new ArrayList<>();

        // showAnimal(animals);
        showAnimal(cats);
        showAnimal(miniCats);
    }

    public static void showBox(Box<? extends Number> box) {
        Number first = box.getFirst();
        System.out.println(first);
    }

    public static void showAnimal(ArrayList<? extends Cat> list) {
        for (Cat cat : list) {
            System.out.println(cat);
        }
    }

    public static void showAnimalLower(ArrayList<? super Cat> list) {

    }
}
