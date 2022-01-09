class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(val){
    const newNode = new Node(val);

    if(!this.root){
      this.root = newNode;
    }
    else{
      let node = this.root;

      while(true){
        // equal - don't insert
        if(node.val === val){
          break;
        }
        // right
        else if(node.val < val){
          if(node.right){
            node = node.right;
          }
          else{
            node.right = newNode;
            break;
          }
        }
        // left
        else{
          if(node.left){
            node = node.left;
          }
          else{
            node.left = newNode;
            break;
          }
        }
      }
    }

    return this;
  }

  // Searches if value is present in tree or not
  find(val){
    if(!this.root) return false;

    let current = this.root;
    let found = null;

    while(true){
      // if equal
      if(current.val === val){
        found = current;
        break;
      }
      // right
      else if(current.val < val){
        if(current.right) current = current.right;
        else break;
      }
      // left
      else{
        if(current.left) current = current.left;
        else break;
      }
    }

    return found ? found : false;
  }

  findAlternate(val){
    if(!this.root) return false;

    let current = this.root;
    let found = false;

    while(current && !found){
      // if equal
      if(current.val === val) found = true;
      // right
      else if(current.val < val) current = current.right;
      // left
      else current = current.left;
    }

    return found ? current : false;
  }

  // Tree Travesal - Breadth First Search
  bfs(){
    if(!this.root) return undefined;

    const queue = [this.root];
    const visited = [];

    while(queue.length > 0){
      let current = queue.shift();

      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
      
      visited.push(current.val);
    }

    return visited;
  }

  // Tree Travesal - Depth First Search (PreOrder - Push -> Traverse left -> Tarverse right)
  dfsPreOrder(){
    if(!this.root) return undefined;
  
    const visited = [];

    function traverse(node){
      visited.push(node.val);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(this.root);
    
    return visited;
  }

  // Tree Travesal - Depth First Search (PostOrder - Traverse left -> Tarverse right -> Push)
  dfsPostOrder(){
    if(!this.root) return undefined;

    const visited = [];

    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      visited.push(node.val);
    }

    traverse(this.root);

    return visited;
  }

  // Tree Travesal - Depth First Search (PostOrder - Traverse left -> Push -> Tarverse right)
  dfsInOrder(){
    if(!this.root) return undefined;

    const visited = [];

    function traverse(node){
      if(node.left) traverse(node.left);
      visited.push(node.val);
      if(node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(15);
bst.insert(8);
bst.insert(12);
bst.insert(20);
bst.insert(4);
bst.insert(9);
// bst.insert(9);
// console.log(bst.find(15));
// console.log(bst.find(30));
// console.log(bst.find(4));
console.log(bst.bfs());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.dfsInOrder());
console.log(bst);