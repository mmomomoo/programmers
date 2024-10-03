function solution(num, k) {
    const numString = num.toString();
    const kString = k.toString();
    
    const position = numString.indexOf(kString);
    
    return position !== -1 ? position + 1 : -1;
}