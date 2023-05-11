// function solution(participant, completion) {
//     let result = "";
//     participant.sort();
//     completion.sort();
    
//     for(let i=0; i<participant.length; i++){
//         if(participant[i] !== completion[i]){
//             result = participant[i];
//             break;
//         }
//     }
//     return result;
// }
const solution = (p, c) => {
    p.sort()
    c.sort()
    while (p.length) {
        let pp = p.pop()
        if (pp !== c.pop()) return pp
    }
}