export function diagonalDifference(arr: number[][]): number {
    // 1. Initialize two variables to hold the sums of the diagonals.
    let primaryDiagonalSum = 0, secondaryDiagonalSum = 0;
    
    // 2. Loop through each row of the matrix.
    for (let i = 0; i < arr.length; i++) {
        // 3. For each row, add the element at the primary diagonal index to the primary diagonal sum.
        primaryDiagonalSum += arr[i][i];
        // 4. For each row, add the element at the secondary diagonal index to the secondary diagonal sum.
        secondaryDiagonalSum += arr[i][arr.length - 1 - i];
    }
    //5. Calculate the absolute difference between the two sums.
    // 6. Return the absolute difference.
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}