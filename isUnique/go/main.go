package main

import "fmt"

func main() {
	fmt.Println("Is Unique Algorithm in Go")
	fmt.Println("==============================================")
	fmt.Println("Input: 'abcdef' -> Output:", isUnique("abcdef")) // true
	fmt.Println("Input: 'hello' -> Output:", isUnique("hello"))
}

func isUnique(s string) bool {
	charSet := make(map[rune]bool)
	for _, c := range s {
		if charSet[c] {
			return false
		}
		charSet[c] = true
	}
	return true
}
