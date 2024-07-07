function solution(message) {
    let letterCount = 0;
    const letterArr = message.split('');
    for(i = 0; i < letterArr.length; i++){
        letterCount += 2;
    }
    return letterCount;

}