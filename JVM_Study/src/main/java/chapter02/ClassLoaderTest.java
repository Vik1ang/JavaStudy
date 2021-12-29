package chapter02;

public class ClassLoaderTest {
    public static void main(String[] args) {
        // 获取系统类加载器
        ClassLoader systemClassLoader = ClassLoader.getSystemClassLoader();
        System.out.println(systemClassLoader); // jdk.internal.loader.ClassLoaders$AppClassLoader@4b85612c

        // 获取其上层: 扩展类加载
        ClassLoader extClassLoader = systemClassLoader.getParent();
        System.out.println(extClassLoader); // jdk.internal.loader.ClassLoaders$PlatformClassLoader@cac736f

        ClassLoader bootStrapClassLoader = extClassLoader.getParent();
        System.out.println(bootStrapClassLoader); // null

        // 自定义类, 默认使用系统类加载
        ClassLoader classLoader = ClassLoaderTest.class.getClassLoader();
        System.out.println(classLoader); // jdk.internal.loader.ClassLoaders$AppClassLoader@4b85612c

        // String 使用引导类加载器进行加载 ---> Java的核心类库都是
        ClassLoader classLoader1 = String.class.getClassLoader();
        System.out.println(classLoader1); // null
    }
}
