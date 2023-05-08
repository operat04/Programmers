function solution(nums) {
    let result = 0;
    const isPrime = (num) =>{
        if(num === 1) return false;
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i===0) return false;
        }
        return true;
    }
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                if(isPrime(nums[i]+nums[j]+nums[k])) result ++;
            }
        }
    }

    return result;
}