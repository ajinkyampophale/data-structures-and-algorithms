class Queue{
  constructor(){
    this.arr = [];
  }

  enqueue(val){
    return this.arr.push(val);
  }

  dequeue(){
    return this.arr.shift();
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