package main

import "fmt"

func main() {
	fmt.Println(" First occurrence of a char in a string algorithm in Go")
	fmt.Println("==============================================")
	fmt.Println("The first occurrence of 'a' in 'abca' is at index:", firstOccurrence("abca", 'a'))
	fmt.Println("The first occurrence of 'x' in 'hello' is at index:", firstOccurrence("hello", 'x'))
	fmt.Println("The first occurrence of 'o' in 'hello world' is at index:", firstOccurrence("hello world", 'o'))
}

func firstOccurrence(s string, char rune) int {
	for i, c := range s {
		if c == char {
			return i
		}
	}
	return -1
}
