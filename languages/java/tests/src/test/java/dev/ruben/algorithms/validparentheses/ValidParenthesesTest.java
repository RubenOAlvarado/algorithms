package dev.ruben.algorithms.validparentheses;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class ValidParenthesesTest {

    @Test
    void acceptsAnEmptyString() {
        assertTrue(ValidParentheses.isValid(""));
    }

    @Test
    void acceptsOnePairOfEveryBracketType() {
        assertTrue(ValidParentheses.isValid("()[]{}"));
    }

    @Test
    void acceptsBracketsNestedInsideEachOther() {
        assertTrue(ValidParentheses.isValid("([{}])"));
    }

    @Test
    void rejectsBracketsClosedInTheWrongOrder() {
        assertFalse(ValidParentheses.isValid("([)]"));
    }

    @Test
    void rejectsAPairClosedByAnotherBracketType() {
        assertFalse(ValidParentheses.isValid("(]"));
    }

    @Test
    void rejectsAnOpeningBracketThatIsNeverClosed() {
        assertFalse(ValidParentheses.isValid("("));
        assertFalse(ValidParentheses.isValid("([]"));
    }

    @Test
    void rejectsAClosingBracketWithoutAnOpeningOne() {
        assertFalse(ValidParentheses.isValid(")"));
        assertFalse(ValidParentheses.isValid("()]"));
    }
}
