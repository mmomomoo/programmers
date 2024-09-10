function solution(my_string) {
    const digits = [...my_string].filter(c =>!isNaN(c) && c !== '').map(Number)
    return digits.sort((a, b) => a - b);
}