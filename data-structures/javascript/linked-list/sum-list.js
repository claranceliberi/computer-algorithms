// Sum Lists: You have two numbers represented by a linked list, where each node contains a single 
// digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a 
// function that adds the two numbers and returns the sum as a linked list. 
// EXAMPLE 
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295. 
// Output: 2 -> 1 -> 9. That is, 912. 
// FOLLOW UP 
// Suppose the digits are stored in forward order. Repeat the above problem. 
// EXAMPLE 
// lnput:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295. 
// Output: 9 -> 1 -> 2. That is, 912.

const { LinkedList } = require("./linked-list");


function list(list1, list2, forward = false){
    const listArray1 = []
    const listArray2 = []

    let node1 = list1.head;

    while(node1){
        if(!forward)
            listArray1.unshift(node1.data)
        else
            listArray1.push(node1.data)
        node1 = node1.next;
    }


    let node2 = list2.head;

    while(node2){
        if(!forward)
            listArray2.unshift(node2.data)
        else 
            listArray2.push(node2.data)
        node2 = node2.next;
    }

    const num1 = parseInt(listArray1.join(''))
    const num2 = parseInt(listArray2.join(''))

    let sum = (num1+num2).toString().split('')
    
    // reverse when attached
    if(!forward)
        sum = sum.reverse()

    const newList = new LinkedList()
    newList.fromArray(sum)

    return newList
}


const lList1 = new LinkedList()
lList1.fromArray([7,1 ,6])
const lList2 = new LinkedList()
lList2.fromArray([5 ,9,2])

const sumList = list(lList1,lList2,false)
sumList.display()