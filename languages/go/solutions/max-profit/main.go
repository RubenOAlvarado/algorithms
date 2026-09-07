package main

import "fmt"

func main() {
	prices := []int{7, 1, 5, 3, 6, 4}
	profit := maxProfit(prices)
	fmt.Println("Maximum Profit:", profit) // Output: Maximum Profit: 5
	prices = []int{7, 6, 4, 3, 1}
	profit = maxProfit(prices)
	fmt.Println("Maximum Profit:", profit) // Output: Maximum Profit: 0
	prices = []int{1, 2}
	profit = maxProfit(prices)
	fmt.Println("Maximum Profit:", profit) // Output: Maximum Profit: 1
}

func maxProfit(prices []int) int {
	minPrice, maxProfit := int(^uint(0)>>1), 0
	for _, price := range prices {
		if price < minPrice {
			minPrice = price
		}
		potentialPrice := price - minPrice
		if potentialPrice > maxProfit {
			maxProfit = potentialPrice
		}
	}
	return maxProfit
}
