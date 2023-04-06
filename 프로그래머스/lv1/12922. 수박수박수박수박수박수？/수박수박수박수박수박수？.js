function solution(n) {
    let result = "수"
    for(let i=2; i<=n; i++){
       result += i%2 ===0 ? "박" : "수" 
    }
    return result;
}