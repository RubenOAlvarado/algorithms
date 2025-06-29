import { longestCommonPrefix } from "./longest-common-prefix";

function main(){
    console.log("Longest Common Prefix Algorithm");
    const strs1 = ["flower", "flow", "flight"];
    console.log("Input:", strs1);
    console.log("Longest Common Prefix:", longestCommonPrefix(strs1));

    const strs2 = ["dog", "racecar", "car"];
    console.log("Input:", strs2);
    console.log("Longest Common Prefix:", longestCommonPrefix(strs2));

    const strs3 = ["a", "b", "c"];
    console.log("Input:", strs3);
    console.log("Longest Common Prefix:", longestCommonPrefix(strs3));

    const strs4: any[] = [];
    console.log("Input:", strs4);
    console.log("Longest Common Prefix:", longestCommonPrefix(strs4));
}

main();