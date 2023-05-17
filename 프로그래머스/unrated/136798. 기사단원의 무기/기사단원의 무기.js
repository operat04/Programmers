function solution(number, limit, power) {
    let result = [];
    for(let i=1; i<=number; i++){
        let msnum = 0;
        for(let j=1; j<=Math.sqrt(i); j++){
            if(i%j===0){
                if(i/j===j) msnum+=1;
                else msnum+=2;
            }
        }
        result.push(msnum);
    }
    
    return result.map(el=>el>limit ? power : el).reduce((acc,cur)=>acc+cur)
}