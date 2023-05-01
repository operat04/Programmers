function solution(k, tangerine) {
    let result = 0;
    const obj = {};
    for(let i=0; i<tangerine.length; i++){
        obj[tangerine[i]] = obj[tangerine[i]] ? obj[tangerine[i]]+1 : 1 
    }
    const sortedArr = Object.values(obj).sort((a,b)=>b-a);
    for(let j=0; j<sortedArr.length; j++){
        if(k>0){
            k -= sortedArr[j];
            result +=1
        }
    }
    return result;
}