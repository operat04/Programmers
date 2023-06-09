function solution(want, number, discount) {
    let result = 0;
    for(let i=0; i<discount.length-9; i++){
        let dis = discount.slice(i,i+10);
        let wantnum = 0;
        for(let j=0; j<want.length; j++){
            if(dis.filter(el=>el===want[j]).length === number[j]){
                wantnum ++;
            }
        }
        if(wantnum === want.length){
            result++
        }
    }
    return result;
}