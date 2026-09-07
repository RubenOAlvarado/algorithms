package dev.ruben.algorithms.fizzbuzz;

import java.util.ArrayList;
import java.util.List;

public final class FizzBuzz {

    private FizzBuzz() {
    }

    /**
     * Returns the FizzBuzz representation of every integer from 1 through n.
     *
     * <p>Time complexity: O(n). Space complexity: O(n) for the returned list.</p>
     */
    public static List<String> generate(int n) {
        var result = new ArrayList<String>(n);

        for (int value = 1; value <= n; value++) {
            if (value % 3 == 0 && value % 5 == 0) {
                result.add("FizzBuzz");
            } else if (value % 3 == 0) {
                result.add("Fizz");
            } else if (value % 5 == 0) {
                result.add("Buzz");
            } else {
                result.add(Integer.toString(value));
            }
        }

        return result;
    }
}
