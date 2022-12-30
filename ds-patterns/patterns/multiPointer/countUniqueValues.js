function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!

  if(arr.length === 0) return 0;
  
  let pointer1 = 0;
  let pointer2 = 1;
  
  for(let i = 1; i < arr.length; i++){
 
      
      if(arr[pointer1] === arr[pointer2]) pointer2++;
      else{
          pointer1++;
          arr[pointer1] = arr[pointer2];
          pointer2++;
      }
  }
  
  return pointer1 + 1;
  
}


function countUniqueValues2(arr){
  // add whatever parameters you deem necessary - good luck!

  if(arr.length === 0) return 0;
  
  let pointer1 = 0;
  
  for(let i = 1; i < arr.length; i++){
      
      let pointer2Value = arr[i];
      
      if(arr[pointer1] !== pointer2Value){
          arr[pointer1 + 1] = pointer2Value;
          pointer1++;
      }
  }
  
  return pointer1 + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2