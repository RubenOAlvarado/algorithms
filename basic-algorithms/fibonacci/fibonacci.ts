function fibonacci(): () => number {
  let a = 0, b = 1;
  return () => {
    const fib = a;
    [a, b] = [b, a + b];
    return fib;
  }
}

const fib = fibonacci();
console.log(fib()); // 0
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3