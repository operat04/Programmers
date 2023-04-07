function solution(left, right) {
    let result = 0
    function isEven(num){
        let count = 1;
        for(let i=1; i<=num/2; i++){
           count += num%i === 0 ? +1 : 0
        }
        return count
    }
    for(let j=left; j<=right; j++){
        result += isEven(j)%2===0 ? j : -j
    }
    return result;
}