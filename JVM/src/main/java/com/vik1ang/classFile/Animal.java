package com.vik1ang.classFile;

public abstract class Animal {

    public abstract void eat();

    @Override
    public String toString() {
        return "I am " + this.getClass().getSimpleName();
    }
}
