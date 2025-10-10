## First Turn in Blackjack

## Problem Statement
Simulate the first turn of a BlackJack game. You'll receive two cards and see the dealer's face-up card. All cards are represented as strings like "ace", "king", "two", etc.

The value of each card is:

| Card    | Value |
|---------|-------|
| ace     | 11    |
| king    | 10    |
| queen   | 10    |
| jack    | 10    |
| ten     | 10    |
| nine    | 9     |
| eight   | 8     |
| seven   | 7     |
| six     | 6     |
| five    | 5     |
| four    | 4     |
| three   | 3     |
| two     | 2     |
| other   | 0     |

> **Note:** Commonly, aces can take the value of 1 or 11 but for simplicity we will assume that they can only take the value of 11.

Depending on your two cards and the card of the dealer, there is a strategy for the first turn of the game, in which you have the following options:

- Stand (S)
- Hit (H)
- Split (P)
- Automatically win (W)

Although not optimal yet, you will follow the strategy your friend Alex has been developing, which is as follows:

- If you have a pair of aces you must always split them.
- If you have a Blackjack (two cards that sum up to a value of 21), and the dealer does not have an ace, a face card (Jack/Queen/King) or a ten then you automatically win. If the dealer does have any of those cards then you'll have to stand and wait for the reveal of the other card.
- If your cards sum up to a value within the range [17, 20] you should always stand.
- If your cards sum up to a value within the range [12, 16] you should always stand unless the dealer has a 7 or higher, in which case you should always hit.
- If your cards sum up to 11 or lower you should always hit.

## Algorithm to solve it
- Create a function that takes three strings as input: card1, card2, and dealerCard.
- Create a map to store the values of each card.
- Create a function to calculate the first turn decision based on the given rules.
- Check if card1 and card2 sum 22 (both are aces). If true, return "P" (split).
- Check if card1 and card2 sum 21 (blackjack). If true, check if dealerCard is "ace", "king", "queen", "jack", or "ten". If true, return "S" (stand). Otherwise, return "W" (win).
- Check if card1 and card2 sum between 17 and 20. If true, return "S" (stand).
- Check if card1 and card2 sum between 12 and 16. If true, check if dealerCard value is 7 or higher. If true, return "H" (hit). Otherwise, return "S" (stand).
- If none of the above conditions are met, return "H" (hit).

## Implementations
- [Typescript](./ts)
- [Go](./go)
