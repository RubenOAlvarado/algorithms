package main

func isPalindromeNumber(n int) bool {
	if n < 0 {
		return false
	}
	original := n
	reversed := 0
	maxVal := 1<<31 - 1
	for n > 0 {
		digit := n % 10
		reversed = reversed*10 + digit
		n /= 10
		if reversed > maxVal {
			return false
		}
	}
	return original == reversed
}
