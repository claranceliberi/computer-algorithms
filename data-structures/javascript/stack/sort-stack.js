// Sort Stack : Write a program to sort a stack such that the smallest items are on the top. You can use 
// an additional temporary stack, but you may not copy the elements into any other data structure 
// (such as an array). The stack supports the following operations: push, pop, peek, and is Empty.

const Stack = require('./stack')


function sortStack(stack){
    let helperStack = new Stack();
    let temp = stack.pop();
    let temp2 =0;
    console.log(stack)
    while(!stack.isEmpty()){
        temp2 = stack.pop();

        console.log(temp,temp2)
        if(temp > temp2){
            helperStack.push(temp)
            temp = temp2
        }
        else
            helperStack.push(temp2)
        
    }
    
    helperStack.push(temp)
    
    console.log(helperStack)
}

const stack = new Stack()
stack.push(4)
stack.push(3)
stack.push(5)
stack.push(1)
stack.push(2)

sortStack(stack)