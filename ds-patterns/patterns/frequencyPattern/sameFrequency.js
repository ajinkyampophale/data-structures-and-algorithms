function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  const obj1 = {};
  
  while(num1){
     let lastNum = num1 % 10;
     num1 = Math.floor(num1 / 10);
     obj1[lastNum]  = obj1[lastNum] ? obj1[lastNum] += 1 : 1;
  }
  
  while(num2){
     let lastNum = num2 % 10;
     num2 = Math.floor(num2 / 10);
     
     if(!obj1[lastNum]){
         return false;
     }
     
     obj1[lastNum] -= 1; 
  }
  
//   for(let key in obj1){
//   	if(obj1[key] !== 0){
//     	return false;
//     }
//   }
  
  return true;
}

sameFrequency(182, 281); // true