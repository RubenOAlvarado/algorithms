function pyramidString(n: number): string {
  const midPoint = Math.floor((2 * n - 1) / 2);

  let pyramid = '';
  for (let i = 0; i < n; i++) {
    const spaces = ' '.repeat(midPoint - i);
    const stars = '*'.repeat(2 * i + 1);
    pyramid += spaces + stars + spaces + '\n';
  }
  return pyramid.trim();
}

console.log(pyramidString(5));