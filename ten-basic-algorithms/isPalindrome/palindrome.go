package main

import (
	"fmt"
	"unicode"
)

func isPalindrome(str string) bool {
	var runes []rune
	for _, r := range str {
		if unicode.IsLetter(r) || unicode.IsNumber(r) {
			runes = append(runes, unicode.ToLower(r))
		}
	}
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		if runes[i] != runes[j] {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(isPalindrome("Was it a car or a cat I saw?"))
	fmt.Println(isPalindrome("No 'x' in Nixon"))
	fmt.Println(isPalindrome("Hello, World!"))
}