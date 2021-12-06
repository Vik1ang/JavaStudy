package leetcode.meituan.q1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String line = br.readLine();

        int number = Integer.parseInt(line);

        for (int i = 0; i < number; i++) {
            boolean isAlphabetic = true;
            boolean isValid = true;
            boolean isCharacterAndNum = true;

            line = br.readLine();

            char[] charArray = line.toCharArray();
            System.out.println(charArray[0]);
            if (!Character.isAlphabetic(charArray[0])) {
                isAlphabetic = false;
            }

            int count = 0;
            for (int j = 1; j < charArray.length; j++) {
                char c = charArray[j];
                if (!Character.isDigit(c) && !Character.isAlphabetic(c)) {
                    isValid = false;
                    break;
                }
                if (Character.isDigit(c)) {
                    count++;
                }
            }

            if (count == 0) {
                isCharacterAndNum = false;
            }

            if (isAlphabetic && isValid && isCharacterAndNum) {
                System.out.println("Accept");
            } else {
                System.out.println("Wrong");
            }
        }
    }
}
