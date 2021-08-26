package prime;

import java.util.Arrays;

public class Prime {
    public boolean isPrimeBasic(int n) {
        boolean isPrime = true;
        if (n == 2) {
            return true;
        }
        for (int i = n - 1; i > 1; i--) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }

    public boolean isPrimeSquareRoot(int n) {
        boolean isPrime = true;
        if (n == 2) {
            return true;
        }
        int sqrt = (int) Math.sqrt(n);
        for (int i = sqrt; i > 1; i--) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }

    public boolean isPrimeRange(int n) {
        boolean[] isPrime = new boolean[n + 1];
        Arrays.fill(isPrime, 2, n + 1, true);
        int sqrt = (int) Math.sqrt(n);
        for (int i = 2; i <= sqrt; i++) {
            if (isPrime[i]) {
                for (int j = i; j * i < n; j++) {
                    isPrime[j * i] = false;
                }
            }
        }
        return isPrime[n];
    }
}
