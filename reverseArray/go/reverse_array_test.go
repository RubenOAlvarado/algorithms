package main

import "testing"

func TestReverseArray(t *testing.T) {
	// test case
	arr := []int{1, 2, 3, 4}
	start := 0
	end := 3

	result := ReverseInPlace(arr, start, end)

	expected := []int{4, 3, 2, 1}

	for i := range expected {
		if result[i] != expected[i] {
			t.Errorf("Expected %v, but got %v", expected[i], result[i])
			break
		}
	}

	if &arr[0] != &result[0] {
		t.Error("Expected array to be modified in place, but got a different array reference")
	}
}
