# first-turn-blackjack reference notes

This document belongs to the reference material. The tutor should not reveal it
before the learner has attempted the challenge.

## Algorithm to solve it
- Create a function that takes three strings as input: card1, card2, and dealerCard.
- Create a map to store the values of each card.
- Create a function to calculate the first turn decision based on the given rules.
- Check if card1 and card2 sum 22 (both are aces). If true, return "P" (split).
- Check if card1 and card2 sum 21 (blackjack). If true, check if dealerCard is "ace", "king", "queen", "jack", or "ten". If true, return "S" (stand). Otherwise, return "W" (win).
- Check if card1 and card2 sum between 17 and 20. If true, return "S" (stand).
- Check if card1 and card2 sum between 12 and 16. If true, check if dealerCard value is 7 or higher. If true, return "H" (hit). Otherwise, return "S" (stand).
- If none of the above conditions are met, return "H" (hit).
