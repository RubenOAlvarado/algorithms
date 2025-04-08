package main

import "fmt"

func factorial(n int) int {
	if n == 0 || n == 1 {
		return 1
	}
	// This is a recursive function that calls itself with n-1 until it reaches the base case.
	return n * factorial(n-1)
}

func main() {
	n := 5
	result := factorial(n)
	fmt.Printf("The factorial of %d is %d\n", n, result)
}