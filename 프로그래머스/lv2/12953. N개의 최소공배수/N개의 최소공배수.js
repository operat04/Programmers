function solution(arr) {
    const getGcd = (a,b) =>{
        if(b===0) return a;
        return getGcd(b,a%b);
    }
    
    return arr.reduce((acc,cur)=>(acc*cur) / getGcd(acc,cur));
}