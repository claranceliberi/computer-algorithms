
// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and 
// column are set to 0. 


// 1 2 3       1 0 3
// 1 0 4       0 0 0
// 2 4 5       2 0 5
// 2 4 5       2 0 5

// ??

// 1 2 3       1 0 3
// 1 0 4       0 0 0
// 2 0 5       0 0 0
// 2 4 5       2 0 5

var printMatrix = function(matrix) {
    for (var i = 0; i < matrix.length; i++) {
      console.log(matrix[i]);
    }
  };

// O(N^2)
function zeroMatrix(matrix){
    let rowWithZero = new Set();
    let colWithZero = new Set();

    for(let row = 0; row < matrix.length; row++){
        for(let col =0; col < matrix[row].length; col++){
            if(matrix[row][col] == 0){
                rowWithZero.add(row)
                colWithZero.add(col)
            }
                
        }
    }

    // zerofy rows
    const rows = Array.from(rowWithZero)
    for(let row =0;row < rows.length; row++){
        for(let col =0; col < matrix[row].length; col++)
            matrix[rows[row]][col] = 0
    }


    // zerofy cols
    const cols = Array.from(colWithZero)
    for(let col =0;col < cols.length; col++){
        for(let row =0; row < matrix.length; row++)
            matrix[row][cols[col]] = 0
    }

    return matrix;
}

var testMatrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ];
  
  console.log('before');
  printMatrix(testMatrix);
  
  zeroMatrix(testMatrix);
  
  console.log('after');
  printMatrix(testMatrix);