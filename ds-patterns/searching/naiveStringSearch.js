
function naiveStringSearch(longStr, smallStr){

  let count = 0;

  for(let i = 0; i < longStr.length; i++){

    for(let j = 0; j < smallStr.length; j++){

      if(longStr[i + j] !== smallStr[j]) break;

      if(j === smallStr.length - 1) count++; 
    }
  }

  return count;
}

console.log(naiveStringSearch("wowomgwomg", "omg"));

