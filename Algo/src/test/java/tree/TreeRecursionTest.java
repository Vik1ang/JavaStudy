package tree;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class TreeRecursionTest {

    private Node root;

    @BeforeEach
    public void initTree() {
        root = TreeCreator.createTree(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15}, 0);
    }

    @Test
    public void testPreOrder() {
        TraverseRecursion.preOrder(root);
    }

    @Test
    public void testInOrder() {
        TraverseRecursion.inOrder(root);
    }

    @Test
    public void testPostOrder() {
        TraverseRecursion.postOrder(root);
    }
}
