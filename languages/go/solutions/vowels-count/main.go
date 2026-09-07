package main

import "fmt"

func main() {
	fmt.Println("Vowels Count Algorithm in Go")
	fmt.Println("Example: Count the number of vowels in the string 'Hello World'")
	input := "Hello World"
	vowelCount := countVowels(input)
	fmt.Printf("The number of vowels in '%s' is: %d\n", input, vowelCount)
	fmt.Println("End of Example")
	fmt.Println("===================================")
	fmt.Println("Example: Count the number of vowels in the string 'This is an example string'")
	input = "This is an example string"
	vowelCount = countVowels(input)
	fmt.Printf("The number of vowels in '%s' is: %d\n", input, vowelCount)
}

func countVowels(s string) int {
	count := 0
	vowels := []rune{'a', 'e', 'i', 'o', 'u'}
	for _, char := range s {
		for _, vowel := range vowels {
			if char == vowel || char == vowel-32 { // Check for both lowercase and uppercase
				count++
				break
			}
		}
	}
	return count
}
