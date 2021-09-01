package tree;

public class TraverseRecursion {
    public static void preOrder(Node T) {
        if (T == null) {
            return;
        }
        System.out.print(T.value + " ");
        preOrder(T.left);
        preOrder(T.right);
    }

    public static void inOrder(Node T) {
        if (T == null) {
            return;
        }
        inOrder(T.left);
        System.out.print(T.value + " ");
        inOrder(T.right);
    }

    public static void postOrder(Node T) {
        if (T == null) {
            return;
        }
        postOrder(T.left);
        postOrder(T.right);
        System.out.print(T.value + " ");
    }
}
