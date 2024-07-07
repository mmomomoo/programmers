function solution(rsp){
  let result = '';
  const reqMap = {
      '2' : '0',
      '0' : '5',
      '5' : '2'
  }
  for(const char of rsp){
      result += reqMap[char];
  }
    return result;
}
      
      
      
      
      
  
