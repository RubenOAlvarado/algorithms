package dev.ruben.algorithms.missingnumber;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class MissingNumberTest {

    @Test
    void findsTheValueMissingFromAShuffledRange() {
        assertEquals(2, MissingNumber.missingNumber(new int[] {3, 0, 1}));
    }

    @Test
    void findsTheValueMissingFromTheMiddleOfASortedRange() {
        assertEquals(3, MissingNumber.missingNumber(new int[] {0, 1, 2, 4, 5}));
    }

    @Test
    void findsZeroWhenTheSmallestValueIsMissing() {
        assertEquals(0, MissingNumber.missingNumber(new int[] {1, 2, 3}));
    }

    @Test
    void findsTheUpperBoundWhenTheLargestValueIsMissing() {
        assertEquals(2, MissingNumber.missingNumber(new int[] {0, 1}));
    }

    @Test
    void findsTheMissingValueInASingleElementArray() {
        assertEquals(1, MissingNumber.missingNumber(new int[] {0}));
        assertEquals(0, MissingNumber.missingNumber(new int[] {1}));
    }

    @Test
    void returnsZeroForAnEmptyArrayBecauseTheRangeIsOnlyZero() {
        assertEquals(0, MissingNumber.missingNumber(new int[] {}));
    }

    @Test
    void findsTheMissingValueInALongerRange() {
        assertEquals(8, MissingNumber.missingNumber(new int[] {9, 6, 4, 2, 3, 5, 7, 0, 1}));
    }
}
