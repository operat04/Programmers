function solution(keymap, targets) {
    let result = [];
    let count = 0;
    targets.forEach((el)=>{
        for(let i=0; i<el.length; i++){
            let key = Infinity;
            keymap.forEach((ele)=>{
                let idx = ele.indexOf(el[i]);
                if(idx !== -1){
                    key = Math.min(key,idx+1);
                }
            })
            count += key;
        }
        result.push(count);
        count = 0;
    });
    result = result.map((el)=>{
        if(el === Infinity){
            el = -1;
        }
        return el;
    })
    return result;
}