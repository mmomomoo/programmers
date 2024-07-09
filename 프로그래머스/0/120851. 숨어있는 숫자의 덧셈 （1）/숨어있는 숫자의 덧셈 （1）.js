function solution(my_string) {
    let sum = 0;
    let stringArr = my_string.split('');
    for(i = 0; i < stringArr.length; i++){
       if(/\d/.test(stringArr[i])){
           sum += parseInt(stringArr[i], 10);
       }
    }
    return sum;
}
    

