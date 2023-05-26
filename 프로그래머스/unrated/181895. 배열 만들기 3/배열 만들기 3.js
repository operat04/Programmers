function solution(arr, intervals) {
    let result =[];
    for(el of intervals){
        for(let i=el[0]; i<=el[1]; i++){
            result.push(arr[i]);
        }
    }
    return result;
}