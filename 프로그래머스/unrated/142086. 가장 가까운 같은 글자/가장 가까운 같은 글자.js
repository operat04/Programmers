function solution(s) {
    const result = [];
    const stack = [];
    for(let i=0; i<s.length; i++){
        if(!stack.includes(s[i])){
            result.push(-1);
            stack.push(s[i]);
            continue
        }
        if(stack.includes(s[i])){
            result.push(stack.length-stack.lastIndexOf(s[i]));
            stack.push(s[i]);
            continue
        }
    }
    return result;
}