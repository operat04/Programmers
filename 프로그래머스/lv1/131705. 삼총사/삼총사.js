function solution(number) {
    let result = 0;
    const combi =(arr , start) =>{
        if(arr.length === 3){
            result += arr.reduce((acc,cur)=>acc+cur) === 0 ? 1 : 0;
            return
        }
        for(let i=start; i<number.length; i++){
            combi([...arr , number[i]],i+1);
        }
    }
    combi([],0);
    
    return result;
}