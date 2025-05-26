import { spiralOrder } from "./spiralMatrix";

function main(){
    console.log("Spiral Matrix");
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log("Input Matrix:", matrix);
    const spiralOrderMatrix = spiralOrder(matrix);
    console.log("Spiral Order:", spiralOrderMatrix);
}

main();