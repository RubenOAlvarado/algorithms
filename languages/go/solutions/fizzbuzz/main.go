package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println(FizzBuzz(15))
}

// FizzBuzz returns the representation of every integer from 1 through n.
// Its time complexity is O(n), and it uses O(n) space for the result.
func FizzBuzz(n int) []string {
	result := make([]string, 0, n)

	for value := 1; value <= n; value++ {
		switch {
		case value%3 == 0 && value%5 == 0:
			result = append(result, "FizzBuzz")
		case value%3 == 0:
			result = append(result, "Fizz")
		case value%5 == 0:
			result = append(result, "Buzz")
		default:
			result = append(result, strconv.Itoa(value))
		}
	}

	return result
}
