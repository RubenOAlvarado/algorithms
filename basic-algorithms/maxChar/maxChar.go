package main

import "fmt"

func maxChar(s string) (char rune, count int){
	for _, c := range s {
		if count < 1 {
			char = c
			count = 1
		} else if c == char {
			count++
		} else {
			count--
		}
	}
	return char, count
}

func main() {
	s := "abcccccccd"
	char, count := maxChar(s)
	fmt.Printf("The character '%c' appears the most with a count of %d\n", char, count)
}