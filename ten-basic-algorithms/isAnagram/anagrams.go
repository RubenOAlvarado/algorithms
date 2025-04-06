package main

import (
	"fmt"
	"sort"
	"unicode"
)

func cleanString(s string) string {
	// Create a slice to hold the runes
	// Preallocate the slice with the length of the string for efficiency
	runes := make([]rune, 0, len(s))
	// Iterate over each character in the string
	for _, r := range s {
		// Check if the character is a letter or a digit
		if unicode.IsLetter(r) || unicode.IsDigit(r) {
			// Append the rune to the slice
			runes = append(runes, unicode.ToLower(r))
		}
	}
	// Sort the slice of runes
	sort.Slice(runes, func(i, j int) bool {
		return runes[i] < runes[j]
	})
	// Convert the slice of runes back to a string
	return string(runes)
}

func isAnagram(s1, s2 string) bool {
	return cleanString(s1) == cleanString(s2)
}

func main() {
	s1 := "Listen"
	s2 := "Silent"

	if isAnagram(s1, s2) {
		fmt.Printf("%s and %s are anagrams.\n", s1, s2)
	} else {
		fmt.Printf("%s and %s are not anagrams.\n", s1, s2)
	}

	s3 := "Hello, World!"
	s4 := "dlroW ,olleH"

	if isAnagram(s3, s4) {
		fmt.Printf("%s and %s are anagrams.\n", s3, s4)
	} else {
		fmt.Printf("%s and %s are not anagrams.\n", s3, s4)
	}
}