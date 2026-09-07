import { reverseInPlace } from "./reverse-place";

function main(): void {
    console.log('Reverse Array in Place');
    const test1 = "[1,2,3,4,5] => [5,4,3,2,1]";
    console.log(test1);
    console.log("Result 1:", reverseInPlace([1, 2, 3, 4, 5], 0, 4));
    const test2 = "[1,2,3,4,5,6] => [6,5,4,3,2,1]";
    console.log(test2);
    console.log("Result 2:", reverseInPlace([1, 2, 3, 4, 5, 6], 0, 5));
}

main();
