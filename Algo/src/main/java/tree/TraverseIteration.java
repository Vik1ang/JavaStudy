package tree;

import java.util.Deque;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class TraverseIteration {
    public static void preOrder(Node root) {
        if (root == null) {
            return;
        }
        Deque<Node> queue = new LinkedList<>();
        Node node = root;
        while (node != null || !queue.isEmpty()) {
            while (node != null) {
                System.out.print(node.value + " ");
                queue.push(node);
                node = node.left;
            }
            node = queue.pop();
            node = node.right;
        }
    }

    public static void inOrder(Node root) {
        if (root == null) {
            return;
        }
        Deque<Node> queue = new LinkedList<>();
        Node node = root;
        while (node != null || !queue.isEmpty()) {
            while (node != null) {
                queue.push(node);
                node = node.left;
            }
            node = queue.pop();
            System.out.print(node.value + " ");
            node = node.right;
        }
    }

    public static void postOrder(Node root) {
        if (root == null) {
            return;
        }
        Deque<Node> queue = new LinkedList<>();
        Node node = root;
        Node prev = null;
        while (node != null || !queue.isEmpty()) {
            while (node != null) {
                queue.push(node);
                node = node.left;
            }
            node = queue.pop();
            if (node.right == null || node.right == prev) {
                System.out.print(node.value + " ");
                prev = node;
                node = null;
            } else {
                queue.push(node);
                node = node.right;
            }
        }
    }

    public static void levelOrder(Node root) {
        if (root == null) {
            return;
        }
        Deque<Node> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            Node node = queue.poll();
            System.out.print(node.value + " ");
            if (node.left != null) {
                queue.offer(node.left);
            }
            if (node.right != null) {
                queue.offer(node.right);
            }

        }
    }

}
