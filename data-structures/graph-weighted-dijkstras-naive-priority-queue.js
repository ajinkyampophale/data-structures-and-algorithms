class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
    return this.values;
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// const pq = new PriorityQueue();
// pq.enqueue("A", 10);
// pq.enqueue("B", 8);
// pq.enqueue("C", 12);
// pq.enqueue("D", 5);
// pq.dequeue();
// console.log(pq);

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