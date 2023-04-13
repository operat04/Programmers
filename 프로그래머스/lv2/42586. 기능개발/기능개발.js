function solution(progresses, speeds) {
    let result = [];
    let days = progresses.map((el,index)=>Math.ceil((100-el)/speeds[index]));
    let count = 1;
    let maxDay = days[0];
    
    for(let i=1; i<days.length; i++){
        if(days[i]<=maxDay){
            count ++;
        }else{
            maxDay = days[i];
            result.push(count);
            count =1;
        }
    }
    result.push(count);
    
    return result;
}