function solution(start_num, end_num) {
    let newArr = [];
    for(let i = end_num; i <=start_num; i++){
        newArr.push(i);
        newArr.sort((a, b) => b - a);
    }
    return newArr;
}