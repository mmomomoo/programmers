function solution(my_string, n) {
    let result = '';
    for(const char of my_string) {
        for(i = 0; i < n; i ++){
            result += char;
        }
    }
    return result;
}