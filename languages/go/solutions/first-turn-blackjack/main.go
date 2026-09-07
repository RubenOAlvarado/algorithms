package main

import "fmt"

func main() {
	fmt.Println("First Turn in Blackjack Algorithm in Go")
	fmt.Println("==============================================")
	fmt.Println("Input: 'king', 'five', 'nine' -> Output:", firstTurn("king", "five", "nine"))
	fmt.Println("Input: 'ace', 'king', 'five' -> Output:", firstTurn("ace", "king", "five"))
	fmt.Println("Input: 'ace', 'ace', 'five' -> Output:", firstTurn("ace", "ace", "five"))         // P
	fmt.Println("Input: 'ace', 'king', 'nine' -> Output:", firstTurn("ace", "king", "nine"))       // S
	fmt.Println("Input: 'eight', 'nine', 'six' -> Output:", firstTurn("eight", "nine", "six"))     // S
	fmt.Println("Input: 'seven', 'eight', 'nine' -> Output:", firstTurn("seven", "eight", "nine")) // H
	fmt.Println("Input: 'seven', 'eight', 'six' -> Output:", firstTurn("seven", "eight", "six"))   // S
	fmt.Println("Input: 'five', 'six', 'ten' -> Output:", firstTurn("five", "six", "ten"))         // H
}

func parseCard(card string) int {
	return map[string]int{
		"ace": 11, "two": 2, "three": 3, "four": 4, "five": 5,
		"six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
		"jack": 10, "queen": 10, "king": 10,
	}[card]
}

func firstTurn(card1, card2, dealerCard string) string {
	parsedCard1 := parseCard(card1)
	parsedCard2 := parseCard(card2)
	parsedDealerCard := parseCard(dealerCard)
	sumCards := parsedCard1 + parsedCard2
	switch {
	case sumCards == 22:
		return "P"
	case sumCards == 21 && parsedDealerCard < 10:
		return "W"
	case sumCards == 21 && parsedDealerCard >= 10:
		return "S"
	case sumCards >= 17 && sumCards <= 20:
		return "S"
	case sumCards >= 12 && sumCards <= 16 && parsedDealerCard >= 7:
		return "H"
	case sumCards >= 12 && sumCards <= 16 && parsedDealerCard < 7:
		return "S"
	default:
		return "H"
	}
}
