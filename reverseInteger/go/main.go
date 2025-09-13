package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
	fmt.Println("Working with the reverseInteger function:")
	test1 := reverseInteger(12345)
	fmt.Printf("Reversed 12345: %d\n", test1)
	test2 := reverseInteger(-67890)
	fmt.Printf("Reversed -67890: %d\n", test2)
	fmt.Println("Done.")
}

func reverseInteger(n int) int {
	// Handle negative numbers
	sign := 1
	// If n is negative, set sign to -1 and make n positive
	if n < 0 {
		sign = -1
		n = -n
	}
	// Reverse the digits
	reversed := 0
	// To handle overflow, we need to check if the reversed number will exceed 32-bit signed integer range
	// The range is [-2^31, 2^31 - 1]
	// So we need to check if reversed > (2^31 - 1) / 10 before multiplying by 10 and adding the next digit
	// Similarly for negative numbers, we check if reversed > 2^31 / 10
	// We can use a variable to store the maximum value based on the sign
	maxVal := 1<<31 - 1
	if sign == -1 {
		maxVal = 1 << 31
	}

	for n > 0 {
		// Get the last digit
		digit := n % 10
		// Check for overflow
		if reversed > (maxVal-digit)/10 {
			return 0 // Handle overflow
		}
		// Append digit to reversed
		reversed = reversed*10 + digit
		n /= 10
	}
	return sign * reversed
}
