function solution(num_list) { 
    let odd = 0;
    let even = 0;
    for (const element of num_list) {
        if (element % 2 === 1) {
            odd ++;
        } else if (element % 2 === 0) {
            even ++;
        }
    }
    return [even, odd];
}
