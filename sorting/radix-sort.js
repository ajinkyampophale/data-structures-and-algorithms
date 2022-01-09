// returns digit at i place
const getDigits = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// getDigits(6174, 3);

// returns how many digits are there in a number
const digitCount = (num) => {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// digitCount(456)

// returns number of digits of the largest number
const mostDigits = (arr) => {
  let max = 0;

  for(let i = 0; i < arr.length; i++){
    max = Math.max(max, digitCount(arr[i]));
  }

  return max;
}

// mostDigits([10, 245, 251, 9765, 18, 8])

const radixSort = (arr) => {

  const maxDigits = mostDigits(arr);
  
  for(let i = 0; i < maxDigits; i++){
    const buckets = Array.from({length: 10}, () => []);

    for(let j = 0; j < arr.length; j++){
      let digit = getDigits(arr[j], i);
      buckets[digit].push(arr[j]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

console.log(radixSort([10, 245, 251, 9765, 18, 8]))