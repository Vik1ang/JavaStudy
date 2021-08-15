# 工厂模式 Factory pattern

### 1. 简单工厂

#### 1.1 需求

假设我们经营一家比萨店，店中提供各种口味的比萨，例如芝士比萨、蛤蜊比萨、蔬菜比萨等等，根据顾客点的比萨类型的不同，店里会为顾客准备不同口味的比萨并为顾客打包装盒。现在我们需要写一套代码来描述顾客预定比萨的过程

#### 1.2 实现

```java

public class SimplePizzaFactory {

    public Pizza createPizza(String type) {
        Pizza pizza = null;

        if ("cheese".equals(type)) {
            pizza = new CheesePizza();
        } else if ("clam".equals(type)) {
            pizza = new ClamPizza();
        } else if ("veggie".equals(type)) {
            pizza = new VeggiePizza();
        }

        return pizza;
    }

}

public class PizzaStore {

    SimplePizzaFactory code.factory;

    public PizzaStore(SimplePizzaFactory code.factory) {
        this.code.factory = code.factory;
    }

    public void orderPizza(String type) {
        Pizza pizza = code.factory.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    }

}

```

其实简单工厂不是一个设计模式，反而比较像一种编程习惯，将创建对象的过程从对象使用者中分离开来，这样就可以通过简单工厂专门负责创建产品了。在上面的例子中，SimplePizzaFactory就是专门负责创建产品的简单工厂

### 2. 工厂方法

#### 2.1 需求

我们还是通过一个案例引入工厂方法模式的定义，在简单工厂案例的介绍中，我们设计了一个比萨店预定比萨的全部过程，现在假设比萨店扩大经营，在各地开设了分店，每个地区的分店都需要制作出符合当地口味的比萨，例如，对于芝士比萨，在纽约分店和芝加哥分店，它们制作的芝士比萨口味都是不相同的，那么在不同分店预定比萨的过程又是怎样的

#### 2.2 实现

```java

public abstract class PizzaStore {

    public abstract Pizza createPizza(String type);

    public void orderPizza(String type) {
        Pizza pizza = createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    }

}

```

可以看到，在这里我们将`PizzaStore`声明为抽象类，并定义了抽象方法`createPizza()`来负责比萨的创建，而在orderPizza()方法中，我们使用createPizza()
创建的比萨来进行准备、烘焙、切片和打包，其实`orderPizza()`方法也不知道`createPizza()`
方法创建的比萨是哪一种，它是由`PizzaStore`的**子类**来决定的。接下来我们就可以定义两个PizzaStore的子类分别表示纽约分店和芝加哥分店

```java

// New York
public class NYPizzaStore extends PizzaStore {

    @Override
    public Pizza createPizza(String type) {
        Pizza pizza = null;

        if ("cheese".equals(type)) {
            pizza = new NYCheesePizza();
        } else if ("clam".equals(type)) {
            pizza = new NYClamPizza();
        } else if ("veggie".equals(type)) {
            pizza = new NYVeggiePizza();
        }

        return pizza;
    }

}

// Chicago
public class ChicagoPizzaStore extends PizzaStore {

    @Override
    public Pizza createPizza(String type) {
        Pizza pizza = null;

        if ("cheese".equals(type)) {
            pizza = new ChicagoCheesePizza();
        } else if ("clam".equals(type)) {
            pizza = new ChicagoClamPizza();
        } else if ("veggie".equals(type)) {
            pizza = new ChicagoVeggiePizza();
        }

        return pizza;
    }

}

```

`createPizza()` 就是工厂方法，工厂方法是用于处理对象的创建，并将这样的行为封装在子类中，这样，程序中关于超类的代码就和子类对象创建代码解耦了

工厂方法模式 定义了一个**创建对象的接口**，但由**子类决定**要实例化的类是哪一个。

工厂方法让类把实例化推迟到子类。

在上面的定义中讲到，工厂方法模式让子类决定要实例化的类是哪一个，这里的决定并不是允许子类在运行时做决定，而是在编写创建者类时，不需要知道实际创建的产品是哪一个，选择了使用哪个子类，自然就决定了实际创建的产品是什么。工厂方法模式通过让子类决定创建的对象是什么，
**来达到将对象创建的过程封装的目的**。

### 3. 抽象工厂 Abstract Factory Pattern

#### 3.1 需求

我们仍然以比萨为例，现在我们有了创建比萨的方法，但是每一种比萨都由多种配料组成，例如面团、干酪、蔬菜、蛤蜊等，每个地区分店所用的材料不同，例如蛤蜊，纽约地区通常使用新鲜蛤蜊，而芝加哥地区通常就是用冷冻蛤蜊，我们需要一个工厂专门负责生产各种原料，且不同地区生产的原料是不同的。我们想一下这个需求我们该如何实现？

