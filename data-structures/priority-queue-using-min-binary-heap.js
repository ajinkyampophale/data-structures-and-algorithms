class Node{
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

// Using Min Binary Heap
class PriorityQueue{
  constructor(){
    this.values = [];
  }

  // Insert element at correct position
  enqueue(val, priority){
    const newNode = new Node(val, priority);
    this.values.push(newNode);

    if(this.values.length === 1) return this;

    this.bubbleUp();

    return this;
  }

  bubbleUp(){
    let currentIdx = this.values.length - 1;
    let current = this.values[currentIdx];

    while(currentIdx > 0){
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      let parent = this.values[parentIdx];
      if(current.priority >= parent.priority) break;

      // swap
      this.values[currentIdx] = parent;
      this.values[parentIdx] = current;
      currentIdx = parentIdx;
    }
  }

  // Removes element from root
  dequeue(){
    if(this.values.length <= 0) return undefined;

    // swap
    const removedElement = this.values[0];
    const swappedElement = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = swappedElement;
      this.sinkDown();
    }
  
    return removedElement;
  }

  sinkDown(){
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    
    // sink in the swapped element
    while(true){
      let leftChildIdx = (2 * idx) + 1;
      let rightChildIdx = (2 * idx) + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if(leftChild.priority < element.priority){
          swap = leftChildIdx;
        }
      }

      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild.priority < element.priority) || 
          (swap !== null && rightChild.priority < leftChild.priority)
        ){
          swap = rightChildIdx;
        }
      }

      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const pq = new PriorityQueue();
pq.enqueue("Priority High", 2);
pq.enqueue("Priority Critical", 1);
pq.enqueue("Priority Medium", 3);
pq.enqueue("Priority Low", 4);
pq.enqueue("Priority Ultra Critical", 0);
pq.enqueue("Priority Ultra Low", 6);
pq.enqueue("Priority Ultra Medium", 5);
console.log(pq);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);