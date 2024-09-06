function solution(array, height) {
    let answer = array.filter(num => num > height)
    return answer.length;
}