function solution(arr) {
    if(arr.length === 1){
        return [-1]
    }
    let result = arr.filter((el)=>el!==Math.min(...arr));
    return result;
}