package tree;

public class TreeCreator {
    public static Node createTree(int[] arr, int i) {
        if (i >= arr.length || arr[i] == -1) {
            return null;
        }
        Node root = new Node(arr[i]);
        root.left = createTree(arr, 2 * i + 1);
        root.right = createTree(arr, 2 * i + 2);
        return root;
    }

}
