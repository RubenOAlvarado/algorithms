export function missingNumber(nums: number[]): number {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return (nums.length * (nums.length + 1)) / 2 - sum;
}