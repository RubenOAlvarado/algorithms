package main

import "fmt"

func fibonacci() ()int {
	a,b := 1,0
	return func() int {
		fib := a
		a,b = b,a+b
		return fib
	}
}

func main() {
	f := fibonacci()
	for i := 0; i < 10; i++ {
		fmt.Println(f())
	}
}