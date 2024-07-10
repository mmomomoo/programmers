function solution (n) {
    let divisors = [];
    for(i = 1; i <= n; i++) {
        if(n % i === 0){
            divisors.push(i);
        }
    }
    return divisors;
}