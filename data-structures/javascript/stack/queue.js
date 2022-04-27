
// first in first out
class Queue{
    constructor(){
        this.items = []
    }

    enqueue(item){
        this.items.push(item)
        return this.items
    }

    dequeue(){
        if(this.item.length > 0)
            return this.items.shift()
    }

    peek(){
        return this.items[this.items.length -1]
    }

    isEmpty(){
        return this.items.length < 1
    }

}


module.exports = Queue