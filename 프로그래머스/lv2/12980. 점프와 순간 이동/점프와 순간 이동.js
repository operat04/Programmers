function solution(n)
{
    let result = 1;
    while(n !== 1){
        if(n%2 === 1){
            n -= 1;
            result += 1;
        }else{
            n= n/2
        }
    }
    return result;
}