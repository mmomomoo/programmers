function solution(my_string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = my_string.split('').filter(char => !vowels.includes(char));
    
    return result.join('');
}