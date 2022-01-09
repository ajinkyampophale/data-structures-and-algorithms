class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

// push & pop should be contant time so we use shift and unshift because pop is of O(n) complexity
class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  push(val){
    const newNode = new Node(val);

    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }
    else{
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size++;
    return this.size;
  }

  pop(){
    if(!this.first) return null;

    let removedNode = this.first;
    if(this.size === 1) this.last = null;
    this.first = removedNode.next;
    
    this.size--;
    return removedNode.val;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);