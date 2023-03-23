function solution(t, p) {
    let arr = [];
    let lth = p.length
    for (let i=0; i<t.length; i++){
       let num = t.slice(i,lth);
        if(num.length === p.length){
            arr.push(num);
            lth = lth+1;
        }
    }
    let result = arr.filter(el=>Number(el)<=p)
    return result.length
}