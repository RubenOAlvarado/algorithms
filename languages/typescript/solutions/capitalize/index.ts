import { capitalizeFirst } from "./capitalize-first";

function main(){
    console.log("Capitalize the first letter of each word in a string");
    console.log("Example: 'hello world' => 'Hello World'");
    const str = "hello world";
    const capitalizedStr = capitalizeFirst(str);
    console.log(`Input: ${str}`);
    console.log(`Output: ${capitalizedStr}`);
}

main();