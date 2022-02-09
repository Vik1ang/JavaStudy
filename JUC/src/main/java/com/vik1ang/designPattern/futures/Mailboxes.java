package com.vik1ang.designPattern.futures;

import com.vik1ang.designPattern.GuardedObject;

import java.util.Hashtable;
import java.util.Map;
import java.util.Set;

public class Mailboxes {

    private static Map<Integer, GuardedObject> boxes = new Hashtable<>();

    private static int id = 1;

    private static synchronized int generateId() {
        return id++;
    }

    public static GuardedObject createGuardedObject() {
        GuardedObject guardedObject = new GuardedObject(generateId());
        boxes.put(guardedObject.getId(), guardedObject);
        return guardedObject;
    }

    public static Set<Integer> getIds() {
        return boxes.keySet();
    }
}
