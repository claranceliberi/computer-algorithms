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


const node1 = new Node(1)
const node2 = new Node(10)

node1.next = node2

const linkedList = new LinkedList(node1)

console.log(linkedList.size())
console.log(linkedList.getFirst().data)
console.log(linkedList.getLast().data)