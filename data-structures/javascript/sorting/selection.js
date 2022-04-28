

// selection sort

// this algorithm loop into the whole array, finds the smalled number and swap it with the first element of unsorted array
/*
let us say we have array [5,2,1,3,6,4]
and since we have not sorted anything yet the first element of unsorted array points on 0 index
and we find the smalled element which is `1` swap it with element at index 0 which is `5`
so the array looks like [1,2,5,3,6,4]
and since element at index 0 is sorted, the first element of the unsorted array is 1 which points to `2`
*/

function sort(A){
    let smallest = Number.MAX_SAFE_INTEGER;
    let smallesIndex = -1;
    let temp = 0;

    for(let i=0; i< A.length; i++){

        // find the smallest number
        for(let j=i; j < A.length; j++)
            if(A[j] < smallest){
                smallest = A[j]
                smallesIndex = j
            }

        // swapp the found numbers
        temp = A[i]
        A[i] = smallest
        A[smallesIndex] = temp;

        // reset smallest
        smallest = Number.MAX_SAFE_INTEGER;
    }

    return A;
}


console.log(sort([5,2,1,3,6,4]))
console.log(sort([5,9,8,2,1,7,3,6,4]))
console.log(sort([5291,20,1000,32,61,400]))