package main

import "fmt"

func average(numbers []int) float64 {
	var sum int
	for _, number := range numbers {
		sum += number
	}
	return float64(sum) / float64(len(numbers))
}

func main() {
	numbers := []int{1, 2, 3, 4, 5}
	avg := average(numbers)
	fmt.Printf("The average of %v is %f\n", numbers, avg)
}