package main

import "fmt"

func main() {
	fmt.Println("Fibonacci Sequence in Go:")
	test1 := 10
	fmt.Printf("Fibonacci of %d is %d\n", test1, fibonacci(test1))
	test2 := 20
	fmt.Printf("Fibonacci of %d is %d\n", test2, fibonacci(test2))
}

func fibonacci(n int) int {
	if n <= 1 {
		return n
	}
	return fibonacci(n-1) + fibonacci(n-2)
}
