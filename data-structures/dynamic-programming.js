// fib recursive 
function fib(n){
  if(n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// dynamic programming - memoization - top down approach
const memo = [];
function fibMemo(n){
  if(memo[n]) return memo[n];
  if(n <= 2) return 1;
  let result = fibMemo(n - 1) + fibMemo(n - 2);
  memo[n] = result;
  return result; 
}

fibMemo(100);

// dynamic programming - tabulation - bottom up approach
function fibTab(n){
  const arr = [0, 1, 1];
  for(i = 3; i <= n; i++){
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
}

fibTab(100);