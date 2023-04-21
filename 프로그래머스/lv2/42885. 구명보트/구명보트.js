function solution(people, limit) {
    let result = 0;
    people.sort((a,b)=>b-a);
    let start = 0;
    let end = people.length - 1;
    while(start < end){
        let sum = people[start] + people[end];
        if(sum > limit){
            start ++;
        }else{
            start ++;
            end --;
        }
        result ++;
    }
    if(start === end){
        result ++;
    }
    return result;
}