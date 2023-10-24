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
    if (this.head === null) {
      this.head = newNode; // set head to newNode if null
      this.tail = this.head // set tail to head
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

//   const newNode = new DoublyLinkedListNode(val);
//   if (this.tail === null) {
//     this.tail = newNode; // set head to newNode if null
//     // this.tail = this.head // set tail to head
//   } else {
//     this.head.prev = newNode;

//   }
//   newNode.next = this.head;
//   this.head = newNode;
//   this.length++;
// }




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
