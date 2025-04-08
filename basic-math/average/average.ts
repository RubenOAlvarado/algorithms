function average(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Array cannot be empty");
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

console.log(average([1, 2, 3, 4, 5]));
console.log(average([10, 20, 30, 40, 50]));