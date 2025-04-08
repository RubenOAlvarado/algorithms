function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Negative numbers are not allowed.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  // Using recursion to calculate factorial
  return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1)); 
console.log(factorial(5));