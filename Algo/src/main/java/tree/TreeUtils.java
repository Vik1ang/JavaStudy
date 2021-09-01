package tree;

public class TreeUtils {
    // 查找某个值为x的结点
    public static Node search(Node T, int x) {
        if (T == null) {
            return null;
        }
        if (T.value == x) {
            return T;
        } else {
            if (search(T.left, x) == null) {
                return search(T.right, x);
            } else {
                return search(T.left, x);
            }
        }
    }

    // 统计树中节点的个数
    public static int count(Node T) {
        if (T == null) {
            return 0;
        } else {
            return count(T.left) + count(T.right) + 1;
        }
    }

    // 计算树的高度
    // 左右子树的高度中的比较高的加上根节点就是树的高度
    public static int depth(Node T) {
        if (T == null) {
            return 0;
        }
        return Math.max(depth(T.left), depth(T.right)) + 1;
    }

    // 判断两颗树是否相等
    public static boolean isSameTree(Node T1, Node T2) {
        if (T1 == null && T2 == null) {
            return true;
        } else {
            return T1 != null && T2 != null && T1.value == T2.value && isSameTree(T1.left, T2.left) && isSameTree(T1.right, T2.right);
        }
    }

}
