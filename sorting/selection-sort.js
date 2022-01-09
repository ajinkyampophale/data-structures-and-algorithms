const selectionSort = (arr) => {

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
  }

  for(let i = 0; i < arr.length; i++){
    let min = i;

    for(let j = i + 1; j < arr.length; j++){

      if(arr[j] < arr[min]){
        min = j;
      }
    }

    if(min !== i) swap(arr, i, min);
  }

  return arr;
}

console.log(selectionSort([9, 16, 2, 10]));