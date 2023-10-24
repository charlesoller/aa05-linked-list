const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

function timeFunction(val){
    const start = performance.now();

    for (let i = 0; i < val; i++){
        test.addToTail(1);
    }

    const end = performance.now();
    return end - start;
}
/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

let test = new LinkedList();

// word word

console.log(timeFunction(10000))
