function solution(array, divisor) {
  const filteredArray = array.filter(element => element % divisor === 0);
  
  if (filteredArray.length === 0) {
    return [-1];
  } 
  return filteredArray.sort((a, b) => a - b);
}

