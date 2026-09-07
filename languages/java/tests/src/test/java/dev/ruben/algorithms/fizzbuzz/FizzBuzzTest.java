package dev.ruben.algorithms.fizzbuzz;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;
import org.junit.jupiter.api.Test;

class FizzBuzzTest {

    @Test
    void returnsAnEmptyListForZero() {
        assertEquals(List.of(), FizzBuzz.generate(0));
    }

    @Test
    void representsOrdinaryNumbers() {
        assertEquals(List.of("1", "2"), FizzBuzz.generate(2));
    }

    @Test
    void replacesMultiplesOfThreeAndFive() {
        assertEquals(
                List.of("1", "2", "Fizz", "4", "Buzz"),
                FizzBuzz.generate(5));
    }

    @Test
    void prioritizesValuesDivisibleByBothThreeAndFive() {
        assertEquals("FizzBuzz", FizzBuzz.generate(15).getLast());
    }

    @Test
    void returnsOneRepresentationPerInputValue() {
        assertEquals(100, FizzBuzz.generate(100).size());
    }
}
