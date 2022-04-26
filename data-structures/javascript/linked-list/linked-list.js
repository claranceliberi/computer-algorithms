class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(head = null){
        this.head = head
    }

    size(){
        let size=0;
        let node = this.head

        while(node){
            this.size++
            node = node.next
        }

        return size;
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

    getFirst(){
        return this.head
    }

    getLast(){
        let node = this.head;
        
        while(node.next){
            node = node.next
        }

        return node
    }
}

module.exports = {LinkedList,Node}

// const node1 = new Node(1)
// const node2 = new Node(10)

// node1.next = node2

// const linkedList = new LinkedList(node1)

// console.log(linkedList.size())
// console.log(linkedList.getFirst().data)
// console.log(linkedList.getLast().data)