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

// Undirected & Weighted Graph 
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex])
      this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return undefined;

    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  // Dijkstra's Shortest Path Algo
  shortestPath(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const result = [];

    // Queue => Keeping track of smallest
    // Distances => Keeping track of shortest distance
    // Priority => Keeping track of shortest path (To retrace back the shortest path).
    
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      }
      else{
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      
      previous[vertex] = null;
    }

    while (nodes.values.length > 0) {
      let smallestVertex = nodes.dequeue().val;

      // We're Done
      if(smallestVertex === finish){
        while(previous[smallestVertex]){
          result.push(smallestVertex);
          smallestVertex = previous[smallestVertex];
        }
        break;
      }

      if(smallestVertex || distances[smallestVertex] !== Infinity){
      
        for (let neighbour of this.adjacencyList[smallestVertex]) {
          let {node: neighbourNode, weight: neighbourWeight} = neighbour;

          // calculating new distance from previous node to current node
          //                previous node weight      + current node weight
          let newDistance = distances[smallestVertex] + neighbourWeight;

          if (newDistance < distances[neighbourNode]) {
            distances[neighbourNode] = newDistance;
            previous[neighbourNode] = smallestVertex;
            nodes.enqueue(neighbourNode, newDistance);
          }
        }
      }
    }

    return [start].concat(result.reverse());
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.shortestPath("A", "E"));
console.log(graph);