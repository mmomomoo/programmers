const clapRole = [3, 6, 9];

function solution(order) {
    let clapCount = 0;
    
    const orderStr = String(order);
    for(let i = 0; orderStr.length > i; i++){
        const digit  = parseInt(orderStr[i]);
        if(clapRole.includes(digit)){
            clapCount++;
        }
            
    }
    return clapCount;
}