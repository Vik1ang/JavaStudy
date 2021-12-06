package leetcode.meituan.q1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution1 {
    public static void main(String[] args) throws IOException {
        String regex = "^([a-zA-Z])([a-zA-Z0-9]*)([0-9]+)([a-zA-Z0-9]*)$";
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String line = br.readLine();
        int number = Integer.parseInt(line);

        while (number-- > 0) {
            line = br.readLine();
            System.out.println(line.matches(regex) ? "Accept" : "Wrong");
        }

    }
}
