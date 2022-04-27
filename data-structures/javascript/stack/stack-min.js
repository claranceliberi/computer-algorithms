// Stack Min: How would you design a stack which, in addition to push and pop, has a function min 
// which returns the minimum element? Push, pop and min should all operate in 0(1) time.

const test = require('../utils/test')

// LIFO
class Stack{
    constructor(){
        this.items = []
        this.minNum = Number.MAX_SAFE_INTEGER;
        this.mins = {}
    }

    push(value){
        this.items.push(value)

        if(value < this.minNum){
            this.minNum = value;
            this.mins[this.items.length] = this.minNum
        }

        this.mins[this.items.length] = this.minNum  // record min nums
    }

    pop(){
        if(Object.prototype.hasOwnProperty.call(this.mins, this.items.length)){
            this.minNum = this.mins[this.items.length - 1]
            delete this.mins[this.items.length]
        }
        return this.items.pop()
    }

    min(){
        return this.minNum
    }

}


const stack = new Stack()
stack.push(2)
console.log(stack.min(),2)
stack.push(3)
stack.push(0)
console.log(stack.min(),0)
stack.pop()
console.log(stack.min(),2)
