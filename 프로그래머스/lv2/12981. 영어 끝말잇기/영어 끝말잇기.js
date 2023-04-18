function solution(n, words) {
    let result = [0,0];
    for(i=0; i<words.length; i++){
        let word = words[i];
        let person = i%n+1;
        let turn = Math.ceil((i+1)/n);
        if(i>0){
            if(i>words.indexOf(word) || words[i-1].at(-1) !== words[i][0]){
                result = [person,turn];
                break;
            }
        }
    }
    return result;
}