class Stack{
  constructor(){
    this.arr = [];
  }

  push(val){
    return this.arr.push(val);
  }

  pop(){
    return this.arr.pop();
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();
console.log(stack);