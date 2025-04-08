package main

import (
	"fmt"
	"strings"
)

func pyramidString(n int) string {
	var result strings.Builder
	for i := 1; i <= n; i++ {
		result.WriteString(strings.Repeat(" ", n-i))
		result.WriteString(strings.Repeat("*", 2*i-1))
		result.WriteString("\n")
	}
	return result.String()
}

func main() {
	n := 5
	result := pyramidString(n)
	fmt.Println(result)
}