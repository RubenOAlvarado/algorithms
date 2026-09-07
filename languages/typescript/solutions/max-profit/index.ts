import { maxProfit } from "./max-profit";

function main(){
    console.log("Max profit from stock prices");
    const prices = [7, 1, 5, 3, 6, 4];
    const result = maxProfit(prices);
    console.log(`Max profit for ${JSON.stringify(prices)} is: ${result}`);
    console.log("Done");
    const prices2 = [3, 2, 1, 4, 5, 9, 6, 8];
    const result2 = maxProfit(prices2);
    console.log(`Max profit for ${JSON.stringify(prices2)} is: ${result2}`);
    console.log("Done");
}

main();