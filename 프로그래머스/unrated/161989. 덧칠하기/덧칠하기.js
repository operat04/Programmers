function solution(n, m, section) {
    let result = 0;
    let current = 0;
    for(check of section){
        if(check>current){
            current = check + m-1;
            result +=1;
        }
    }
    return result;
}