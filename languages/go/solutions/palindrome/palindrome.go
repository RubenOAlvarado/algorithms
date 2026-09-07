package main

import (
	"strings"
	"unicode"
)

func isPalindrome(s string) bool {
	// 1. Convert to lowercase and remove non-letter characters
	var cleaned strings.Builder
	for _, r := range s {
		if unicode.IsLetter(r) {
			cleaned.WriteRune(unicode.ToLower(r))
		}
	}
	cleanedStr := cleaned.String()
	// 2. Reverse the cleaned string
	reversed := reverseString(cleanedStr)
	// 3. Compare cleaned string with its reverse
	return cleanedStr == reversed
}
