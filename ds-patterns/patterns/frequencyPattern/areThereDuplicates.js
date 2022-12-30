function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  
  const obj = {};
  
  for(const ele of args){
      
      if(obj[ele]){
          return true;
      }
      else{
          obj[ele] = 1;
      }
  }
  
  return false;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true