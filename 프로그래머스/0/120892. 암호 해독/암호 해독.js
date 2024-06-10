function solution(cipher, code) {
   let decoded = '';
   for (let i = code - 1; i < cipher.length; i += code){
       decoded += cipher[i]
   }
    return decoded;
}