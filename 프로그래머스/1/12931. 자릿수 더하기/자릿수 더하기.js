function solution(N) {
    let sum = 0;
    let num = N;
    while (num >0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
 