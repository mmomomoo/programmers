function solution(my_string, num1, num2) {
    let stringArr = [...my_string];
    [stringArr[num1], stringArr[num2]] = [stringArr[num2], stringArr[num1]]
  
    return stringArr.join('');
}