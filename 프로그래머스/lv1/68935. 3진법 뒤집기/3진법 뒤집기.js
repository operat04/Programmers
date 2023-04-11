function solution(n) {
    let three = n.toString(3);
    let reverse = three.split("").reverse().join("");
    return parseInt(reverse,3);
}