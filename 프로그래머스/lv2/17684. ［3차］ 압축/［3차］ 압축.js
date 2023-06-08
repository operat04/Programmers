function solution(msg) {
    let result = [];
    let dict =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    while(msg.length !==0){
        let w = "";
        for(let i=1; i<=msg.length; i++){
            let wc = msg.slice(0,i);
            if(!dict.includes(wc)){
                dict.push(wc);
                break;
            }
            w = wc;
        }
        result.push(dict.indexOf(w)+1);
        msg = msg.slice(w.length);
    }
    return result;
}