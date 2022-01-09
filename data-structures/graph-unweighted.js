// Undirected Graph
class Graph{
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]) 
      this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2){
    if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return undefined;
    
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2){
    if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return undefined;

    this.adjacencyList[vertex1] = 
      this.adjacencyList[vertex1].filter(v1 => v1 !== vertex2);

    this.adjacencyList[vertex2] = 
      this.adjacencyList[vertex2].filter(v2 => v2 !== vertex1);
  }

  removeVertex(vertex){
    if(!this.adjacencyList[vertex]) return undefined;

    for(const vertex2 of this.adjacencyList[vertex]){
      this.removeEdge(vertex, vertex2);
    }

    delete this.adjacencyList[vertex];    
  }

  dfsRecursion(start){
    if(!this.adjacencyList[start]) return undefined;
    
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList; 

    (function dfs(start){
      if(!start) return;
      visited[start] = true;
      result.push(start);

      for(let neighbour of adjacencyList[start]){
        if(!visited[neighbour]){
          dfs(neighbour);
        }
      }
    })(start);

    return result;
  }

  dfsIterative(start){
    if(!this.adjacencyList[start]) return undefined;

    const visited = {};
    const result = [];
    const stack = [start];
    visited[start] = true;

    while(stack.length > 0){
      let vertex = stack.pop();
      result.push(vertex);
   
      this.adjacencyList[vertex].forEach(neighbour => {
         if(!visited[neighbour]){
           visited[neighbour] = true;
           stack.push(neighbour);
         }
      });
    }

    return result;
  }

  bfsIterative(start){
    if(!this.adjacencyList[start]) return undefined;

    const visited = {};
    const result = [];
    const queue = [start];
    visited[start] = true;

    while(queue.length > 0){
      let vertex = queue.shift();
      result.push(vertex);

      for(let neighbour of this.adjacencyList[vertex]){
        if(!visited[neighbour]){
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      }
    }

    return result;
  }
}

const graph = new Graph();
// graph.addVertex("Mumbai");
// graph.addVertex("Delhi");
// graph.addVertex("Banglore");
// graph.addVertex("Pune");
// graph.addVertex("Chennai");
// graph.addEdge("Mumbai", "Banglore");
// graph.addEdge("Banglore", "Pune");
// graph.addEdge("Banglore", "Delhi");
// graph.addEdge("Mumbai", "Delhi");
// // graph.removeEdge("Banglore", "Pune");
// // graph.removeEdge("Banglore", "Mumbai");
// // graph.removeVertex("Banglore");
// console.log(graph.dfs("Mumbai"));
// console.log(graph);

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph.dfsRecursion("A"));
console.log(graph.dfsIterative("A"));
console.log(graph.bfsIterative("A"));
console.log(graph);