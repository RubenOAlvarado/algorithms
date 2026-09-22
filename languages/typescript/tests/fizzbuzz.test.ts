import { describe, expect, it } from "vitest";

import { fizzBuzz } from "../starters/fizzbuzz/fizzbuzz";

describe("fizzBuzz", () => {
  it("n=0 returns an empty collection", () => {
    expect(fizzBuzz(0)).toHaveLength(0);
  });

  it("n=1 represents the first ordinary number", () => {
    expect(fizzBuzz(1)).toEqual(["1"]);
  });

  it("n=3 ends in Fizz", () => {
    expect(fizzBuzz(3).at(-1)).toBe("Fizz");
  });

  it("n=5 matches the example", () => {
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  it("n=15 matches the README example", () => {
    expect(fizzBuzz(15)).toEqual([
      "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz",
      "11", "Fizz", "13", "14", "FizzBuzz",
    ]);
  });

  it("position 15 is FizzBuzz rather than Fizz", () => {
    expect(fizzBuzz(15)[14]).toBe("FizzBuzz");
  });

  it("n=30 has exactly two FizzBuzz values", () => {
    expect(fizzBuzz(30).filter((value) => value === "FizzBuzz")).toHaveLength(2);
  });

  it("n=100 returns one value per input", () => {
    expect(fizzBuzz(100)).toHaveLength(100);
  });
});
