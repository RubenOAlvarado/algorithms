package main

import "fmt"

func main() {
	fmt.Println("Sum of Natural Numbers Algorithm in Go")
	fmt.Println(sumNaturalNumbers(5))  // Output: 15
	fmt.Println(sumNaturalNumbers(10)) // Output: 55
	fmt.Println(sumNaturalNumbers(0))  // Output: 0
}

func sumNaturalNumbers(n int) int {
	if n < 0 {
		return 0
	}
	sum := 0
	for i := range n {
		sum += i + 1
	}
	return sum
}
