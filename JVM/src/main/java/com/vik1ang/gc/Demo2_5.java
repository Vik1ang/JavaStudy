package com.vik1ang.gc;

import java.lang.ref.WeakReference;
import java.util.ArrayList;

// -Xmx20m -XX:+PrintGCDetails -verbose:gc

public class Demo2_5 {
    private static final int _4MB = 4 * 1024 * 1024;

    public static void main(String[] args) {
        ArrayList<WeakReference<byte[]>> list = new ArrayList<>();

        for (int i = 0; i < 20; i++) {
            WeakReference<byte[]> ref = new WeakReference<>(new byte[_4MB]);
            list.add(ref);
            for (WeakReference<byte[]> w : list) {
                System.out.print(w.get() + " ");
            }
            System.out.println();
        }

        System.out.println("循环结束" + list.size());
    }
}
