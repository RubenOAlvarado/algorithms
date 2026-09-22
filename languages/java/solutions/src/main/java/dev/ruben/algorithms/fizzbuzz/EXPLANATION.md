[English](./EXPLANATION.md) | [Español](./EXPLANATION.es.md)

# FizzBuzz reference

`FizzBuzz.generate(int n)` returns a `List<String>` containing the
representations from 1 through `n`.

The result is an `ArrayList` with initial capacity `n`, avoiding growth while
the expected values are appended. The class is `final` and has a private
constructor because it only exposes a static utility method.

The method visits each value once, so time complexity is O(n). The returned
list uses O(n) space.
