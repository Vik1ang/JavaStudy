package com.vik1ang.load;

public class Load3 {
    public static void main(String[] args) throws ClassNotFoundException {
        // 1 静态常量不会触发初始化
        // System.out.println(B.b);
        // 2 类对象不会触发初始化
        // System.out.println(B.class);
        // 3 创建该类数组不会导致初始化
        // System.out.println(new B[1]);
        // 4 不会初始化类B但会夹在B A
        // ClassLoader classLoader1 = Thread.currentThread().getContextClassLoader();
        // classLoader1.loadClass("com.vik1ang.load.B");
        // 5 不会初始化类B但会夹在B A
        // ClassLoader classLoader2 = Thread.currentThread().getContextClassLoader();
        // Class.forName("com.vik1ang.load.B", false, classLoader2);

        // 1 首次访问类的静态变量或静态方法
        // System.out.println(A.a);
        // 2 子类初始化，如果父类未初始化会引发
        // System.out.println(B.c);
        // 3 子类访问父类静态变量只触发父类初始化
        // System.out.println(B.a);
        // 4 会初始化类B并先初始化类A
        Class.forName("com.vik1ang.load.B");
    }
}

class A {
    static int a = 0;
    static {
        System.out.println("a init");
    }
}

class B extends A {
    final static double b = 5.0;
    static boolean c = false;
    static {
        System.out.println("b init");
    }
}
