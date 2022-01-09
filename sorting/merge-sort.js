const merge = (arr1, arr2) => {
  // merge 2 sorted arrays
  const mergedArr = [];
  let i = 0, j = 0;

  while(i < arr1.length && j < arr2.length){

    if(arr1[i] < arr2[j]){
      mergedArr.push(arr1[i]);
      i++;
    }
    else{
      mergedArr.push(arr2[j]);
      j++
    }
  }

  while(i < arr1.length){
    mergedArr.push(arr1[i]);
    i++
  }

  while(j < arr2.length){
    mergedArr.push(arr2[j]);
    j++
  }

  // OR 

  // if(i < arr1.length){
  //   mergedArr.push(...arr1.splice(i));
  // }

  // if(j < arr2.length){
  //   mergedArr.push(...arr2.splice(j));
  // }

  return mergedArr;
}

// console.log(merge([1, 9], [2, 16]))

const mergeSort = (arr) => {

  if(arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  let result = merge(left, right);

  return result;
}

console.log(mergeSort([9, 2, 16, 8]));