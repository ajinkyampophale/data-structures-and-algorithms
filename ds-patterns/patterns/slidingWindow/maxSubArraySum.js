function maxSubarraySum(arr, num){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length <= 0 || arr.length < num) return null;
  
  let sum = 0;
  for(let i = 0; i < num; i++){
      sum += arr[i];
  }
  
  let max = sum;
  
  for(let i = num; i <= arr.length - num + 1; i++){
      
      let calculatedValue = sum + arr[i] - arr[i - num];
      max = Math.max(max, calculatedValue);
      sum = calculatedValue;
  }
  
  return max;
}

maxSubarraySum([100, 200, 300, 400], 2); // 700