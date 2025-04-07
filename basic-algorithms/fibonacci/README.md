# Fibonacci

## Description
The Fibonacci sequence is a series of numbers in which each number (after the first two) is the sum of the two preceding ones. The sequence commonly starts with 0 and 1. The Fibonacci sequence is defined by the recurrence relation:
\[ F(n) = F(n-1) + F(n-2) \]

## Examples
- Fibonacci(0) = 0
- Fibonacci(1) = 1
- Fibonacci(2) = 1
- Fibonacci(3) = 2

### Note
- This approach utilizes closures to maintain state across recursive calls, allowing for a more functional programming style. There are another approaches to implement Fibonacci, such as memoization and dynamic programming, which can be more efficient for larger values of n.