function solution(brown, yellow) {
    let sum = brown+yellow;
    for(i=3; i<sum; i++){
        let width = sum/i;
        let height = i;
        if((width-2)*(height-2)===yellow){
            return [width,height]
        }
    }
}