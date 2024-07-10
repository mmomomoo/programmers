
const solution = (s1, s2) => {
    let commonCount = 0; 
    const setS2 = new Set(s2);
    s1.forEach(el => {
        if(setS2.has(el)){
            commonCount++;
        }
    })
    return commonCount;
};