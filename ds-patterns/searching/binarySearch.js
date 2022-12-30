function binarySearch(arr, ele){
  // add whatever parameters you deem necessary - good luck!
    
  let left = 0;
  let right = arr.length - 1;
    
  while(left < right){
      
      let middle = Math.round((left + right) / 2);
      
      if(arr[middle] === ele) return middle;
     
      if(ele < arr[middle]) right = middle;
      if(ele > arr[middle]) left = middle;
  }
  
  return -1;
}

binarySearch([10, 15, 20, 25, 30], 15); // 1