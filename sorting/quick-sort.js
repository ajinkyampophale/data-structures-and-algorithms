const pivot = (arr, start = 0, end = arr.length + 1) => {

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
  }

  const pivot = arr[start];
  let swapIdx = start;

  for(let i = start + 1; i <= end; i++){

    if(arr[i] < pivot){
      swapIdx++;
      swap(arr, i, swapIdx);
    } 
  }

  // swap pivot element
  swap(arr, start, swapIdx);

  return swapIdx;
}

// console.log(pivot([5, 9, 4, 10, 3, 16]));

const quickSort = (arr, left = 0, right = arr.length - 1) => {

  if(left < right){
    const pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }

  return arr;
}

console.log(quickSort([5, 9, 4, 10, 3, 16]))