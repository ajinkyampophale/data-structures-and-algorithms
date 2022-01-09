class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Adds item at the end
  push(val){
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // Removes a item from the end
  pop(){
    if(!this.head) return undefined;

    const removedNode = this.tail;

    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    else{
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }

    this.length--;
    return removedNode;  
  }

  // Remove a element from start
  shift(){
    if(!this.head) return undefined;

    const removedNode = this.head;

    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  }

  // Adds a element to the start
  unshift(val){
    const newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // Returns a element at particular index
  get(index){

    if(index < 0 || index >= this.length) return false;

    const mid = Math.floor(this.length / 2); 
    let current = null;

    // start from beginning
    if(index <= mid){
      current = this.head;
      let counter = 0;
      while(counter < index){
        current = current.next;
        counter++;
      }
    }
    // start from end
    else{
      current = this.tail;
      let counter = this.length - 1;
      while(counter > index){
        current = current.prev;
        counter--;
      }
    }

    return current;
  }

  // Updates val at particular index
  set(index, val){
    let node = this.get(index);
    if(!node) return false;
    node.val = val;
    return true;
  }

  // Inserts val at particular index
  insert(index, val){

    if(index < 0 || index > this.length) return false;

    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);
  
    let node = this.get(index - 1);
    const newNode = new Node(val);

    newNode.next = node.next;
    newNode.prev = node;
    node.next.prev = newNode;
    node.next = newNode;
    this.length++;
    
    return true;
  }

  // Removes val at particular index
  remove(index){

    if(index < 0 || index >= this.length) return undefined;

    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();

    let beforeNode = this.get(index - 1);
    let removedNode = beforeNode.next;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.prev = null;
    removedNode.next = null;

    return removedNode;
  }

  reverse(){

    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let previous = null;
    let tempNext = null;

    for(let i = 0; i < this.length; i++){
      tempNext = current.next;
      current.next = previous;
      current.prev = tempNext;
      previous = current;
      current = tempNext;
    }

    // null <- 10 <-> 20 <-> 30 <-> 40 -> null
    return this;
  }
}

const dll = new DoublyLinkedList();
dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);
// dll.push(50);
// dll.push(60);
// console.log(dll.pop());
// console.log(dll.pop());
// console.log(dll.pop());
// console.log(dll.pop());
// console.log(dll.shift());
// console.log(dll.shift());
// console.log(dll.shift());
// console.log(dll.shift());
// dll.unshift(80);
// console.log(dll.get(4));
// dll.set(2, 80);
// dll.insert(2, 80);
// console.log(dll.remove(2));
// dll.reverse();
console.dir(dll);