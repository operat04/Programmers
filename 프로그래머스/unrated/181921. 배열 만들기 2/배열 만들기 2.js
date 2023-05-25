function solution(l, r) {
    let result = [];
    let num = "";
    for(let i=l; i<=r; i++){
        if(i%5!==0) continue;
        num = String(i).replaceAll("5","");
        num = num.replaceAll("0","");
        if(num === ""){
            result.push(i);
        }
    }
    return result.length ? result : [-1];
}