[English](./EXPLANATION.md) | [Español](./EXPLANATION.es.md)

# FizzBuzz

`func FizzBuzz(n int) []string` returns one string for each value from `1`
through `n`.

Use a tagless `switch` so the combined divisibility rule is checked first.
`strconv.Itoa` converts ordinary values to their decimal strings. The algorithm
runs in O(n) time and uses O(n) space for the result.
