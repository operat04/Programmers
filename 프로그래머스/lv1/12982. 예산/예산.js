function solution(d, budget) {
    d.sort((a,b)=>a-b);
    let result = 0;
    for(let i=0; i<d.length; i++){
        if(budget-d[i]>=0){
            budget -= d[i];
            result += 1;
        }else{
            break;
        }
    }
    return result;
}