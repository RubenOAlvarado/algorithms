package main

import "fmt"

func main() {
	fmt.Println("Chunk Array Algorithm in Go")
	test1 := []int{1, 2, 3, 4, 5, 6, 7}
	size1 := 3
	result1 := ChunkArray(test1, size1)
	fmt.Println("Input:", test1, "Chunk Size:", size1, "Result:", result1)
}

func ChunkArray(arr []int, size int) [][]int {
	if size <= 0 {
		return nil
	}
	var chunks [][]int
	for i := 0; i < len(arr); i += size {
		end := min(i+size, len(arr))
		chunks = append(chunks, arr[i:end])
	}
	return chunks
}
