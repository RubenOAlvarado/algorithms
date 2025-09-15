package main

import "fmt"

func main() {
	fmt.Println("Hello, FizzBuzz in Go!")
	test1 := []int{1, 2, 3, 4, 5, 15}
	for _, n := range test1 {
		fmt.Printf("fizzBuzz(%d) = %s\n", n, fizzBuzz(n))
	}
}

func fizzBuzz(n int) string {
	if n%3 == 0 && n%5 == 0 {
		return "FizzBuzz"
	} else if n%3 == 0 {
		return "Fizz"
	} else if n%5 == 0 {
		return "Buzz"
	}
	return fmt.Sprintf("%d", n)
}
