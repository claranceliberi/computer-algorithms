

// selection sort

// this algorithm loop into the whole array, finds the smalled number and swap it with the first element of unsorted array
/*
let us say we have array [5,2,1,3,6,4]
and since we have not sorted anything yet the first element of unsorted array points on 0 index
and we find the smalled element which is `1` swap it with element at index 0 which is `5`
so the array looks like [1,2,5,3,6,4]
and since element at index 0 is sorted, the first element of the unsorted array is 1 which points to `2`
*/


// O(N^2)
function selectionSort(A){
    let smallesIndex = -1;

    for(let i=0; i< A.length; i++){
        smallesIndex = i

        // find the smallest number
        for(let j=i; j < A.length; j++)
            if(A[j] < A[smallesIndex]){
                smallesIndex = j
            }

        // swapp the found numbers
        [A[i],A[smallesIndex] ]= [A[smallesIndex],A[i]]
    }

    return A;
}


console.log(selectionSort([5,2,1,3,6,4]))
console.log(selectionSort([5,9,8,2,1,7,3,6,4]))
console.log(selectionSort([5291,20,1000,32,61,400]))