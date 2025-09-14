package main

import "fmt"

func main() {
	fmt.Println("Sum Digits Algorithm in Go")
	fmt.Println(sumDigits(12345)) // Output: 15
	fmt.Println(sumDigits(0))     // Output: 0
	fmt.Println(sumDigits(-123))  // Output: 6
}

func sumDigits(n int) int {
	if n < 0 {
		n = -n
	}
	sum := 0
	for n != 0 {
		sum += n % 10
		n /= 10
	}
	return sum
}
