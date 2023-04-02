function solution(s) {
    let stack =[];
    let count = 0;
    for(let i=0; i<s.length; i++){
        stack.push(s[i]);
        let same = stack.filter(el=>el===stack[0]);
        let diff = stack.filter(el=>el!==stack[0]);
        if(same.length === diff.length){
            count += 1;
            stack = [];
        }
    }
    if(stack.length !==0){
        count +=1;
    }
    return count
}