function solution(k, score) {
    let result = [];
    let rank = [];
    while(score.length>0){
        let least = [];
        rank.push(score.shift());
        rank.sort((a,b)=>b-a);
        least = rank.slice(0,k);
        result.push(Math.min(...least));
    }
    return result;
}