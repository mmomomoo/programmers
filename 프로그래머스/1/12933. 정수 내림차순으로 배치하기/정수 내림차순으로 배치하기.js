function solution(n) {
    let digits = n.toString().split('');
    
     digits.sort((a, b) => b - a);
    
    let sortedDigits = +digits.join('');
  
    return sortedDigits;
}