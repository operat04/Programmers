function solution(n) {
    // let result = 0;
    // const isPrime = (num) =>{
    //     for(let i=2; i<=Math.sqrt(num); i++){
    //         if(num%i===0) return false
    //     }
    //     return true;
    // }
    // for(let i=2; i<=n; i++){
    //     if(isPrime(i)){
    //         result ++
    //     }
    // }
    // return result;
    let result = [];
    for(let i=2; i<=n; i++){
        result[i]=i
    }
    for(let i=2; i<=n; i++){
        for(let j=i+i; j<=n; j+=i){
            if(result[j]===0) continue;
            result[j]=0;
        }
    }
    return result.filter(el=>el!==0).length;
}