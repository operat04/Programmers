function solution(X, Y) {
    let result = '';
    const arrX = X.split('');
    const arrY = Y.split('');
    for(let i=0; i<10; i++){
        const numX = arrX.filter(el=>Number(el)===i).length;
        const numY = arrY.filter(el=>Number(el)===i).length;
        result +=String(i).repeat(Math.min(numX,numY));
    }
    if(result.length===0) return "-1";
    if(Number(result)===0) return "0"
    return result.split('').sort((a,b)=>b-a).join('');
}