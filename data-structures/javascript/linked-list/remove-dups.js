// Remove Dups! Write code to remove duplicates from an unsorted linked list. 
// FOLLOW UP 
// How would you solve this problem if a temporary buffer is not allowed?


class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}


class LinkedList{
    constructor(head = null){
        this.head = head;
        this.size =0;
    }

    fromArray(A){
        this.head = new Node(A[0])
        let i=1;
        this.size = 1;
        let tempNode = this.head;
        while(tempNode && i < A.length){
            tempNode.next = new Node(A[i])
            tempNode = tempNode.next


            if(i < A.length){
                i++
                this.size++
            }
            else 
                tempNode = null

        }
    }


    display(){
        let temp = this.head;
        let display = ''
        while(temp){
            display += temp.data
            
            temp = temp.next;
            if(temp)
                display += ' -> '
        }

        console.log(display)
    }
    
    getSize(){
        return this.size;
    }
}

function removeDuplicate(ll){
    const _set = new Set()
    let cur = ll.head;
    let prev = null;
    while(cur){
        // check if element exists in linked list
        if(_set.has(cur.data)){
            let elem = cur;
            //after we found that this current `list` is a duplicate we need to cut the the link between prev and this
            // let us say this was a -> b -> c
            // so to cut connection we will need to link a->c and cut b, on our usecasee `list

            prev.next = cur.next
            cur = cur.next
            new LinkedList(elem).display()
            elem.next = null
        }else{ // element doens't exist in linked li  st
            _set.add(cur.data)
            prev = cur
            cur = cur .next;
        }

        
    }
}

//
// duplicates

// num  prev    next
// 1    null    2
// 2    1       3
// 3    2       3
// 3    2       4
// 4    3       null

const linkedList = new LinkedList()
linkedList.fromArray([1, 5, 1, 6, 8, 6, 8, 8, 8, 8])
linkedList.display()
removeDuplicate(linkedList)
console.log('after removing')
linkedList.display()
console.log(linkedList.getSize())