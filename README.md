[English](./README.md) | [Español](./README.es.md)

# Algorithm Knowledge Tracker

A language-independent collection of algorithm challenges and their
implementations. Challenges are documented once and can be solved incrementally
in Java, TypeScript, Go, or any language added later.

## Project structure

```text
.
├── challenges/          # Language-independent problem statements
│   └── <challenge>/
│       └── README.md
└── languages/           # One shared project per programming language
    ├── java/            # Java 21, Maven + JUnit 5
    ├── typescript/      # npm + TypeScript
    └── go/              # One Go module
```

An implementation is optional: a challenge can exist before it is solved in a
specific language. See [`languages/README.md`](./languages/README.md) for the
convention used to add Python, Ruby, or another language.

## Start learning

- Follow the [recommended learning path](./docs/learning-path.md).
- Browse challenges [by topic](./docs/topics/README.md).
- Browse challenges [by difficulty](./docs/difficulty.md).
- Inspect difficulty, patterns, and prerequisites in
  [`catalog.yml`](./catalog.yml).
- Practice a challenge by editing its starter in place. See
  [`docs/practice.md`](./docs/practice.md).
- See how reference implementations are validated in
  [`docs/solution-review.md`](./docs/solution-review.md).

## Practice and verify

```bash
# Go: practice FizzBuzz (the incomplete starter makes this fail at first)
cd languages/go && go test ./tests/fizzbuzz

# TypeScript: practice FizzBuzz
cd languages/typescript && npm install && npm test -- tests/fizzbuzz.test.ts

# Java: practice FizzBuzz
cd languages/java && mvn -Dtest=FizzBuzzTest test
```

These commands test starters and are intentionally red until the exercise is
implemented. Reference verification is a maintainer workflow documented in
[`docs/solution-review.md`](./docs/solution-review.md).

## Challenges

- [Capitalize](./challenges/capitalize/README.md)
- [Chunk Array](./challenges/chunk-array/README.md)
- [Count Digits](./challenges/count-digits/README.md)
- [Diagonal Difference](./challenges/diagonal-difference/README.md)
- [Factorial](./challenges/factorial/README.md)
- [Fibonacci Sequence](./challenges/fibonacci/README.md)
- [First Occurrence](./challenges/first-occurrence/README.md)
- [First Turn in Blackjack](./challenges/first-turn-blackjack/README.md)
- [FizzBuzz](./challenges/fizzbuzz/README.md)
- [Is Unique](./challenges/is-unique/README.md)
- [Valid Parentheses](./challenges/valid-parentheses/README.md)
- [Length of Last Word](./challenges/length-of-last-word/README.md)
- [Lonely Integer](./challenges/lonely-integer/README.md)
- [Longest Common Prefix](./challenges/longest-common-prefix/README.md)
- [Max Char](./challenges/max-char/README.md)
- [Max Profit](./challenges/max-profit/README.md)
- [Merge Strings Alternately](./challenges/merge-strings/README.md)
- [Missing Number](./challenges/missing-number/README.md)
- [Number Palindrome](./challenges/number-palindrome/README.md)
- [Palindrome](./challenges/palindrome/README.md)
- [Reverse Array in Place](./challenges/reverse-array/README.md)
- [Reverse Integer](./challenges/reverse-integer/README.md)
- [Reverse String](./challenges/reverse-string/README.md)
- [Spiral Matrix](./challenges/spiral-matrix/README.md)
- [Sum of Digits](./challenges/sum-digits/README.md)
- [Sum of Natural Numbers](./challenges/sum-natural-numbers/README.md)
- [Valid Anagram](./challenges/valid-anagram/README.md)
- [Vowels Count](./challenges/vowels-count/README.md)
- [Word Count](./challenges/word-count/README.md)
