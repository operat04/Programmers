function solution(price, money, count) {
    let result = 0;
    for(let i=1; i<=count; i++){
        result += price * i;
    }
    if(result - money > 0){
        return result - money
    }else{
        return 0
    }
}