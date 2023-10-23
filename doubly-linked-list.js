class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new DoublyLinkedListNode(val);
    if (this.tail === null) {
      this.tail = newNode;
    }
    newNode.next = this.head; // The previous Head reassigned to the next.

    // if (this.head.prev === null) {
    //   this.head.prev = newNode;
    //   console.log("Flag 1: ", this.head.prev)
    // }
    // console.log("Flag 2: ", this.head)
    // console.log("Flag 3: ", this.head);
    newNode.prev = null;
    this.head = newNode;

    this.length++;
    // console.log("Flag 4: ", newNode)
    console.log(this)

  }


  addToTail(val) {
    // Your code here
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
