function solution(lottos, win_nums) {
    let result = [];
    let win = [6,6,5,4,3,2,1];
    let win_num = 0;
    const zero = lottos.filter(el=>el===0).length;
    for(let i=0; i<lottos.length; i++){
        if(win_nums.indexOf(lottos[i])!==-1){
            win_num += 1;
        }
    }
    return [win[zero+win_num],win[win_num]];
}