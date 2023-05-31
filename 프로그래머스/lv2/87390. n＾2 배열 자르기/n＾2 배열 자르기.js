function solution(n, left, right) {
    let result = [];
    for(let i=left; i<=right; i++){
        let y = parseInt(i/n);
        let x = i%n;
        result.push(Math.max(x,y)+1);
    }
    return result;
}