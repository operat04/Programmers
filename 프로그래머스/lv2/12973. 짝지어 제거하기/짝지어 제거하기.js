function solution(s)
{
//     let index = 0;
//     while(s.length>0){
//         if(index === s.length){
//             break;
//         }
//         if(s[index]===s[index+1]){
//             s = s.slice(0,index) + s.slice(index+2);
//             index = 0;
//         }else{
//             index= index+1;
//         }
//     }
//     return s.length === 0 ? 1 : 0
    let stack = [];
    for(let i=0; i<s.length; i++){
        if(stack.length === 0 || stack[stack.length-1] !== s[i]){
            stack.push(s[i]);
        }else{
            stack.pop();
        }
    }
    return stack.length === 0 ? 1 : 0
}