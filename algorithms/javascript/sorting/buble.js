// buble sort



function bubleSort(A){
    let swapCounter= -1;
    let length = A.length -1;
    while(swapCounter != 0){
        swapCounter = 0;
        for(let i=0; i<length; i++){
            if(A[i+1] < A[i]){
                [A[i+1],A[i]] = [A[i], A[i+1]]
                swapCounter++
            }
        }

        length--
    }

    return A
}


console.log(bubleSort([5,2,1,3,6,4]))
console.log(bubleSort([5,9,8,2,1,7,3,6,4]))
console.log(bubleSort([5291,20,1000,32,61,400]))