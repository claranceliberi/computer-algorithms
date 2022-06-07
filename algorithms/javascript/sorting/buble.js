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
console.log(bubleSort2([5,2,1,3,6,4]))
console.log(bubleSort([5,9,8,2,1,7,3,6,4]))
console.log(bubleSort2([5,9,8,2,1,7,3,6,4]))
console.log(bubleSort([5291,20,1000,32,61,400]))
console.log(bubleSort2([5291,20,1000,32,61,400]))


/**
 * let us say that length of arr is `n`
 * 1.   - set current index,
 *      - compare current index with next index
 *      - if there is difference (great/less) swapp
 *      - go to next index
 * 2. repeat 1 untill `n` times
 * 
 * Note: for optimisation we can assume that always the last element is sorted and skip it
 * @param {*} arr 
 */

function bubleSort2(arr){
    const n = arr.length;
    let sortedNumbers = 0;
    for(let i =0; i<n ; i++){
        for(let j=0; j<n-(sortedNumbers+1); j++)
            if(arr[j] > arr[j+1]) // sorting ascending order, finding the large number and put it at the end
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        sortedNumbers++
    }

    return arr
}