function solution(x, n) {
    let arr = new Array(n).fill(0);
    let result = arr.map((el,index)=>el+(index+1)*x);
    return result;
}