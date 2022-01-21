package com.vik1ang.gc;

import java.lang.ref.Reference;
import java.lang.ref.ReferenceQueue;
import java.lang.ref.SoftReference;
import java.util.ArrayList;

public class Demo2_4 {
    private static final int _4MB = 4 * 1024 * 1024;

    public static void main(String[] args) {
        ArrayList<SoftReference<byte[]>> list = new ArrayList<>();
        ReferenceQueue<byte[]> referenceQueue = new ReferenceQueue<>();

        for (int i = 0; i < 5; i++) {
            SoftReference<byte[]> ref = new SoftReference<>(new byte[_4MB], referenceQueue);
            System.out.println(ref.get());
            list.add(ref);
            System.out.println(list.size());
        }


        Reference<? extends byte[]> poll = referenceQueue.poll();
        while (poll != null) {
            list.remove(poll);
            poll = referenceQueue.poll();
        }

        System.out.println("循环结束: " + list.size());
        for (SoftReference<byte[]> ref : list) {
            System.out.println(ref.get());
        }
    }
}
