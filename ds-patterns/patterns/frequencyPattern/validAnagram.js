function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if(str1.length !== str2.length) return false;
  
  const obj1 = {};
  const obj2 = {};
  
  for(const ele of str1){
      if(obj1[ele]) obj1[ele]++;
      else obj1[ele] = 1;
  }
  
  console.log(obj1);
  
  for(const ele of str2){
      if(obj2[ele]) obj2[ele]++;
      else obj2[ele] = 1;
  }
  
  console.log(obj2);
  
  for(const key in obj1){
      if(!(key in obj2)) return false;
      
      if(obj1[key] !== obj2[key]) return false;
  }
  
  return true;
}

console.log(validAnagram('anagram', 'nagaram')); // true