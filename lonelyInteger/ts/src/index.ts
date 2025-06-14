import { findLonelyInteger, findLonelyIntegerWithHashMap } from "./lonely-integer";

function main(){
    console.log("Lonely Integer Problem");
    const inputArray = [1, 2, 3, 2, 1];
    const lonelyInteger = findLonelyInteger(inputArray);
    console.log(`The lonely integer is: ${lonelyInteger}`);
    const inputArray2 = [4, 5, 6, 5, 4];
    const lonelyInteger2 = findLonelyInteger(inputArray2);
    console.log(`The lonely integer is: ${lonelyInteger2}`);

    console.log("Same tests with hash map");
    const lonelyInteger3 = findLonelyIntegerWithHashMap(inputArray);
    console.log(`The lonely integer is: ${lonelyInteger3}`);
    const lonelyInteger4 = findLonelyIntegerWithHashMap(inputArray2);
    console.log(`The lonely integer is: ${lonelyInteger4}`);
    console.log("Tests completed.");
}

main();