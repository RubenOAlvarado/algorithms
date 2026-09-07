import { isValidParenthesis } from "./is-valid-parenthesis";

function main(){
    console.log("Valid Parentheses Checker");
    const input = "()[]{}";
    console.log(`Input: "${input}"`);
    console.log(`Output: ${isValidParenthesis(input)}`);
    const input2 = "([)]";
    console.log(`Input: "${input2}"`);
    console.log(`Output: ${isValidParenthesis(input2)}`);
    const input3 = "{[]}";
    console.log(`Input: "${input3}"`);
    console.log(`Output: ${isValidParenthesis(input3)}`);
    const input4 = "([{}])";
    console.log(`Input: "${input4}"`);
    console.log(`Output: ${isValidParenthesis(input4)}`);
}

main();