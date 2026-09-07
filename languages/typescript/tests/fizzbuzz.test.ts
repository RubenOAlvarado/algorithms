import { describe, expect, it } from "vitest";

import { fizzBuzz } from "../solutions/fizzbuzz/fizzbuzz";

describe("fizzBuzz", () => {
  it("returns an empty collection for zero", () => {
    expect(fizzBuzz(0)).toEqual([]);
  });

  it("represents ordinary numbers", () => {
    expect(fizzBuzz(2)).toEqual(["1", "2"]);
  });

  it("replaces multiples of three and five", () => {
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  it("prioritizes values divisible by both three and five", () => {
    expect(fizzBuzz(15).at(-1)).toBe("FizzBuzz");
  });

  it("returns exactly one representation per input value", () => {
    expect(fizzBuzz(100)).toHaveLength(100);
  });
});
