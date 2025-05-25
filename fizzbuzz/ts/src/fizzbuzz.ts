export function fizzbuzz(n: number): void {
  if (n <= 0) {
    throw new Error("Input must be a positive integer.");
  }

  for(let i = 1; i <= n; i++) {
    console.log(`${i}: ${printFizzBuzz(i)}`);
  }
}

function printFizzBuzz(n: number): string {
    let result = '';

    if (n % 3 === 0) {
        result += 'Fizz';
    }

    if (n % 5 === 0) {
        result += 'Buzz';
    }

    if (n % 3 === 0 && n % 5 === 0) {
        result = 'FizzBuzz';
    }

    return result || n.toString();
}