#### 3.2 实现

我们先来分析一下需求，我们现在需要一个工厂专门负责生产各种原料，所以我们可以定义一个接口，其中包含所有创建原料的方法：

```java

public interface PizzaIngredientFactory {

    public Cheese createCheese();

    public Dough createDough();

    public Veggie createVeggie();

    public Clam createClam();

}

```

这里，我们省略了原材料类的定义，这些类都是一些简单的Java类，不在这里赘述了。有了创建原料的接口之后，我们就可以针对不同的地区写不同的实现类用于生产原料，我们先定义两个实现类：

纽约的材料工厂和芝加哥的材料工厂：

```java

/**纽约材料工厂*/
public class NyPizzaIngredientFactory implements PizzaIngredientFactory {

    @Override
    public Cheese createCheese() {
        return new ReggianoCheese();
    }

    @Override
    public Dough createDough() {
        return new ThinCrustDough();
    }

    @Override
    public Veggie createVeggie() {
        return new NyStyleVeggie();
    }

    @Override
    public Clam createClam() {
        return new FreshClam();
    }

}

/**芝加哥材料工厂*/
public class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {

    @Override
    public Cheese createCheese() {
        return new MozzarellaCheese();
    }

    @Override
    public Dough createDough() {
        return new ThickCrustDough();
    }

    @Override
    public Veggie createVeggie() {
        return new ChicagoStyleVeggie();
    }

    @Override
    public Clam createClam() {
        return new FrozenClam();
    }

}

```

在这两个实现类中，我们分别实现了材料的纽约版本和芝加哥版本，例如，对于面团，纽约工厂生产的是薄面团，而芝加哥工厂生产的是厚面团，对于蛤蜊，纽约工厂生产新鲜蛤蜊，芝加哥工厂生产冷冻蛤蜊等。现在我们已经完成了原料的生产了，我们可以重新定义一下Pizza类，向其中添加原材料：

```java

public abstract class Pizza {
    Cheese cheese;
    Dough dough;
    Veggie veggie;
    Clam clam;

    public abstract void prepare();

    public void bake() {
        System.out.println("开始烘焙");
    }

    public void cut() {
        System.out.println("开始将比萨切块");
    }

    public void box() {
        System.out.println("开始打包比萨");
    }

}

```

和之前的例子不同，我们将Pizza声明为一个抽象类，并在其中定义了一系列的原材料属性，另外，我们将prepare()方法声明为抽象类型的，这样，子类实现Pizza类的时候必须要实现prepare()方法，在prepare()
方法中用来准备比萨的原材料，下面是我们实现的两个比萨类：

```java

/**芝士比萨*/
public class CheesePizza extends Pizza {

    PizzaIngredientFactory code.factory;

    public CheesePizza(PizzaIngredientFactory code.factory) {
        this.code.factory = code.factory;
    }

    @Override
    public void prepare() {
        cheese = code.factory.createCheese();
        veggie = code.factory.createVeggie();
        dough = code.factory.createDough();
    }

}

/**蛤蜊比萨*/
public class ClamPizza extends Pizza {

    PizzaIngredientFactory code.factory;

    public ClamPizza(PizzaIngredientFactory code.factory) {
        this.code.factory = code.factory;
    }


    @Override
    public void prepare() {
        cheese = code.factory.createCheese();
        veggie = code.factory.createVeggie();
        dough = code.factory.createDough();
        clam = code.factory.createClam();
    }

}

```

在这两个实现类中，我们都定义了一个原材料生产工厂，当比萨需要什么材料时，我们都可以通过工厂获得，另外，我们也无需关心材料工厂生产的是什么地区的材料，它是可以通过运行时指定的

**抽象工厂模式**提供了一个接口，用于创建相关或依赖对象的家族，而不需要明确指定具体类。

上面的定义描述的比较抽象，我们可以结合上一节介绍的实例来进行分析，在上一节中我们需要一个工厂来生产比萨的原材料，原材料有多种，这就类似于一个对象的家族，所以我们定义了一个`PizzaIngredientFactory`
接口用于生产原材料，但是原材料的具体类型则是由`PizzaIngredientFactory`
的实现类决定的，客户在使用PizzaIngredientFactory创建原材料时，完全不用实例化具体的材料，因为选择了指定的工厂就会生产出相应的原材料。

抽象工厂模式允许客户使用抽象接口来创建一组相关的产品，而不需要知道实际产出的具体产品是什么，这样一来，客户就从具体的产品中被解耦