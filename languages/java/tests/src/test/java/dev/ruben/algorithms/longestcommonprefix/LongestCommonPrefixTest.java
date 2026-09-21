package dev.ruben.algorithms.longestcommonprefix;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class LongestCommonPrefixTest {

    @Test
    void returnsThePrefixSharedByEveryString() {
        assertEquals("fl", LongestCommonPrefix.longestCommonPrefix(new String[] {"flower", "flow", "flight"}));
    }

    @Test
    void returnsAnEmptyStringWhenTheStringsShareNothing() {
        assertEquals("", LongestCommonPrefix.longestCommonPrefix(new String[] {"dog", "racecar", "car"}));
    }

    @Test
    void returnsAnEmptyStringForAnEmptyArray() {
        assertEquals("", LongestCommonPrefix.longestCommonPrefix(new String[] {}));
    }

    @Test
    void returnsTheOnlyStringWhenTheArrayHasASingleEntry() {
        assertEquals("alone", LongestCommonPrefix.longestCommonPrefix(new String[] {"alone"}));
    }

    @Test
    void returnsTheWholeStringWhenEveryEntryIsIdentical() {
        assertEquals("same", LongestCommonPrefix.longestCommonPrefix(new String[] {"same", "same", "same"}));
    }

    @Test
    void stopsAtTheEndOfTheShortestString() {
        assertEquals("pre", LongestCommonPrefix.longestCommonPrefix(new String[] {"prefix", "pre", "president"}));
        assertEquals("inters", LongestCommonPrefix.longestCommonPrefix(
                new String[] {"interspecies", "interstellar", "interstate"}));
    }

    @Test
    void returnsAnEmptyStringWhenAnyEntryIsEmpty() {
        assertEquals("", LongestCommonPrefix.longestCommonPrefix(new String[] {"", "abc"}));
        assertEquals("", LongestCommonPrefix.longestCommonPrefix(new String[] {"abc", ""}));
    }

    @Test
    void comparesCharactersCaseSensitively() {
        assertEquals("", LongestCommonPrefix.longestCommonPrefix(new String[] {"Flower", "flow"}));
    }
}
