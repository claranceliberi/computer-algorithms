// Partition: Write code to partition a linked list around a value x, such that all nodes less than x come 
// before all nodes greater than or equal to x. If x is contained within the list, the values of x only need 
// to be after the elements less than x (see below). The partition element x can appear anywhere in the 
// "right partition"; it does not need to appear between the left and right partitions. 
// EXAMPLE 
// Input: 
// Output: 
// 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5] 
// 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

const {LinkedList,Node} = require("./linked-list");



function partition(list,N){
    let linkedList = new LinkedList(new Node(0));
    let tempHead = linkedList.head;
    tempHead = tempHead.next
    let head = list.head;
    let temp = head;


    // loop on those which are less thatn N
    while(temp){

        if(temp.data < N){

            let cur = {...temp};
            cur.next = null;
            // console.log(tempHead.data,'before')
            tempHead = cur
            console.log(linkedList)
            // console.log(tempHead.data,'in')
            tempHead = tempHead.next
        }

        // console.log(linkedList,tempHead)

        temp = temp.next;
    }

    // loop on those which are great or equal to N
    temp = head;

    // while(temp){
    //     if(temp.data >= N){
    //         let cur = temp;
    //         cur.next = null;
    //         tempHead = temp
    //         tempHead = tempHead.next
    //     }

    //     temp = temp.next;
    // }

    console.log(linkedList.head.data)

    return linkedList;
}

const linkedList = new LinkedList();
linkedList.fromArray([3,5,8,5,10,2,1])

linkedList.display()
const partitionedList = partition(linkedList,5)

console.log('After partition by ', 5)
partitionedList.display();
