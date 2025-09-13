package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
	fmt.Println("Working with the reverseString function:")
	test1 := reverseString("hello")
	fmt.Printf("Reversed 'hello': %s\n", test1)
	test2 := reverseString("GoLang")
	fmt.Printf("Reversed 'GoLang': %s\n", test2)
	test3 := reverseString("12345")
	fmt.Printf("Reversed '12345': %s\n", test3)
	fmt.Println("Done.")
}

func reverseString(s string) string {
	// Convert string to rune slice to handle multi-byte characters
	runes := []rune(s)
	// for loop to swap characters in place
	// i starts at the beginning, j starts at the end
	// continue until they meet in the middle
	// swap runes[i] and runes[j]
	// increment i, decrement j
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		// swap runes[i] and runes[j] with multiassignment
		runes[i], runes[j] = runes[j], runes[i]
	}
	// convert rune slice back to string and return
	return string(runes)
}
