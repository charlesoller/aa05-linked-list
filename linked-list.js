class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {

    const newNode = new LinkedListNode(val);

    //If there is not a head, add the newNode as head
    if(this.head === null){
      this.head = newNode;
    } else {
      //set current to current head
      let current = this.head;

      //Traverse until we hit a null
      while(current.next){
        current = current.next;
      }

      //Once we hit null, we're at the end, set next to newNode.
      current.next = newNode;
    }

    //Increment length to reflect added node
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
