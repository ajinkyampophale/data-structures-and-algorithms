class MaxBinaryHeap{
  constructor(){
    this.values = [];
  }

  // Insert element at correct position
  insert(val){
    this.values.push(val);

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
      if(current <= parent) break;

      // swap
      this.values[currentIdx] = parent;
      this.values[parentIdx] = current;
      currentIdx = parentIdx;
    }
  }

  // Removes element from root
  extractMax(){
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
        if(leftChild > element){
          swap = leftChildIdx;
        }
      }

      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild > element) || 
          (swap !== null && rightChild > leftChild)
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

const heap = new MaxBinaryHeap();
heap.insert(40);
heap.insert(30);
heap.insert(34);
heap.insert(50);
heap.insert(18);
heap.insert(60);
heap.insert(53);
console.log(heap);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap);