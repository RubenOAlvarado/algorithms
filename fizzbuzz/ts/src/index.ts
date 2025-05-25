import { fizzbuzz } from "./fizzbuzz";

function main(){
    console.log("FizzBuzz Program");
    const testValue = 15; // You can change this value to test with different inputs
    try {
        fizzbuzz(testValue);
    } catch (error: any) {
        console.error("An error occurred:", error.message);
    }
}

main();