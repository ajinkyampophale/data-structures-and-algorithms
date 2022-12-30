function minSubArrayLen(arr, num){
    
  let start = 0,
   end = 0,
   totalSum = 0,
   min = Infinity;
  
  while(start < arr.length){
      
      if(totalSum < num && end < arr.length){
          totalSum += arr[end];
          end++; 
      }
      else if(totalSum >= num){
          min = Math.min(min, end - start);
          totalSum -= arr[start];
          start++;
      }
      else{
          break;
      }
  }
  
  return min === Infinity ? 0 : min;

}


minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // [4, 3]