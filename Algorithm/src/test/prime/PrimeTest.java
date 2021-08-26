package test.prime;

import org.junit.Test;
import prime.Prime;

public class PrimeTest {

    @Test
    public void testPrimeBasic() {
        Prime prime = new Prime();
        final boolean isPrime = prime.isPrimeBasic(151);
        System.out.println(isPrime);
    }

    @Test
    public void testPrimeSquareRoot() {
        final Prime prime = new Prime();
        final boolean isPrime = prime.isPrimeSquareRoot(152);
        System.out.println(isPrime);
    }
}
