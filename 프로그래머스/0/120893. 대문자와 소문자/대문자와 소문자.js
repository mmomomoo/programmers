function solution(my_string) {
    let result = '';
    for (let char of my_string) result += char === char.toLowerCase()?char.toUpperCase():char.toLowerCase()
    return result;
}
