const bubbleSort = (arr) => {

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
  }

  for(let i = 0; i < arr.length; i++){

    let noSwaps = true;

    for(let j = 0; j < arr.length - i; j++){

      if(arr[j] > arr[j + 1]){
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if(noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([9, 16, 2, 10]));