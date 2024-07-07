function solution(my_string) {
    let result = ''
    const stringArr = my_string.split('');
    const reverseArr = stringArr.reverse();
    for(const char of reverseArr){
        result += char; 
    }
    return result;
}