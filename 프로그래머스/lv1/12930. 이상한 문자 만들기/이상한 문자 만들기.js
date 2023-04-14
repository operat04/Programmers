function solution(s) {
    let arr = s.split(" ");
    let result = [];
    for(let el of arr){
        let elarr = el.split("");
        let word = elarr.map((ele,index)=>ele = index%2 === 0 ? ele.toUpperCase() : ele.toLowerCase());
        result.push(word.join(""));
    }
    return result.join(" ");
}