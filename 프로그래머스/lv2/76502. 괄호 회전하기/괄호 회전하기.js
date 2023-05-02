function solution(s) {
    let result = 0;
    let stack = [];
    if(s.length%2===1) return 0;
    for(let i=0; i<s.length; i++){
        let turns = s.slice(i) + s.slice(0,i);
        let isRight = true;
        for(let j=0; j<turns.length; j++){
            if(turns[j]==="(" || turns[j]==="[" || turns[j]==="{" ){
                stack.push(turns[j]);
            }else{
                const cur = stack.pop();
                if(turns[j] === ")" && cur ==="(" ) continue;
                if(turns[j] === "}" && cur === "{") continue;
                if(turns[j] === "]" && cur === "[" ) continue;
                isRight = false;
                break;
            }
        }
        if(isRight) result++;
    }
    return result;
}