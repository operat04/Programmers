function solution(N, stages) {
    let result = [];
    let success = stages.length;
    for(let i=1; i<=N; i++){
        let failure = stages.filter(el=>el===i).length;
        let failrate = failure/success;
        success -= failure;
        result.push([i,failrate]);
    }
    return result.sort((a,b)=>b[1]-a[1]).map(el=>el[0]);
}