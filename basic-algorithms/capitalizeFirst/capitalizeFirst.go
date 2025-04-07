package main

import(
	"unicode"
	"strings"
	"fmt"
)

func capitalizeFirstLetter(str string) string {
	// Split the string into words
	// and capitalize the first letter of each word
	words := strings.Split(str, " ")
	// Iterate over each word and capitalize the first letter
	// using unicode.ToUpper to handle Unicode characters
	for i, word := range words {
		if len(word) > 0 {
			r := []rune(word)
			r[0] = unicode.ToUpper(r[0])
			words[i] = string(r)
		}
	}
	// Join the words back into a single string
	// and return the result
	return strings.Join(words, " ")
}

func main() {
	str := "look, it is working!"
	capitalizedStr := capitalizeFirstLetter(str)
	fmt.Println(capitalizedStr)
}