/**
 * Returns the FizzBuzz representation of every integer from 1 through n.
 *
 * Time: O(n)
 * Space: O(n) for the returned collection
 */
export function fizzBuzz(n: number): string[] {
  const result: string[] = [];

  for (let value = 1; value <= n; value++) {
    if (value % 3 === 0 && value % 5 === 0) {
      result.push("FizzBuzz");
    } else if (value % 3 === 0) {
      result.push("Fizz");
    } else if (value % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(value.toString());
    }
  }

  return result;
}
