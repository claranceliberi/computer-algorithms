// Palindrome: Implement a function to check if a linked list is a palindrome. 

const { LinkedList } = require("./linked-list");
const test = require("../utils/test")

function pelindrome(list){
    let difference =0;
    let occurence = {}

    if(!list || !list.head)
        return false

    let node = list.head;

    while(node){
        if(!occurence[node.data])
            occurence[node.data] = 0

        occurence[node.data] = occurence[node.data] + 1;
        node = node.next
    }

    const keys = Object.keys(occurence)

    console.log(occurence,keys)

    for(let i=0; i<keys.length; i++){
        if(occurence[keys[i]] % 2 > 0)
            difference++
    }

    return difference < 2
}

const linkedlist = new LinkedList()
linkedlist.fromArray([1,2,1])
const linkedList2 = new LinkedList()
linkedList2.fromArray(['a','b','c','d','c','d','a'])
const linkedList3 = new LinkedList()
linkedList2.fromArray(['a','b','c','d','c','b','a'])

test(pelindrome,true,linkedlist)
test(pelindrome,false,linkedList2)
test(pelindrome,true,linkedList2)