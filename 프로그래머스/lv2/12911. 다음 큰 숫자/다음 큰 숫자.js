function solution(n) {
    const findOne = (num) =>{
        let oneNum = num.toString(2).split('');
        let count = 0;
        for(let i=0; i<oneNum.length; i++){
            if(oneNum[i] === "1"){
                count ++;
            }
        }
        return count;
    }
    
    let result = n
    while(true){
        result++
        if(findOne(n) === findOne(result)){
            return result;
        }
    }
}