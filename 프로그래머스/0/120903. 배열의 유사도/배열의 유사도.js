function solution(s1, s2) {
    const commonElements = s1.filter(element => s2.includes(element));
    
    return commonElements.length;
}