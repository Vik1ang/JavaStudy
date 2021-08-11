# 单例设计模式

### 1. 为什么会有单例设计模式

单例模式主要是为了避免因为创建了多个实例造成资源的浪费, 且多个实例由于多次调用容易导致结果出现错误,
**而使用单例模式能够保证整个应用中有且只有一个实例**

### 2. 设计思想

1. **不允许其他程序用new对象**

   因为new就是开辟新的空间，在这里更改数据只是更改的所创建的对象的数据，如果可以new的话，每一次new都产生一个对象，这样肯定保证不了对象的唯一性

2. **在该类中创建对象**

   因为不允许其他程序new对象，所以这里的对象需要在本类中new出来

3. **对外提供一个可以让其他程序获取该对象的方法**

   因为对象是在本类中创建的，所以需要提供一个方法让其它的类获取这个对象

**转换成代码**

1. 私有化该类的构造函数
2. 通过new在本类中创建一个本类对象
3. 定义一个公有的方法，将在该类中所创建的对象返回

### 3. 写法

#### 3.1 饿汉式

```java

public class Singleton {

    public static Singleton getInstance() {
        return instance;
    }

    private static Singleton instance = new Singleton();

    public static Singleton getInstance() {
        return instance;
    }
}

```

优点: 从它的实现中我们可以看到，这种方式的实现比较简单，在类加载的时候就完成了实例化，避免了线程的同步问题。

缺点：由于在类加载的时候就实例化了，所以没有达到Lazy Loading(懒加载)的效果，也就是说可能我没有用到这个实例，但是它

也会加载，会造成内存的浪费(但是这个浪费可以忽略，所以这种方式也是推荐使用的)

#### 3.2 饿汉式变换写法

```java

public class Singleton {

    private static Singleton instance = null;

    static {
        instance = new Singleton();
    }

    private Singleton() {

    }

    public static Singleton getInstance() {
        return instance;
    }
}
```

优缺点和4.1一样，可以归为一种写法

#### 3.3 懒汉式 (线程不安全不可用)

```java

public class Singleton {

    private static Singleton instance = null;

    private Singleton() {

    }

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

}

```

这种方式是在调用getInstance方法的时候才创建对象的，所以它比较懒因此被称为懒汉式

在运行过程中可能存在这么一种情况：有多个线程去调用`getInstance`方法来获取Singleton的实例, 那么就有可能发生这样一种情况当第一个线程在执行`if(instance==null)`
这个语句时，此时`instance`是为`null`的进入语句. 在还没有执行`instance=new Singleton()`时(此时`instance`是为`null`的)第二个线程也进入`if(instance==null)`
这个语句，因为之前进入这个语句的线程中还没有执行`instance=new Singleton()`，所以它会执行`instance=new Singleton()`
来实例化`Singleton`对象，因为第二个线程也进入了if语句所以它也会实例化Singleton对象。这样就导致了**实例化了两个Singleton对象**

#### 3.4 懒汉式(线程安全, 效率低不可用)

```java

public class Singleton {

    private static Singleton instance = null;

    private Singleton {

    }

    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance();
    }
}

```

缺点：效率太低了，每个线程在想获得类的实例时候，执行getInstance()方法都要进行同步。而其实这个方法只执行一次实例化代码就够了，后面的想获得该类实例，直接return就行了。

#### 3.5 懒汉式(线程不安全, 不可用)

```java

public class Singleton {

    private static Singleton instance = null;

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                instance = new Singleton();
            }
        }
        return instance;
    }

}
```

线程不安全的，当一个线程还没有实例化`Singleton`时另一个线程执行到`if(instance==null)`这个判断语句时就会进入if语句，虽然加了锁，但是等到**
第一个线程执行完** `instance=new Singleton()`
跳出这个锁时，另一个进入if语句的线程同样会实例化另外一个Singleton对象

#### 3.6 懒汉式(双重校验锁, 推荐用)

```java


public class Singleton {

    private static Singleton instance = null;

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }

}

```

我们进行了**两次** `if (instance== null)` 检查，这样就可以保 证线程安全了. 这样，实例化代码只用执行一次，后面再次访问时，判断 `if (instance== null)`，直接return实例化对象

线程安全；延迟加载；效率较高

#### 3.7 内部类实现 (推荐用)

```java


public class Singleton {


    private Singleton() {
    }

    private static class SingletonHolder {
        private static Singleton instance = new Singleton();
    }

    public static Singleton getInstance() {
        return SingletonHolder.instance;
    }
}

```

这种方式跟饿汉式方式采用的机制类似，但又有不同。两者都是采用了类装载的机制来保证初始化实例时只有一个线程。不同

的地方在饿汉式方式是只要Singleton类被装载就会实例化，没有Lazy-Loading的作用，而静态内部类方式在Singleton类被装载时

并不会立即实例化，而是在需要实例化时，调用getInstance方法，才会装载SingletonHolder类，从而完成Singleton的实例化。

类的静态属性只会在第一次加载类的时候初始化，所以在这里，JVM帮助我们保证了线程的安全性，在类进行初始化时，别的线程是

无法进入的

优点：避免了线程不安全，延迟加载，效率高

#### 3.8 枚举 (极推荐使用)

```java

public enum SingletonEnum {

    instance;

    private SingletonEnum() {
    }

    public void method() {
    }

}

```

不仅能避免多线程同步问题，而且还能防止反序列化重新创建新的对象 