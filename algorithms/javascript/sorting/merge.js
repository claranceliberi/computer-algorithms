// js


function merge(left,right){
    let arr = []

    while(left.length && right.length){
        if(left[0] < right[0]){
            arr.push(left.shift())
        }
        else{
            arr.push(right.shift())
        }
    }

    return [...arr,...left,...right]
}


function mergeSort(array){
    let mid = Math.floor(array.length/2)

    if(array.length < 2)
        return array

    let left = array.splice(0,mid)
    


    return merge(mergeSort(left),mergeSort(array))
}


console.log(mergeSort([5,2,1,3,6,4]))
console.log(mergeSort([5,9,8,2,1,7,3,6,4]))
console.log(mergeSort([5291,20,1000,32,61,400]))