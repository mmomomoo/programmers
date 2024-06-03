function solution(rsp) {
    const winCase = {
        '2' : '0',
        '0' : '5',
        '5' : '2',
    }
    let result = '';
    for (let char of rsp) {
       result += winCase[char];
    }
    return result;
}