function solution(array, n) {
    let newArr = 0;
    
    for(i = 0; i < array.length; i++) {
       if(array[i] === n) {
           newArr++
       }
    }
    return newArr
}