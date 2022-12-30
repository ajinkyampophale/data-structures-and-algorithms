function averagePair(arr, avg){
  // add whatever parameters you deem necessary - good luck!
 // array is sorted 
 
  if(arr.lengt <= 0) return false;
 
  let j = arr.length - 1;
  let i = 0;
  
  while(i < j){
      
      let calAvg = (arr[i] + arr[j]) / 2;
      
      if(calAvg > avg){
          j--;
      }
      else if(calAvg < avg){
          i++;
      }
      else{
          return true;
      }
  }
  
  return false;
  
}

averagePair([1, 2, 3], 2.5); // true