const insertionSort = (arr) => {

  for(let i = 1; i < arr.length; i++){

    let currentVal = arr[i];
    let j = i - 1;

    for(; j >= 0 && arr[j] > currentVal ; j--){
      console.log(j);
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([9, 16, 2, 10]));

// OR

const insertionSort = (arr) => {

  for(let i = 1; i < arr.length; i++){

    let currentVal = arr[i];
    let j = i - 1;

    for(; j >= 0; j--){
      if(arr[j] > currentVal) arr[j + 1] = arr[j];
      else break;
    }

    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([9, 16, 2, 10]));

// OR 

const insertionSort = (arr) => {

  for(let i = 1; i < arr.length; i++){

    let currentVal = arr[i];

    for(var j = i - 1; j >= 0; j--){
      if(arr[j] > currentVal) arr[j + 1] = arr[j];
      else break;
    }

    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([9, 16, 2, 10]));