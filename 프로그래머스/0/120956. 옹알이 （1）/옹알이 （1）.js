function solution(babbling){
    const Pronunciation = ["aya", "ye", "woo", "ma" ];
    let count = 0;
    
    const pattern = new RegExp(`^(${Pronunciation.join('|')})+$`);
    for (const word of babbling) {
        if (pattern.test(word)) {
            count++;
        }
    }
    return count;
}