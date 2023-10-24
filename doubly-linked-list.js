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

    //If this is the first node in the linked list, set the tail to be the newNode (newNode would be head and tail in this instance)
    if (this.tail === null) {
      this.tail = newNode;
    } else {
      //In the case that there is already at least one Node
      //Access this node's prev property, set it to the node being added.
      this.head.prev = newNode;
    }

    //The next will point to this.head
    newNode.next = this.head; // The previous Head reassigned to the next.

    //Prev is equal to null for the new node being added to front.
    this.head = newNode;

    this.length++;
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





  addToTail(val) {

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
