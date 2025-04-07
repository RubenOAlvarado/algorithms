package main

import "strings"

func wordCount(s string) map[string]int {
	words := strings.Fields(s)
	counts := make(map[string]int)

	for _, word := range words {
		counts[word]++
	}

	return counts
}

func main() {
	text := "hello world hello"
	counts := wordCount(text)

	for word, count := range counts {
		println(word, count)
	}
}