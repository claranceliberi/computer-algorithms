// insertion sort


// O(N^2)
function insertionSort(A){
    let sorted = 0;

    while(sorted < A.length){
        if(A[sorted+1] < A[sorted]){
            for(let i=sorted; i >= 0 ; i-- ){
                if(A[i+1] < A[i])
                    [A[i+1],A[i]] = [A[i],A[i +1]]
            }
        }

        sorted++
    }

    return A;
}



console.log(insertionSort([5,2,1,3,6,4]))
console.log(insertionSort([5,9,8,2,1,7,3,6,4]))
console.log(insertionSort([5291,20,1000,32,61,400]))