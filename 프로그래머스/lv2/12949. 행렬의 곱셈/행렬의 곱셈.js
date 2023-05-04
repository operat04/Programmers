function solution(arr1, arr2) {
    // [2,3,2]     [5,4,3]
    // [4,2,4]     [2,4,1]
    // [3,1,4]     [3,1,1]
    let result = [];
    for(let i=0; i<arr1.length; i++){
        let multiarr= [];
        for(let j=0; j<arr2[0].length; j++){
            let multi =0;
            for(let k=0; k<arr2.length; k++){
                multi += arr1[i][k]*arr2[k][j];
            }
            multiarr.push(multi);
        }
        result.push(multiarr)
    }
    return result;
}
