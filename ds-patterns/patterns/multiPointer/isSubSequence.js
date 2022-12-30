function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  
  let i = 0;
  let j = 0;
  
  while(i < str2.length){
  
  	console.log({str2: str2[i], str1: str1[j]});
      
     if(str2[i] === str1[j]){
         j++;
     }
     
     if(j === str1.length) return true;
     
     i++; 
  }
  
  return false;
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "string"); // true