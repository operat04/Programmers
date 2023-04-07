function solution(numbers) {
    let result = 0;
    for(i=0; i<10; i++){
        if(numbers.indexOf(i) === -1){
            result += i;
        }
    }
    return result;
}