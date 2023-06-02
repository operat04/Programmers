function solution(n, k) {
    
    const isPrime = (num) =>{
    if(num<=1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
    let result = 0;
    let num = n.toString(k);
    let numArr = num.split("0");
    for(let i=0; i<numArr.length; i++){
        if(isPrime(Number(numArr[i]))){
            result ++;
        }
    }
    return result;
}
