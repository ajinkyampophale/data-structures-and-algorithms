function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  
  if(str.length <= 0) return 0;
  
  let start = 0;
  const seen = {};
  let longest = 0;
  
  for(let i = 0; i < str.length; i++){
      
      const char = str[i];
      
      if(seen[char]){
          start = Math.max(start, seen[char]);
      }
      
      longest = Math.max(longest, i - start + 1);
     
      seen[char] = i + 1;
  }
  
  return longest;
}


findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6