import { isUniqueString, isUniqueStringWithSet } from "./is-unique";

function main(){
    console.log("isUnique algorithm");
    const str = "abcdefg";
    console.log(`Is the string "${str}" unique?`);
    const isUnique = isUniqueString(str);
    if (isUnique) {
        console.log("Yes, all characters are unique.");
    } else {
        console.log("No, there are duplicate characters.");
    }
    console.log("End of isUnique algorithm");
    console.log("isUnique algorithm with Set");
    const isUniqueWithSet = isUniqueStringWithSet(str);
    if (isUniqueWithSet) {
        console.log("Yes, all characters are unique.");
    } else {
        console.log("No, there are duplicate characters.");
    }
    const str2 = "abcdeafg";
    console.log(`Is the string "${str2}" unique?`);
    const isUnique2 = isUniqueString(str2);
    if (isUnique2) {
        console.log("Yes, all characters are unique.");
    } else {
        console.log("No, there are duplicate characters.");
    }
    console.log("End of isUnique algorithm");
}

main();