function solution(k, m, score) {
    let result = 0;
    score.sort((a,b)=>b-a);
    let boxs = Math.floor(score.length / m);
    for(let i = 1; i<=boxs; i++){
        result = result + (score[i*m-1]*m);
    }
    return result;
}