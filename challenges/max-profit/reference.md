# MaxProfit Algorithm reference notes

This document belongs to the reference material. The tutor should not reveal it
before the learner has attempted the challenge.

## Algorithm
1. Initialize two variables: `min_price` to a very high value and `max_profit` to 0.
2. Loop through each price in the array:
   - If the current price is less than `min_price`, update `min_price`.
   - Calculate the potential profit by subtracting `min_price` from the current price.
   - If this potential profit is greater than `max_profit`, update `max_profit`.
3. After iterating through all prices, return `max_profit`.
