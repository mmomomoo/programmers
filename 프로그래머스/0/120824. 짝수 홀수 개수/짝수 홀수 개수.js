function solution(num_list) {
    let counts = [0, 0];
    for (let num of num_list) {
      if(num % 2 === 0) {
        counts[0]++;
    } else {
        counts[1]++;
    }
}
    return counts;
}