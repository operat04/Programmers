function solution(n) {
    let result = new Array(n).fill(0);
    result[0] = 1;
    result[1] = 1;
    for(let i=2; i<=n; i++){
        result[i]=(result[i-2]+result[i-1])%1234567
    }
    return result[n]
}