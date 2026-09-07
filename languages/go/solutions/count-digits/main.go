package main

import "fmt"

func main() {
	fmt.Println("Count Digits Algorithm in Go")
	fmt.Println(countDigits(12345)) // Output: 5
	fmt.Println(countDigits(0))     // Output: 1
	fmt.Println(countDigits(-123))  // Output: 3
}

func countDigits(n int) int {
	if n == 0 {
		return 1
	}
	if n < 0 {
		n = -n
	}
	count := 0
	for n > 0 {
		count++
		n /= 10
	}
	return count
}
