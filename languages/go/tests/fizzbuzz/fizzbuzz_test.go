package fizzbuzz_test

import (
	"reflect"
	"testing"

	"github.com/RubenOAlvarado/algorithms/languages/go/starters/fizzbuzz"
)

func TestFizzBuzz(t *testing.T) {
	t.Run("n=0 returns an empty collection", func(t *testing.T) {
		if got := fizzbuzz.FizzBuzz(0); len(got) != 0 {
			t.Fatalf("FizzBuzz(0) returned %d values; want 0", len(got))
		}
	})

	t.Run("n=1 represents the first ordinary number", func(t *testing.T) {
		want := []string{"1"}
		if got := fizzbuzz.FizzBuzz(1); !reflect.DeepEqual(got, want) {
			t.Fatalf("FizzBuzz(1) = %v; want %v", got, want)
		}
	})

	t.Run("n=3 ends in Fizz", func(t *testing.T) {
		got := fizzbuzz.FizzBuzz(3)
		if len(got) != 3 || got[2] != "Fizz" {
			t.Fatalf("FizzBuzz(3) = %v; want final value Fizz", got)
		}
	})

	t.Run("n=5 matches the example", func(t *testing.T) {
		want := []string{"1", "2", "Fizz", "4", "Buzz"}
		if got := fizzbuzz.FizzBuzz(5); !reflect.DeepEqual(got, want) {
			t.Fatalf("FizzBuzz(5) = %v; want %v", got, want)
		}
	})

	t.Run("n=15 matches the README example", func(t *testing.T) {
		want := []string{"1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"}
		if got := fizzbuzz.FizzBuzz(15); !reflect.DeepEqual(got, want) {
			t.Fatalf("FizzBuzz(15) = %v; want %v", got, want)
		}
	})

	t.Run("position 15 is FizzBuzz rather than Fizz", func(t *testing.T) {
		got := fizzbuzz.FizzBuzz(15)
		if len(got) < 15 {
			t.Fatalf("FizzBuzz(15) returned %d values; want at least 15", len(got))
		}
		if got[14] != "FizzBuzz" {
			t.Fatalf("FizzBuzz(15)[14] = %q; want FizzBuzz", got[14])
		}
	})

	t.Run("n=30 has exactly two FizzBuzz values", func(t *testing.T) {
		count := 0
		for _, value := range fizzbuzz.FizzBuzz(30) {
			if value == "FizzBuzz" {
				count++
			}
		}
		if count != 2 {
			t.Fatalf("FizzBuzz(30) has %d FizzBuzz values; want 2", count)
		}
	})

	t.Run("n=100 returns one value per input", func(t *testing.T) {
		if got := fizzbuzz.FizzBuzz(100); len(got) != 100 {
			t.Fatalf("FizzBuzz(100) returned %d values; want 100", len(got))
		}
	})
}
