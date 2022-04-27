
// LIFO (last in first out)
class Stack{
    constructor(){
        this.items = []
    }

    pop(){
        return this.items.pop()
    }
    push(data){
        this.items.push(data)
    }
    peek(){
        return this.items[this.items.length -1]
    }
    isEmpty(){
        return this.items.length <1
    }
}


module.exports = Stack