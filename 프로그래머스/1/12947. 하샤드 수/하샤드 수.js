function solution(x) {
    let digits = x.toString().split('')
    let digitSum = 0;
    for (let i = 0; i < digits.length; i++) {
        digitSum += parseInt(digits[i]);
    }
    return x % digitSum === 0;
}

