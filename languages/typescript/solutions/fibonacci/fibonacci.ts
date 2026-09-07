export function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

export function fibonacciMemoized(n: number, memo: Record<number, number> = {}): number {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
    return memo[n];
}

export function fibonacciIterative(n: number): number {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

export function fibonacciMatrix(n: number): number {
    if (n <= 1) return n;
    const matrix = [[1, 1], [1, 0]];
    const result = matrixExponentiation(matrix, n - 1);
    return result[0][0];
}

function matrixExponentiation(matrix: number[][], n: number): number[][] {
    if (n === 1) return matrix;
    if (n % 2 === 0) {
        const half = matrixExponentiation(matrix, n / 2);
        return multiplyMatrices(half, half);
    } else {
        return multiplyMatrices(matrix, matrixExponentiation(matrix, n - 1));
    }
}

function multiplyMatrices(a: number[][], b: number[][]): number[][] {
    return [
        [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
        [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]]
    ];
}

export function fibonacciBinet(n: number): number {
    const phi = (1 + Math.sqrt(5)) / 2;
    const psi = (1 - Math.sqrt(5)) / 2;
    return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5));
}

export function* fibonacciGenerator(): Generator<number> {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

export function fibonacciTail(n: number, a: number = 0, b: number = 1): number {
    if (n === 0) return a;
    if (n === 1) return b;
    return fibonacciTail(n - 1, b, a + b);
}

export function fibonacciDynamic(n: number): number {
    if (n <= 1) return n;
    const dp: number[] = new Array(n + 1).fill(0);
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

export function fibonacciClosedForm(n: number): number {
    const phi = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(phi, n) / Math.sqrt(5));
}

export function fibonacciBigInt(n: number): bigint {
    if (n <= 1) return BigInt(n);
    let a = BigInt(0), b = BigInt(1);
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

export function fibonacciArray(n: number): number[] {
    const fib: number[] = new Array(n + 1).fill(0);
    fib[0] = 0;
    if (n > 0) fib[1] = 1;
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

export function fibonacciClosure(n: number): () => number {
    return (function fib(n: number, a: number = 0, b: number = 1): () => number {
        if (n === 0) return () => a;
        if (n === 1) return () => b;
        return fib(n - 1, b, a + b);
    })(n);
}
