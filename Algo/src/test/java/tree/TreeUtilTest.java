package tree;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class TreeUtilTest {

    private Node root;
    private Node tree1;
    private Node tree2;

    @BeforeEach
    public void initTree() {
        root = TreeCreator.createTree(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15}, 0);
        tree1 = TreeCreator.createTree(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15}, 0);
        tree2 = TreeCreator.createTree(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, -1}, 0);

    }

    @Test
    public void testSearch() {
        Node node = TreeUtils.search(root, 15);
        assertEquals(node.value, 15);
    }

    @Test
    public void testCount() {
        assertEquals(15, TreeUtils.count(root));
    }

    @Test
    public void testDepth() {
        assertEquals(4, TreeUtils.depth(root));
    }

    @Test
    public void testIsSameTree() {
        assertTrue(TreeUtils.isSameTree(root, tree1));
        assertFalse(TreeUtils.isSameTree(root, tree2));
    }
}
