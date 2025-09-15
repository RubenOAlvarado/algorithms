package main

import "fmt"

func main() {
	fmt.Println("Longest Common Prefix Algorithm in Go")
	fmt.Println("Example usage:")
	strs := []string{"flower", "flow", "flight"}
	fmt.Println("Input:", strs)
	fmt.Println("Longest Common Prefix:", commonLongestPrefix(strs))
}

func commonLongestPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}
	prefix := strs[0]
	i := 1
	for i < len((prefix)) && i < len(strs) && prefix[:i] == strs[i][:i] {
		i++
	}
	return prefix[:i]
}
