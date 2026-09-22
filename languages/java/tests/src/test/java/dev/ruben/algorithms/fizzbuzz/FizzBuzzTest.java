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
    void representsOneAsItsDecimalValue() {
        assertEquals(List.of("1"), FizzBuzz.generate(1));
    }

    @Test
    void endsWithFizzForThree() {
        assertEquals(List.of("1", "2", "Fizz"), FizzBuzz.generate(3));
    }

    @Test
    void returnsTheFiveValueExample() {
        assertEquals(
                List.of("1", "2", "Fizz", "4", "Buzz"),
                FizzBuzz.generate(5));
    }

    @Test
    void returnsTheFifteenValueReadmeExample() {
        assertEquals(
                List.of(
                        "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8",
                        "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"),
                FizzBuzz.generate(15));
    }

    @Test
    void representsTheFifteenthValueAsFizzBuzzInsteadOfFizz() {
        var values = FizzBuzz.generate(15);
        assertEquals(15, values.size());
        assertEquals("FizzBuzz", values.get(14));
    }

    @Test
    void returnsExactlyTwoFizzBuzzValuesThroughThirty() {
        assertEquals(2, FizzBuzz.generate(30).stream()
                .filter("FizzBuzz"::equals)
                .count());
    }

    @Test
    void returnsExactlyOneHundredRepresentationsForOneHundred() {
        assertEquals(100, FizzBuzz.generate(100).size());
    }
}
