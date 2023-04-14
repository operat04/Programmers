function solution(n, m) {
    let gcd = 0;
    let lcm = 0;
    let num = n>m ? n : m;
    for(i=1; i<num; i++){
        if(n%i === 0 && m%i ===0){
            gcd = i;
        }
    }
    lcm = n*m / gcd;
    return [gcd,lcm];
}