function solution(priorities, location) {
    let result = 0;
    let first
    
    while(true){
        first = priorities.shift();
        if(first < Math.max(...priorities)){
            priorities.push(first);
            if(location === 0){
                location = priorities.length-1;
            }else{
                location --;
            }
        }else{
            result ++;
            if(location === 0){
                break;
            }
            location --;
        }
    }
    return result;
}