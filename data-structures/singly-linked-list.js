class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("Kitty");
// console.log(first);

class SinglyLinkedList{

  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // Adds item to the end
  push(val){
    const newNode = new Node(val);

    // if no element is present
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }
    // if more than one element
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
    
  // Removes item from end
  pop(){
    if(!this.head) return undefined;
    let pre = this.head;
    let current = this.head;

    while(current.next){
      pre = current;
      current = current.next;
    }
    
    this.tail = pre;
    this.tail.next = null; // OR pre.next = null;
    this.length--; 
    // If it is the last element
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    return current;
  }

  // Removes item from start
  shift(){
    if(!this.head) return undefined;
    let currHead = this.head;
    this.head = this.head.next;
    this.length--;
    // If it is the last element
    if(this.length === 0) this.tail = null;
    return currHead;
  }

  // Adds item to the start
  unshift(val){
    const newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.next = this.head;
      this.head = newNode;
    }
    
    this.length++;
    return this;
  }

  // Returns node at particular index
  get(index){

    if(index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while(counter < index){
      current = current.next;
      counter++;
    }

    return current;
  }

  // Update element at particular index
  set(index, val){
    let currentNode = this.get(index);
    if(!currentNode) return false;
    currentNode.val = val;
    return true;
  }

  // Insert element at particular index
  insert(index, val){

    if(index < 0 || index > this.length) return false;
    
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);
  
    const newNode = new Node(val);
    let preNode = this.get(index - 1);
    newNode.next = preNode.next
    preNode.next = newNode;
    this.length++;
    return true;
  }

  // Removes element at particular index
  remove(index){

    if(index < 0 || index >= this.length) return false;

    if(index === this.length - 1) return this.pop();
    if(index === 0) return this.shift();

    let preNode = this.get(index - 1);
    let returnNode = preNode.next;
    preNode.next = preNode.next.next;
    this.length--;
    return returnNode;
  }

  // Reverse linked list
  reverse(){
    // swapping head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let previous = null;
    let tempNext = null;

    for(let i = 0; i < this.length; i++){
      tempNext = node.next;
      node.next = previous;
      previous = node;
      node = tempNext;
    }

    // Reverse Logic:
    //         10 -> 20 -> 30 -> 40 -> null
    //         10 (T)            40(H)
    // null <- 10 
    //   P     N
    // null <- 10 <- 20
    //         P     N

    return this;
  }
}

const ll = new SinglyLinkedList();
ll.push(10);
ll.push(20);
ll.push(30);
ll.push(40);
// console.log(ll.pop());
// console.log(ll.shift());
// console.log(ll.shift());
// ll.unshift(50);
// ll.unshift(60);
// console.log(ll.get(0));
// ll.set(2, 80);
// ll.insert(2, 80);
// ll.insert(0, 100);
// ll.insert(6, 110);
// console.log(ll.remove(2));
ll.reverse();
console.log(ll);