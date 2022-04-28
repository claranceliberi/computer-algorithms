// Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple. 
// Therefore, in real life, we would likely start a new stack when the previous stack exceeds some 
// threshold. Implement a data structure SetOfStacks that mimics this. SetO-fStacks should be 
// composed of several stacks and should create a new stack once the previous one exceeds capacity. 
// SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack 
// (that is, pop () should return the same values as it would if there were just a single stack). 
// FOLLOW UP 
// Implement a function popAt ( int index) which performs a pop operation on a specific sub-stack.



class SetOfStacks{
    constructor(capacity){
        this.items = []
        this.capacity = capacity
    }

    push(value){

        // if we have no set of stack
        if(this.items.length < 1){
            this.items.push([value])
        }
        // has some set of stacks
        else {
            // when the last set of stack has not yet been full
            if(this.items[this.items.length -1].length < this.capacity){
                this.items[this.items.length -1].push(value)
            }
            // the last set of stack is full
            else {
                this.items.push([value])
            }
        }
    }

    pop(){
        let popped;
        if(this.items.length > 0){
            popped =  this.items[this.items.length -1].pop()
            if(this.items[this.items.length - 1].length < 1)
                this.items.splice(this.items.length-1,1)
        }

        return popped;
    }
}

const setStack = new SetOfStacks(2);

setStack.push(2)
setStack.push(2)
setStack.push(3)
setStack.push(0)
setStack.push(1)
setStack.push(9)
setStack.push(4)

console.log(setStack)

setStack.pop()
setStack.pop()

console.log(setStack)