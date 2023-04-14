function solution(n) {
    const Fibo = (num) =>{
        if(num<=2){
            return 1;
        }
        let fibonum = [0,1,1]
        for(let i=3; i<=num; i++){
            fibonum[i] = (fibonum[i-1]%1234567 + fibonum[i-2]%1234567)%1234567;
        }
        return fibonum[n];
    }
    return Fibo(n);
}