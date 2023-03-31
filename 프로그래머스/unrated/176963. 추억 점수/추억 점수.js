function solution(name, yearning, photo) {
    let score ={};
    let result = new Array(photo.length).fill(0);
    for(let i=0; i<name.length; i++){
        score[name[i]] = yearning[i];
    }
    for(let i=0; i<photo.length; i++){
        for(let j=0; j<photo[i].length; j++){
            if(score[photo[i][j]]===undefined){
                result[i] += 0;
            }else{
                result[i] += score[photo[i][j]];
            }
        }
    }
    return result;
}