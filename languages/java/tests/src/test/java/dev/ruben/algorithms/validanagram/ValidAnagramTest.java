package dev.ruben.algorithms.validanagram;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class ValidAnagramTest {

    @Test
    void acceptsARearrangementOfTheSameLetters() {
        assertTrue(ValidAnagram.isAnagram("anagram", "nagaram"));
    }

    @Test
    void rejectsWordsBuiltFromDifferentLetters() {
        assertFalse(ValidAnagram.isAnagram("rat", "car"));
    }

    @Test
    void rejectsStringsOfDifferentLength() {
        assertFalse(ValidAnagram.isAnagram("a", "ab"));
        assertFalse(ValidAnagram.isAnagram("anagram", "nagara"));
    }

    @Test
    void acceptsTwoEmptyStrings() {
        assertTrue(ValidAnagram.isAnagram("", ""));
    }

    @Test
    void rejectsTheSameLettersUsedADifferentNumberOfTimes() {
        assertFalse(ValidAnagram.isAnagram("aacc", "ccac"));
    }

    @Test
    void acceptsAnagramsWithRepeatedLetters() {
        assertTrue(ValidAnagram.isAnagram("aabbcc", "baccab"));
    }

    @Test
    void treatsUppercaseAndLowercaseAsDifferentLetters() {
        assertFalse(ValidAnagram.isAnagram("Listen", "silent"));
    }

    @Test
    void acceptsAStringComparedWithAnIdenticalOne() {
        assertTrue(ValidAnagram.isAnagram("listen", "listen"));
    }
}
