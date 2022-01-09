function prefixTable(str){

	let i = 1; // index we are looking in str
	let j = 0; // length of repeating prefix & suffix
	const table = [0];
  
  while(i < str.length && j < str.length){
  		
      if(str[i] === str[j]){
      	table.push(j + 1);
        j++;
        i++;
      }
      else if(j > 0){
      	table.push(j - 1);
        j--;
        i++;
      }
      // j === 0
      else{
      	table.push(0);
        i++;
      }
  }
  
  return table;
}

function searchStr(str, pattern){
	
  const prefixTableArr = prefixTable(pattern);
  let i = 0;
  let j = 0;
  
  while(i < str.length && j < pattern.length){
  	
    if(str[i] === pattern[j]){
    	i++;
      j++;
    }
    else if(j > 0){
    	i++;
      j = prefixTableArr[j - 1];
    }
    // j === 0
    else{
    	i++;
    }
  } 
  
  if(j === pattern.length) return i - j;
  return -1;
}

console.log(searchStr('aabbbbababbb', 'abab'));


/* 
1234567
aaaabcaab
i

aabcaab
0100123 

aab
 j

*/
/* j  i */

console.log(prefixTable('aabcaab'))