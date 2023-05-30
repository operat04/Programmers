function solution(rank, attendance) {
    let result = [];
    for(let i=0; i<attendance.length; i++){
        if(attendance[i]){
            result.push(rank[i]);
        }
    }
    result.sort((a,b)=>a-b);
    for(let j=0; j<3; j++){
        result[j] = rank.indexOf(result[j]);
    }
    return result[0]*10000 + result[1] *100 + result[2]
}