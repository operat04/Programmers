function solution(s) {
    let arr = s.toLowerCase().split(" ").map(el=>el ? el[0].toUpperCase()+el.slice(1):'');
    return arr.join(" ")
}