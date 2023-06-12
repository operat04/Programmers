function solution(babbling) {
    let result = 0;
    let able = ["aya","ye","woo","ma"];
    for(let i=0; i<babbling.length; i++){
        let babble = babbling[i];
        for(let j=0; j<able.length; j++){
            if(babble.includes(able[j].repeat(2))){
                break;
            }else{
                babble = babble.split(able[j]).join(" ");
            }
        }
        if(babble.split(" ").join("").length === 0){
            result ++;
        }
    }
    return result;
}