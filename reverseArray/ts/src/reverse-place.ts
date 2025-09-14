export function reverseInPlace(arr: number[], start: number, end: number): number[] {
    if (start < 0 || end >= arr.length || start >= end) {
        return arr; // Invalid indices, return original array
    }
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
