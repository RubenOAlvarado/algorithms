package main

import "fmt"

func chunkArray[T any](arr []T, size int) [][]T {
	// Empty slice to hold the chunks
	chunks := make([][]T, 0)
	// Loop through the array in steps of size
	for i := 0; i < len(arr); i += size {
		// Calculate the end index for the chunk
		end := i + size

		// If the end index exceeds the length of the array, set it to the length of the array
		if end > len(arr) {
			end = len(arr)
		}

		// Append the chunk to the chunks slice
		chunks = append(chunks, arr[i:end])
	}

	return chunks
}

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	size := 3
	chunks := chunkArray(arr, size)
	fmt.Println(chunks) // Output: [[1 2 3] [4 5 6] [7 8 9]]

	// Test with a string array
	strArr := []string{"a", "b", "c", "d", "e", "f", "g", "h"}
	strSize := 3
	strChunks := chunkArray(strArr, strSize)
	fmt.Println(strChunks) // Output: [[a b c] [d e f] [g h]]
}