function solution(s) {
    let num = "0123456789"
    let result = false;
    if(s.length ===4 || s.length === 6){
        for(i=0; i<s.length; i++){
            if(num.includes(s[i])){
                result = true;
            }else{
                result = false;
                break;
            }
        }
    }
    return result;
}