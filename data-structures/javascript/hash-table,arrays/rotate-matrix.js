
// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

const test = require("../utils/test");

//     1            2
//    4+2   ->     1+3
//     3            4

// 1 2 3        3 3 3
// 1 2 3    ->  2 2 2
// 1 2 3        1 1 1

// N = 3;
//  [1][1] -> [3][1],   [1][2] ->  [2][1],      [1][3] ->  [1][1]
//  [2][1] -> [3][2],   [2][2] ->  [2][2],      [2][3] -> [1][2]
// [3][1]  -> [3][3],   [3][2] ->  [2][3],      [3][3] -> [1][3]

// change in row ? 1 -> 3 == (3+1-1)
// change in col ?

// FAILED , to be continued 😔

function rotateMatrix(matrix){
    const length = matrix.length;
    const rm = [];

    for (var i = 0; i < matrix.length; i++)
        rm[i] = matrix[i].slice();
    
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            console.log((length-1)-col,row, '=>' ,matrix[row][col] )
            rm[length-1-row][row] = matrix[row][col]
        }
    }

    return rm;
}


console.log(rotateMatrix([[1,2,3],[1,2,3],[1,2,3]]) , '=>',[[3,3,3],[2,2,2],[1,1,1]],)