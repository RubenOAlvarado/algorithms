package main

import "fmt"

func main() {
	fmt.Println("Reverse Array in Place Algorithm")
	const test1 = "[1,2,3,4,5] => [5,4,3,2,1]"
	const test2 = "[1,2,3,4] => [4,3,2,1]"
	fmt.Println("Test 1:", test1)
	fmt.Println("Test 2:", test2)
	fmt.Println("Result 1:", ReverseInPlace([]int{1, 2, 3, 4, 5}, 0, 4))
	fmt.Println("Result 2:", ReverseInPlace([]int{1, 2, 3, 4}, 0, 3))
	const test3 = "[1,2,3,4,5], start=1, end=3 => [1,4,3,2,5]"
	fmt.Println("Test 3:", test3)
	fmt.Println("Result 3 (subarray):", ReverseInPlace([]int{1, 2, 3, 4, 5}, 1, 3))
	const test4 = "[1,2,3,4,5,6,7,8,9], start=2, end=6 => [1,2,7,6,5,4,3,8,9]"
	fmt.Println("Test 4:", test4)
	fmt.Println("Result 4 (subarray):", ReverseInPlace([]int{1, 2, 3, 4, 5, 6, 7, 8, 9}, 2, 6))
	fmt.Println("Result 4 (subarray) with while:", ReverseInPlaceWithWhile([]int{1, 2, 3, 4, 5, 6, 7, 8, 9}, 2, 6))
}

func ReverseInPlace(arr []int, start, end int) []int {
	if start >= end || start < 0 || end >= len(arr) {
		return arr
	}
	for i := 0; i < (end-start+1)/2; i++ {
		arr[start+i], arr[end-i] = arr[end-i], arr[start+i]
	}
	return arr
}

func ReverseInPlaceWithWhile(arr []int, start, end int) []int {
	if start >= end || start < 0 || end >= len(arr) {
		return arr
	}
	for start < end {
		arr[start], arr[end] = arr[end], arr[start]
		start++
		end--
	}
	return arr
}
