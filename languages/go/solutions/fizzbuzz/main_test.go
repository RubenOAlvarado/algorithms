package main

import (
	"reflect"
	"testing"
)

func TestFizzBuzz(t *testing.T) {
	tests := []struct {
		name     string
		n        int
		expected []string
	}{
		{name: "zero", n: 0, expected: []string{}},
		{name: "ordinary numbers", n: 2, expected: []string{"1", "2"}},
		{name: "multiples", n: 5, expected: []string{"1", "2", "Fizz", "4", "Buzz"}},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			actual := FizzBuzz(test.n)
			if !reflect.DeepEqual(actual, test.expected) {
				t.Fatalf("FizzBuzz(%d) = %v; expected %v", test.n, actual, test.expected)
			}
		})
	}
}

func TestFizzBuzzHandlesDivisibilityByBoth(t *testing.T) {
	result := FizzBuzz(15)
	if result[14] != "FizzBuzz" {
		t.Fatalf("FizzBuzz(15)[14] = %q; expected FizzBuzz", result[14])
	}
}
