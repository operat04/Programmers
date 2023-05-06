function solution(answers) {
    let result =[0,0,0];
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];
    for(let i=0; i<answers.length; i++){
        if(answers[i]===one[i%5]) result[0]++;
        if(answers[i]===two[i%8]) result[1]++;
        if(answers[i]===three[i%10]) result[2]++;
    }
    let max = Math.max(...result);
    let answer = [];
    let index = 0;
    for(let i=0; i<3; i++){
        if(max===result[i]){
            answer[index] = i + 1
            index ++;
        }
    }
    
    return answer
}