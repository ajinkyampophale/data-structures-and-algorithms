class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

// Add to end and Remove from beginning => For constant time
class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val){
    const newNode = new Node(val);

    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }
    else{
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this.size;
  }

  dequeue(){
    if(!this.first) return null;

    const removedNode = this.first;
    if(this.size === 1) this.last = null;
    this.first = removedNode.next;

    this.size--;
    return removedNode.val;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);