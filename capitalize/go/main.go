package main

import (
	"fmt"
	"strings"

	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

func main() {
	fmt.Println("Capitalize a sentence algorithm in Go")
	fmt.Println("Input: 'hello world' -> Output:", capitalize("hello world"))
	fmt.Println("Input: 'javaScript is fun' -> Output:", capitalize("javaScript is fun"))
	fmt.Println("Input: 'GO is AWESOME' -> Output:", capitalize("GO is AWESOME"))
	fmt.Println("Input: 'this is a test' -> Output:", capitalize("this is a test"))
}

func capitalize(s string) string {
	words := strings.Fields(s)
	for i, word := range words {
		words[i] = cases.Title(language.English).String(word)
	}
	return strings.Join(words, " ")
}
