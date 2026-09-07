package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
	fmt.Println("Working with the isPalindrome function:")
	test1 := isPalindrome("racecar")
	fmt.Printf("Is 'racecar' a palindrome? %t\n", test1)
	test2 := isPalindrome("hello")
	fmt.Printf("Is 'hello' a palindrome? %t\n", test2)
	test3 := isPalindrome("Anita lava la tina")
	fmt.Printf("Is 'Anita lava la tina' a palindrome? %t\n", test3)
}
